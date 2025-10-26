"use client";
import Work from "../landing-page/worktogather/Work";
import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>POLICIES</h2>
          <nav className={styles.sidebarNav}>
            <a href="/tandc" className={styles.sidebarLink}>Terms & Conditions</a>
            <a href="/privacy-policy" className={styles.sidebarLinkActive}>Privacy Policy</a>
            <a href="/cookie-policy" className={styles.sidebarLink}>Cookie Policy</a>
            <a href="/refund-policy" className={styles.sidebarLink}>Refund Policy</a>
          </nav>
        </aside>

        <main className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.mainTitle}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: September 11, 2025</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. INTRODUCTION</h2>
            <p className={styles.sectionText}>
              This Privacy Policy explains how <strong>Polar Trading Services LTD</strong> ("we," "our," "us") collects, uses, discloses, and protects your personal information when you visit our website or use our products and services, including courses, eBooks, bots, software, and mentorship offerings (collectively, the "Services").
              By using our website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. COMPANY INFORMATION</h2>
            <p className={styles.sectionText}>
              <strong>Legal Name:</strong> Polar Trading Services LTD <strong>Business Type: </strong>Private Limited Company <strong>Website: </strong>polartradingservices.com <strong>Email: </strong>info@polartradingservices.com <strong>Registered Office: </strong>9856 North Street, North West London, NW12 5IA
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. INFORMATION WE COLLECT</h2>
            <p className={styles.sectionText}>
              We may collect and process the following types of information:
              <strong>a. Personal Information</strong>  Name, email address, phone number, billing address, and payment details provided during account creation or checkout.
              <strong>b. Account & Usage Data</strong>  Login credentials, purchase history, and preferences related to our educational content and software.
              <strong>c. Technical Information</strong>  IP address, browser type, operating system, device information, and activity logs collected automatically for analytics and security.
              <strong>d. Communication Data</strong>  Messages, inquiries, or support requests submitted through our website or communication channels.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. HOW WE USE YOUR INFORMATION</h2>
            <p className={styles.sectionText}>
              We use your data for the following purposes:
              To provide and deliver our Services.
              To process transactions and manage accounts.
              To improve website functionality and user experience.
              To send important updates, service notifications, or promotional offers (if you have opted in).
              To comply with legal obligations and prevent fraudulent activities.
              We process your data lawfully under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. LEGAL BASIS FOR PROCESSING</h2>
            <p className={styles.sectionText}>
              We process personal data on the following legal bases:
              <strong>Contractual necessity: </strong>to provide the Services you purchase or request.
              <strong>Legitimate interests:</strong> to enhance security, performance, and user experience.
              <strong>Consent:</strong> for marketing communications and optional data collection.
              <strong>Legal obligation: </strong>where required by law or regulatory authorities.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. DATA RETENTION</h2>
            <p className={styles.sectionText}>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Once your data is no longer needed, it is securely deleted or anonymised.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. DATA SHARING & DISCLOSURE</h2>
            <p className={styles.sectionText}>
              We do not sell your data. We may share information with:
              <strong>Trusted service providers </strong>who assist in payment processing, hosting, analytics, or communication.
              <strong>Legal authorities </strong>if required by law or to protect our rights and property.
              All third parties are bound by confidentiality and data protection agreements consistent with UK GDPR standards.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. INTERNATIONAL DATA TRANSFERS</h2>
            <p className={styles.sectionText}>
              Your data may be transferred outside the United Kingdom to service providers operating in other jurisdictions. When this occurs, we ensure adequate safeguards are in place, such as UK-approved Standard Contractual Clauses or equivalent protection measures.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. DATA SECURITY</h2>
            <p className={styles.sectionText}>
              We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, alteration, loss, or misuse. While we strive to ensure data security, no system is entirely foolproof, and you acknowledge this inherent risk when using our Services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. YOUR DATA RIGHTS (UK GDPR)</h2>
            <p className={styles.sectionText}>
              Under UK GDPR, you have the following rights:
              Right to access your personal data.
              Right to rectify inaccuracies.
              Right to request erasure ("right to be forgotten").
              Right to restrict or object to processing.
              Right to data portability.
              Right to withdraw consent at any time (where processing is based on consent).
              To exercise these rights, please contact us via the email provided below. We may require verification of your identity before processing your request.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. MARKETING COMMUNICATIONS</h2>
            <p className={styles.sectionText}>
              If you opt in to receive marketing updates, we may send you newsletters or promotional materials about our latest courses, eBooks, or software. You can unsubscribe at any time by clicking "unsubscribe" in our emails or contacting us directly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. COOKIES & TRACKING</h2>
            <p className={styles.sectionText}>
              Our website uses cookies and similar technologies to improve functionality and analyse traffic. You can manage cookie preferences through your browser settings. For more details, please review our Cookie Policy (if applicable).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. THIRD-PARTY LINKS</h2>
            <p className={styles.sectionText}>
              Our website may contain links to external websites not operated by us. We are not responsible for their content or privacy practices. We encourage you to review their Privacy Policies before providing any personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. CHILDREN'S PRIVACY</h2>
            <p className={styles.sectionText}>
              Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us data, please contact us immediately for removal.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>15. CHANGES TO THIS POLICY</h2>
            <p className={styles.sectionText}>
              We may update this Privacy Policy from time to time to reflect legal, technical, or business developments. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this Policy periodically.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>16. CONTACT INFORMATION</h2>
            <p className={styles.sectionText}>
              If you have any questions or wish to exercise your privacy rights, please contact us at: <strong>Email: </strong> info@polartradingservices.com <strong>Address:</strong> 9856 North Street, North West London, NW12 5IA <strong>Phone: </strong>07874 283920
            </p>
            <p className={styles.copyright}>
              <strong>© 2025 Polar Trading Services LTD. All rights reserved.</strong>
            </p>
          </section>
        </main>
      </div>
      
      <Work className="forexWorkWrapper" />
    </>
  );
}
