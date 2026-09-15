import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const PORT = Number(process.env.PORT || 3001)
const isProd = process.env.NODE_ENV === 'production'

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com'
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'true') === 'true'
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER
const MAIL_TO = process.env.MAIL_TO || SMTP_USER

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '32kb' }))
app.use(
  cors({
    origin: isProd
      ? (process.env.CORS_ORIGIN || true)
      : ['http://localhost:5173', 'http://127.0.0.1:5173'],
  }),
)

const rateWindowMs = 15 * 60 * 1000
const rateLimitMax = 8
/** @type {Map<string, { count: number; resetAt: number }>} */
const hits = new Map()

function rateLimit(ip) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + rateWindowMs })
    return true
  }
  if (entry.count >= rateLimitMax) return false
  entry.count += 1
  return true
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function createTransport() {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP credentials are missing. Set SMTP_USER and SMTP_PASS in .env')
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      minVersion: 'TLSv1.2',
    },
  })
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    smtpConfigured: Boolean(SMTP_USER && SMTP_PASS),
  })
})

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.ip || req.socket.remoteAddress || 'unknown'
    if (!rateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Too many messages. Please try again in a few minutes.',
      })
    }

    const {
      name = '',
      email = '',
      queryType = '',
      product = '',
      message = '',
      company = '',
    } = req.body || {}

    // Honeypot — bots fill this; humans never see it
    if (company) {
      return res.json({ success: true })
    }

    const cleanName = String(name).trim().slice(0, 120)
    const cleanEmail = String(email).trim().slice(0, 180)
    const cleanQuery = String(queryType).trim().slice(0, 80)
    const cleanProduct = String(product).trim().slice(0, 80)
    const cleanMessage = String(message).trim().slice(0, 5000)

    if (!cleanName || !cleanEmail || !cleanQuery || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in name, email, query type, and message.',
      })
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid work email.',
      })
    }

    const transporter = createTransport()

    const subject = `[ZyrOps Contact] ${cleanQuery}${cleanProduct ? ` · ${cleanProduct}` : ''} — ${cleanName}`

    const textBody = [
      'New contact form submission from zyrops.com',
      '',
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Query type: ${cleanQuery}`,
      `Product: ${cleanProduct || '—'}`,
      '',
      'Message:',
      cleanMessage,
      '',
      '—',
      'ZyrOps · Uthradam Building, Kuttikattoor, Calicut',
    ].join('\n')

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#141414;max-width:640px">
        <h2 style="margin:0 0 12px">New contact form submission</h2>
        <p style="margin:0 0 16px;color:#6a645c">Received via ZyrOps website contact form.</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          <tr><td style="padding:8px 0;color:#6a645c;width:140px">Name</td><td style="padding:8px 0"><strong>${escapeHtml(cleanName)}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#6a645c">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6a645c">Query type</td><td style="padding:8px 0">${escapeHtml(cleanQuery)}</td></tr>
          <tr><td style="padding:8px 0;color:#6a645c">Product</td><td style="padding:8px 0">${escapeHtml(cleanProduct || '—')}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;border-radius:12px;background:#f5f2ec;border:1px solid #e4dfd6">
          <p style="margin:0 0 8px;font-weight:600">Message</p>
          <p style="margin:0;white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>
        </div>
        <p style="margin:20px 0 0;font-size:12px;color:#6a645c">ZyrOps · Uthradam Building, Kuttikattoor, Calicut</p>
      </div>
    `

    await transporter.sendMail({
      from: `"ZyrOps Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: cleanEmail,
      subject,
      text: textBody,
      html: htmlBody,
    })

    // Optional confirmation to the sender
    if (String(process.env.MAIL_SEND_CONFIRMATION || 'true') === 'true') {
      await transporter.sendMail({
        from: `"ZyrOps" <${MAIL_FROM}>`,
        to: cleanEmail,
        subject: 'We received your message — ZyrOps',
        text: [
          `Hi ${cleanName},`,
          '',
          'Thanks for contacting ZyrOps. We received your message and typically reply within one business day.',
          '',
          `Query type: ${cleanQuery}`,
          cleanProduct ? `Product: ${cleanProduct}` : '',
          '',
          '—',
          'ZyrOps',
          'Uthradam Building, Kuttikattoor, Calicut',
          'hello@zyrops.com · +91 94887 66222',
        ]
          .filter(Boolean)
          .join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.5;color:#141414;max-width:560px">
            <p>Hi ${escapeHtml(cleanName)},</p>
            <p>Thanks for contacting <strong>ZyrOps</strong>. We received your message and typically reply within one business day.</p>
            <p style="color:#6a645c;font-size:14px">Query: ${escapeHtml(cleanQuery)}${cleanProduct ? ` · ${escapeHtml(cleanProduct)}` : ''}</p>
            <p style="margin-top:24px;font-size:13px;color:#6a645c">
              ZyrOps<br/>
              Uthradam Building, Kuttikattoor, Calicut<br/>
              <a href="mailto:hello@zyrops.com">hello@zyrops.com</a> · +91 94887 66222
            </p>
          </div>
        `,
      })
    }

    return res.json({ success: true })
  } catch (error) {
    console.error('[contact]', error)
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error && error.message.includes('SMTP credentials')
          ? error.message
          : 'Unable to send email right now. Please email hello@zyrops.com directly.',
    })
  }
})

if (isProd) {
  const distDir = path.join(rootDir, 'dist')
  app.use(express.static(distDir))
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`ZyrOps API listening on http://localhost:${PORT}`)
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn('Warning: SMTP_USER / SMTP_PASS not set — contact form will fail until configured.')
  }
})
