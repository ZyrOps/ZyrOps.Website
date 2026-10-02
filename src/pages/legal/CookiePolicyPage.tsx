import { Link } from 'react-router-dom'
import { LegalLayout } from '../../components/LegalLayout'

const UPDATED = '2 October 2026'

export function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy — Website Storage & Tracking | ZyrOps"
      description="How ZyrOps uses cookies and similar technologies on zyrops.com, what is essential, and how you can manage storage under India’s DPDP Act."
      path="/cookies"
      heading="Cookie Policy"
      updated={UPDATED}
    >
      <section>
        <p>
          This Cookie Policy explains how <strong>ZyrOps Technologies LLP</strong> uses cookies
          and similar technologies on <strong>zyrops.com</strong>. It forms part of our{' '}
          <Link to="/privacy">Privacy Notice</Link> under the Digital Personal Data Protection
          Act, 2023.
        </p>
      </section>

      <section>
        <h2>1. What are cookies and similar technologies?</h2>
        <p>
          Cookies are small text files stored on your device. We may also use similar
          technologies such as <strong>session storage</strong> or <strong>local storage</strong>{' '}
          in your browser. These can involve device or session identifiers that may be personal
          data when linked to you.
        </p>
      </section>

      <section>
        <h2>2. What we use today</h2>
        <p>
          Our public marketing website is designed to work with{' '}
          <strong>essential / strictly necessary</strong> storage only. We do{' '}
          <strong>not</strong> currently load third-party advertising pixels, social trackers, or
          non-essential analytics cookies on zyrops.com.
        </p>

        <div className="mt-6 overflow-x-auto rounded-[16px] border border-line">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-surface text-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Name / type</th>
                <th className="px-4 py-3 font-semibold">Purpose</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold">Consent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-4 py-3 align-top">
                  Server / security logs
                  <br />
                  <span className="text-xs text-muted">(not a browser cookie)</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Operate the site, diagnose errors, prevent abuse
                </td>
                <td className="px-4 py-3 align-top">Limited operational period</td>
                <td className="px-4 py-3 align-top">Essential</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top">
                  <code className="rounded bg-surface px-1.5 py-0.5 text-xs text-ink">
                    zyrops-support-chat-v1
                  </code>
                  <br />
                  <span className="text-xs text-muted">sessionStorage</span>
                </td>
                <td className="px-4 py-3 align-top">
                  Keep ZyroAssist chat messages during your browser session
                </td>
                <td className="px-4 py-3 align-top">Until the tab/session ends</td>
                <td className="px-4 py-3 align-top">Essential for the chat feature</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>3. If we add non-essential cookies later</h2>
        <p>
          If we introduce analytics, marketing, or preference cookies that are not strictly
          necessary, we will:
        </p>
        <ul>
          <li>Update this Cookie Policy with an itemised list</li>
          <li>
            Seek your <strong>prior affirmative consent</strong> before setting those cookies
          </li>
          <li>Provide a way to withdraw consent that is as easy as giving it</li>
        </ul>
      </section>

      <section>
        <h2>4. How to manage storage</h2>
        <ul>
          <li>
            Clear site data or cookies in your browser settings for <strong>zyrops.com</strong>
          </li>
          <li>
            Close the browser tab to clear ZyroAssist <strong>sessionStorage</strong>
          </li>
          <li>
            Use private / incognito browsing if you prefer not to retain session history
          </li>
        </ul>
        <p className="mt-4">
          Blocking essential storage may prevent parts of the site (such as the support chat)
          from working correctly.
        </p>
      </section>

      <section>
        <h2>5. Your rights</h2>
        <p>
          For access, correction, erasure, consent withdrawal, and grievances, see{' '}
          <Link to="/data-rights">Data Rights &amp; Grievance</Link> and our{' '}
          <Link to="/privacy">Privacy Notice</Link>.
        </p>
      </section>
    </LegalLayout>
  )
}
