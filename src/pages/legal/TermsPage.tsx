import { Link } from 'react-router-dom'
import { LegalLayout } from '../../components/LegalLayout'

const UPDATED = '2 October 2026'

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use — ZyrOps Website | ZyrOps Technologies LLP"
      description="Terms governing use of zyrops.com, including acceptable use, intellectual property, disclaimers, and how personal data is handled under India’s DPDP Act."
      path="/terms"
      heading="Terms of Use"
      updated={UPDATED}
    >
      <section>
        <p>
          These Terms of Use (“Terms”) govern access to and use of the website{' '}
          <strong>zyrops.com</strong> operated by <strong>ZyrOps Technologies LLP</strong>{' '}
          (“ZyrOps”, “we”, “us”). By using this website, you agree to these Terms. If you do not
          agree, please do not use the site.
        </p>
        <p className="mt-4">
          Processing of personal data is described in our standalone{' '}
          <Link to="/privacy">Privacy Notice</Link> under the Digital Personal Data Protection
          Act, 2023. That notice is not part of these Terms and can be read independently.
        </p>
      </section>

      <section>
        <h2>1. About the website</h2>
        <p>
          This website provides information about ZyrOps products and services, careers, and
          ways to contact us. Product features, availability, and pricing may change. Nothing on
          this site is a binding offer unless we confirm it in a signed agreement or order form.
        </p>
      </section>

      <section>
        <h2>2. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Misuse the site, attempt unauthorised access, or disrupt its operation</li>
          <li>Submit unlawful, misleading, or harmful content through forms or chat</li>
          <li>Scrape or harvest data except as allowed by applicable law and robots rules</li>
          <li>Impersonate another person or misrepresent your affiliation</li>
        </ul>
      </section>

      <section>
        <h2>3. Intellectual property</h2>
        <p>
          Content on this website — including text, branding, logos, illustrations, and product
          names — is owned by ZyrOps or its licensors. You may view and share pages for
          personal or internal business evaluation. You may not copy, modify, or commercially
          exploit site content without prior written permission, except for fair dealing under
          Indian law.
        </p>
      </section>

      <section>
        <h2>4. Third-party links and product environments</h2>
        <p>
          Links to third-party sites or separate product login environments are provided for
          convenience. Those services may have their own terms and privacy notices. ZyrOps is
          not responsible for third-party content or practices outside our control.
        </p>
      </section>

      <section>
        <h2>5. Disclaimers</h2>
        <p>
          The website is provided on an “as available” basis. We aim for accuracy but do not
          warrant that all information is complete or error-free. To the fullest extent permitted
          by law, ZyrOps disclaims liability for indirect or consequential loss arising from use
          of this website.
        </p>
      </section>

      <section>
        <h2>6. Personal data</h2>
        <p>
          When you submit personal data (for example via the contact form), you acknowledge our{' '}
          <Link to="/privacy">Privacy Notice</Link> and may exercise rights described on{' '}
          <Link to="/data-rights">Data Rights &amp; Grievance</Link>. Cookie and storage use is
          explained in our <Link to="/cookies">Cookie Policy</Link>.
        </p>
      </section>

      <section>
        <h2>7. Governing law</h2>
        <p>
          These Terms are governed by the laws of India. Courts at Calicut (Kozhikode), Kerala,
          shall have exclusive jurisdiction, subject to mandatory consumer or other protections
          that cannot be waived.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          Questions about these Terms:{' '}
          <a href="mailto:hello@zyrops.com">hello@zyrops.com</a> ·{' '}
          <a href="tel:+919488766222">+91 94887 66222</a> · Uthradam Building, Kuttikattoor,
          Calicut, Kerala, India.
        </p>
      </section>
    </LegalLayout>
  )
}
