"use client";
import Work from "../landing-page/worktogather/Work";
import styles from "./page.module.css";

export default function RefundPolicyPage() {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>POLICIES</h2>
          <nav className={styles.sidebarNav}>
            <a href="/tandc" className={styles.sidebarLink}>Terms & Conditions</a>
            <a href="/privacy-policy" className={styles.sidebarLink}>Privacy Policy</a>
            <a href="/cookie-policy" className={styles.sidebarLink}>Cookie Policy</a>
            <a href="/refund-policy" className={styles.sidebarLinkActive}>Refund Policy</a>
          </nav>
        </aside>

        <main className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.mainTitle}>Refund Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: September 11, 2025</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. INTRODUCTION</h2>
            <p className={styles.sectionText}>
              This Refund Policy outlines the terms and conditions under which <strong>Polar Trading Services LTD</strong> ("we," "our," "us") handles refund requests for products and services purchased through our website www.polartradingservices.com.
              By making a purchase, you agree to this Refund Policy, which forms part of our Terms & Conditions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. COMPANY INFORMATION</h2>
            <p className={styles.sectionText}>
              <strong>Legal Name:</strong> Polar Trading Services LTD <strong>Business Type: </strong>Private Limited Company <strong>Website: </strong>polartradingservices.com <strong>Email: </strong>info@polartradingservices.com <strong>Registered Office: </strong>9856 North Street, North West London, NW12 5IA
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. DIGITAL PRODUCTS</h2>
            <p className={styles.sectionText}>
              Our products include digital items such as eBooks, video courses, indicators, bots, and software. Due to the instant access and intangible nature of these items, all digital product sales are final and non-refundable once the item has been downloaded, accessed, or delivered.
              This policy is consistent with UK consumer law, which exempts digital goods from refunds once delivery has begun with customer consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. ONLINE COURSES & MEMBERSHIPS</h2>
            <p className={styles.sectionText}>
              <strong>Access to our online courses and educational memberships begins immediately after purchase. Refunds are not available once access has been granted, except in the following exceptional cases:
              Duplicate payment was made for the same course or product.
              A technical error on our system prevented access to the purchased content and we cannot resolve the issue within a reasonable timeframe.
              Refund requests for these situations must be submitted within 7 days of purchase.</strong>
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. SOFTWARE & BOTS</h2>
            <p className={styles.sectionText}>
              Our software tools, trading bots, and indicators are licensed for personal use only and are delivered digitally. All sales of software products are final once download or activation occurs. We do not guarantee profitability, specific performance outcomes, or compatibility with every broker or platform.
              If a technical issue prevents activation or function, our support team will work to resolve it promptly. A refund may be issued only if the issue cannot be fixed after troubleshooting.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. PROFESSIONAL SERVICES & CONSULTATIONS</h2>
            <p className={styles.sectionText}>
              For consultations, mentorship sessions, or professional services provided by our partnered professors and experts:
              Cancellations made at least 24 hours before the scheduled session may be eligible for rescheduling or a partial refund.
              No refunds will be issued for missed or partially completed sessions.
              Each professional service is tailored and scheduled in advance, making refunds impractical once the service is delivered or commenced.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. HOW TO REQUEST A REFUND</h2>
            <p className={styles.sectionText}>
              To request a refund under the circumstances outlined above, please contact our support team at info@polartradingservices.com with the following details:
              Full name
              Order number or receipt ID
              Product or service name
              Reason for the refund request
              We will respond within<strong> 5–7 business days </strong>and inform you whether your request qualifies under this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. REFUND METHOD</h2>
            <p className={styles.sectionText}>
              Approved refunds will be processed using the original payment method used for the purchase. Processing times may vary depending on your payment provider but typically take 5–10 business days after approval.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. CHANGES TO THIS POLICY</h2>
            <p className={styles.sectionText}>
              We reserve the right to update or modify this Refund Policy at any time. Any changes will be posted on this page with a revised "Last Updated" date. Continued use of our website and services after such updates constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. CONTACT INFORMATION</h2>
            <p className={styles.sectionText}>
              For any questions about this Cookie Policy or our data practices, please contact us:
              <strong>Polar Trading Services LTD</strong> <strong>Email: </strong>info@polartradingservices.com <strong>Website: </strong>www.polartradingservices.com <strong>Registered Office: </strong>9856 North Street, North West London, NW12 5IA
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
