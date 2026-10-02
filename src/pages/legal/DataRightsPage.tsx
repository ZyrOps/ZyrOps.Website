import { Link } from 'react-router-dom'
import { LegalLayout } from '../../components/LegalLayout'

const UPDATED = '2 October 2026'

export function DataRightsPage() {
  return (
    <LegalLayout
      title="Data Principal Rights & Grievance Redressal | ZyrOps"
      description="How to exercise your rights under India’s DPDP Act with ZyrOps — access, correction, erasure, consent withdrawal, nomination — and how to raise a privacy grievance (response within 90 days)."
      path="/data-rights"
      heading="Data Rights & Grievance Redressal"
      updated={UPDATED}
    >
      <section>
        <p>
          This page is published so that <strong>Data Principals</strong> can exercise rights
          under the <strong>Digital Personal Data Protection Act, 2023</strong> and DPDP Rules,
          2025. It explains <strong>how to make a request</strong>, which{' '}
          <strong>identifiers</strong> we need, and our <strong>grievance timelines</strong>.
        </p>
        <p className="mt-4">
          Full processing details are in our <Link to="/privacy">Privacy Notice</Link>.
        </p>
      </section>

      <section>
        <h2>1. Your rights</h2>
        <ul>
          <li>
            <strong>Right to access information</strong> about your personal data and its
            processing
          </li>
          <li>
            <strong>Right to correction and erasure</strong> of personal data
          </li>
          <li>
            <strong>Right to withdraw consent</strong> for consent-based processing
          </li>
          <li>
            <strong>Right of grievance redressal</strong>
          </li>
          <li>
            <strong>Right to nominate</strong> another individual to exercise rights in case of
            death or incapacity, as provided under the Act
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How to make a request</h2>
        <p>Use any of these means:</p>
        <ol>
          <li>
            Email{' '}
            <a href="mailto:hello@zyrops.com?subject=DPDP%20rights%20request">
              hello@zyrops.com
            </a>{' '}
            with subject <strong>“DPDP rights request”</strong>
          </li>
          <li>
            Use the <Link to="/#contact">contact form</Link> and clearly state that your message
            is a privacy / data-rights request
          </li>
          <li>
            Write to: Privacy / Grievance Officer, ZyrOps Technologies LLP, Uthradam Building,
            Kuttikattoor, Calicut, Kerala, India
          </li>
        </ol>

        <h3>What to include</h3>
        <ul>
          <li>Your full name</li>
          <li>
            The <strong>email address</strong> (or other identifier) you used with us
          </li>
          <li>Which right you wish to exercise</li>
          <li>Enough detail for us to locate your data (e.g. form submitted date, job applied)</li>
          <li>
            For nomination: nominee name, contact details, and relationship, as applicable
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Identifiers we may need</h2>
        <p>
          Under the DPDP Rules, we may require particulars that identify you under our terms of
          service. For zyrops.com, typical identifiers include:
        </p>
        <ul>
          <li>Email address used in a contact, demo, or careers submission</li>
          <li>Mobile number, if you provided one</li>
          <li>Application or enquiry reference, if we issued one</li>
          <li>For product tenants: customer / organisation ID and your user account email</li>
        </ul>
        <p className="mt-4">
          We may ask for reasonable verification before disclosing or changing personal data, to
          protect you against unauthorised requests.
        </p>
      </section>

      <section>
        <h2>4. Consent withdrawal</h2>
        <p>
          Email{' '}
          <a href="mailto:hello@zyrops.com?subject=Withdraw%20consent">hello@zyrops.com</a> with
          subject <strong>“Withdraw consent”</strong>, or send a short message via the contact
          form. Withdrawal is comparable in ease to giving consent (one clear request). We will
          stop processing that relied on consent, except where another lawful ground or legal
          retention applies.
        </p>
      </section>

      <section>
        <h2>5. Grievance redressal system</h2>
        <ul>
          <li>
            <strong>Grievance Officer / Privacy Contact:</strong> ZyrOps Technologies LLP
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@zyrops.com?subject=Privacy%20grievance">hello@zyrops.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+919488766222">+91 94887 66222</a>
          </li>
          <li>
            <strong>Address:</strong> Uthradam Building, Kuttikattoor, Calicut, Kerala, India
          </li>
        </ul>
        <p className="mt-4">
          <strong>Response timeline:</strong> We aim to acknowledge grievances promptly and
          resolve them within a <strong>reasonable period not exceeding 90 days</strong> from
          receipt, as required under the DPDP Rules. Many requests are completed sooner
          (typically within 15–30 business days where the request is clear and verifiable).
        </p>
        <p className="mt-4">
          We maintain technical and organisational measures so that rights and grievance
          requests can be tracked and answered within this period.
        </p>
      </section>

      <section>
        <h2>6. Escalation to the Data Protection Board of India</h2>
        <p>
          If you are not satisfied after using our grievance process, you may complain to the{' '}
          <strong>Data Protection Board of India</strong> under the DPDP Act. Official filing
          channels will be linked here as notified by the Central Government / MeitY. You may
          also ask us at{' '}
          <a href="mailto:hello@zyrops.com?subject=Board%20complaint%20guidance">
            hello@zyrops.com
          </a>{' '}
          for guidance on the then-current Board process.
        </p>
      </section>

      <section>
        <h2>7. Product / tenant data</h2>
        <p>
          If your personal data is processed inside a ZyrOps product on behalf of your employer
          or another organisation (the Data Fiduciary for that deployment), please raise your
          request with that organisation first. We will support them as a Data Processor where
          our contract requires it.
        </p>
      </section>
    </LegalLayout>
  )
}
