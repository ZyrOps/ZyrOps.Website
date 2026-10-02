import { Link } from 'react-router-dom'
import { LegalLayout } from '../../components/LegalLayout'

const UPDATED = '2 October 2026'

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Notice — Digital Personal Data Protection | ZyrOps"
      description="Standalone privacy notice under India’s Digital Personal Data Protection Act, 2023: what personal data ZyrOps collects, why, how to withdraw consent, and how to exercise your rights."
      path="/privacy"
      heading="Privacy Notice"
      updated={UPDATED}
    >
      <section>
        <p>
          This Privacy Notice is issued by <strong>ZyrOps Technologies LLP</strong> (“ZyrOps”,
          “we”, “us”) as a <strong>Data Fiduciary</strong> under the{' '}
          <strong>Digital Personal Data Protection Act, 2023</strong> (“DPDP Act”) and the
          Digital Personal Data Protection Rules, 2025 (“DPDP Rules”). It is a standalone notice
          so you can give <strong>specific and informed consent</strong> for processing of your
          personal data, separate from our Terms of Use.
        </p>
        <p className="mt-4">
          You may also read this notice in English. If you need help accessing it, email{' '}
          <a href="mailto:hello@zyrops.com">hello@zyrops.com</a>.
        </p>
      </section>

      <section>
        <h2>1. Who we are</h2>
        <ul>
          <li>
            <strong>Legal name:</strong> ZyrOps Technologies LLP
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://zyrops.com">https://zyrops.com</a>
          </li>
          <li>
            <strong>Address:</strong> Uthradam Building, Kuttikattoor, Calicut, Kerala, India
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+919488766222">+91 94887 66222</a>
          </li>
          <li>
            <strong>Privacy &amp; grievance contact:</strong>{' '}
            <a href="mailto:hello@zyrops.com?subject=Privacy%20%2F%20DPDP%20query">
              hello@zyrops.com
            </a>{' '}
            (subject: “Privacy / DPDP”)
          </li>
        </ul>
        <p className="mt-4">
          For product accounts (e.g. ZyroHR, ZyroCRM), the organisation that contracted with
          ZyrOps is typically the Data Fiduciary for employee or customer data hosted in that
          product. This notice covers personal data we collect through{' '}
          <strong>zyrops.com</strong> and related marketing, sales, support, and careers
          activities.
        </p>
      </section>

      <section>
        <h2>2. Personal data we collect (itemised)</h2>
        <h3>A. Contact, demo, and support enquiries</h3>
        <ul>
          <li>Name</li>
          <li>Work email address</li>
          <li>Phone number (if you provide it)</li>
          <li>Company / organisation name (if you provide it)</li>
          <li>Query type and related product interest</li>
          <li>Message content and any attachments you send</li>
        </ul>
        <p className="mt-3">
          <strong>Purpose:</strong> respond to your enquiry, schedule demos, provide support,
          and follow up on product or services interest.
        </p>
        <p className="mt-2">
          <strong>Goods / services / uses enabled:</strong> sales and support responses; product
          information; demo or pricing discussions; technical assistance.
        </p>

        <h3>B. Careers / recruitment</h3>
        <ul>
          <li>Name, email, phone, and location (as provided)</li>
          <li>CV / résumé, cover letter, portfolio links</li>
          <li>Employment history, education, and skills you share</li>
          <li>Application answers and interview notes we create</li>
        </ul>
        <p className="mt-3">
          <strong>Purpose:</strong> evaluate candidacy, schedule interviews, and communicate
          about roles at ZyrOps.
        </p>
        <p className="mt-2">
          <strong>Uses enabled:</strong> recruitment and hiring decisions; role-related
          communication.
        </p>

        <h3>C. On-site assistant (ZyroAssist)</h3>
        <ul>
          <li>Chat messages you type in the browser session</li>
          <li>Technical session storage needed to keep the chat open during your visit</li>
        </ul>
        <p className="mt-3">
          <strong>Purpose:</strong> provide instant product and support guidance on this
          website. Chat history is kept in your browser session storage and is not used to
          build a marketing profile.
        </p>

        <h3>D. Website and security technical data</h3>
        <ul>
          <li>IP address, browser type, device/OS signals (as logged by our servers)</li>
          <li>Pages requested, referral URL, date/time, and error logs</li>
          <li>Essential cookies or similar storage required for security and basic site function</li>
        </ul>
        <p className="mt-3">
          <strong>Purpose:</strong> operate, secure, and troubleshoot the website; prevent abuse;
          improve reliability.
        </p>
        <p className="mt-2">
          See our <Link to="/cookies">Cookie Policy</Link> for storage details.
        </p>
      </section>

      <section>
        <h2>3. How we process your data (consent &amp; other lawful uses)</h2>
        <p>
          Where required under the DPDP Act, we process personal data based on your{' '}
          <strong>free, specific, informed, unconditional, and unambiguous consent</strong>,
          given by a clear affirmative action (for example, submitting a form after reviewing
          this notice).
        </p>
        <p className="mt-4">
          We may also process personal data for certain <strong>legitimate uses</strong>{' '}
          recognised under the DPDP Act (for example, where processing is necessary to comply
          with law, or for employment-related purposes where applicable), without relying on
          consent for that specific use.
        </p>
        <p className="mt-4">
          We do <strong>not</strong> sell personal data. We process only what is necessary for
          the stated purpose.
        </p>
      </section>

      <section>
        <h2>4. Sharing with others</h2>
        <p>We may share personal data with:</p>
        <ul>
          <li>
            <strong>Service providers (Data Processors)</strong> who host email, infrastructure,
            or tools we use to run the website and respond to you — under contracts requiring
            reasonable security safeguards
          </li>
          <li>
            <strong>Professional advisers</strong> (legal, accounting) where needed
          </li>
          <li>
            <strong>Authorities</strong> where required by applicable law
          </li>
        </ul>
        <p className="mt-4">
          If we transfer personal data outside India, we will do so only as permitted under the
          DPDP Act and applicable government notifications.
        </p>
      </section>

      <section>
        <h2>5. Retention</h2>
        <ul>
          <li>
            <strong>Contact / demo / support:</strong> retained while your enquiry is active and
            for a reasonable period afterward (typically up to 24 months), unless a longer period
            is needed for a continuing relationship or legal obligation.
          </li>
          <li>
            <strong>Careers:</strong> retained for the recruitment cycle and, if unsuccessful,
            usually up to 12 months unless you ask us to erase sooner or agree to a talent pool.
          </li>
          <li>
            <strong>Security logs:</strong> retained for a limited period needed for security and
            abuse prevention.
          </li>
        </ul>
        <p className="mt-4">
          When the purpose is no longer served and retention is not required by law, we erase
          or anonymise the personal data.
        </p>
      </section>

      <section>
        <h2>6. Security safeguards</h2>
        <p>
          We implement reasonable security safeguards appropriate to the nature of the data and
          our processing — including access controls, encrypted transport (HTTPS), monitoring
          for unauthorised access, and contractual safeguards with processors — to protect
          confidentiality, integrity, and availability of personal data.
        </p>
        <p className="mt-4">
          In the event of a personal data breach, we will notify affected individuals and the
          Data Protection Board of India as required under the DPDP Act and Rules.
        </p>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>
          Our website and marketing services are directed at businesses and adults. We do not
          knowingly process personal data of children (under 18) for marketing. If you believe
          a child has provided personal data to us, contact{' '}
          <a href="mailto:hello@zyrops.com?subject=Child%20data%20request">hello@zyrops.com</a>{' '}
          and we will take appropriate steps, including erasure where required.
        </p>
      </section>

      <section>
        <h2>8. Your rights as a Data Principal</h2>
        <p>Under the DPDP Act, you may:</p>
        <ul>
          <li>
            <strong>Access</strong> information about your personal data and its processing
          </li>
          <li>
            <strong>Correct</strong> inaccurate or incomplete personal data
          </li>
          <li>
            <strong>Erase</strong> personal data when it is no longer necessary for the stated
            purpose (subject to legal retention)
          </li>
          <li>
            <strong>Withdraw consent</strong> as easily as it was given, for processing based on
            consent
          </li>
          <li>
            <strong>Nominate</strong> another individual to exercise rights in the event of death
            or incapacity, as provided under the Act
          </li>
          <li>
            <strong>Seek grievance redressal</strong> and, if unresolved, complain to the Data
            Protection Board of India
          </li>
        </ul>
        <p className="mt-4">
          Detailed steps, identifiers we need, and timelines are published on our{' '}
          <Link to="/data-rights">Data Rights &amp; Grievance</Link> page.
        </p>
      </section>

      <section>
        <h2>9. How to withdraw consent</h2>
        <p>
          To withdraw consent for marketing or contact-form processing, email{' '}
          <a href="mailto:hello@zyrops.com?subject=Withdraw%20consent">hello@zyrops.com</a>{' '}
          with the subject “Withdraw consent” and the email address you used. Withdrawal is as
          easy as giving consent (a short email or message via the contact form selecting a
          privacy-related query). Withdrawal does not affect processing already completed or
          processing required by law.
        </p>
      </section>

      <section>
        <h2>10. Contact for data-processing questions</h2>
        <p>
          As required under the DPDP Rules, we publish the contact details of a person who can
          answer questions about processing of personal data:
        </p>
        <ul>
          <li>
            <strong>Role:</strong> Privacy Contact / Grievance Officer (ZyrOps Technologies LLP)
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@zyrops.com?subject=Privacy%20%2F%20DPDP%20query">
              hello@zyrops.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +91 94887 66222
          </li>
          <li>
            <strong>Postal:</strong> Uthradam Building, Kuttikattoor, Calicut, Kerala, India
          </li>
        </ul>
        <p className="mt-4">
          The same contact details will be included in our responses to rights requests.
        </p>
      </section>

      <section>
        <h2>11. Complaints to the Data Protection Board</h2>
        <p>
          If you are not satisfied with our response to a grievance, you may complain to the{' '}
          <strong>Data Protection Board of India</strong> under the DPDP Act. We will publish
          or update Board filing links on this site when official channels are notified by the
          Central Government. Until then, escalate via{' '}
          <Link to="/data-rights">Data Rights &amp; Grievance</Link> and we will guide you to
          the available official process.
        </p>
      </section>

      <section>
        <h2>12. Changes to this notice</h2>
        <p>
          We may update this Privacy Notice to reflect changes in law or our practices. The
          “Last updated” date at the top will change when we do. Material changes affecting
          consent-based processing will be brought to your attention before or when we next
          request consent.
        </p>
      </section>
    </LegalLayout>
  )
}
