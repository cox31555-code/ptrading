"use client";
import Work from "../landing-page/worktogather/Work";
import styles from "./page.module.css";

export default function TandCPage() {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>POLICIES</h2>
          <nav className={styles.sidebarNav}>
            <a href="/tandc" className={styles.sidebarLinkActive}>Terms & Conditions</a>
            <a href="/privacy-policy" className={styles.sidebarLink}>Privacy Policy</a>
            <a href="/cookie-policy" className={styles.sidebarLink}>Cookie Policy</a>
            <a href="/refund-policy" className={styles.sidebarLink}>Refund Policy</a>
          </nav>
        </aside>

        <main className={styles.content}>
          <header className={styles.header}>
            <h1 className={styles.mainTitle}>Terms & Conditions</h1>
            <p className={styles.lastUpdated}>Last Updated: September 11, 2025</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. INTRODUCTION</h2>
            <p className={styles.sectionText}>
              Welcome to <strong>Polar Trading Services LTD</strong> ("we," "our," "us"). These Terms & Conditions ("Terms") govern your access to and use of our website, products, software, bots, courses, eBooks, and related services (collectively, the "Services"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. COMPANY INFORMATION</h2>
            <p className={styles.sectionText}>
              <strong>Legal Name:</strong> Polar Trading Services LTD <strong>Business Type: </strong>Private Limited Company <strong>Website: </strong>polartradingservices.com <strong>Email: </strong>info@polartradingservices.com <strong>Registered Office: </strong>9856 North Street, North West London, NW12 5IA
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. ELIGIBILITY</h2>
            <p className={styles.sectionText}>
              You must be at least 18 years of age to use our Services. By using the website, you represent that you meet this requirement and have the legal authority to enter into this agreement.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. SERVICES PROVIDED</h2>
            <p className={styles.sectionText}>
              Polar Trading Services LTD provides educational content, including:
              eBooks, video courses, and tutorials in FOREX, CRYPTO, and INDICES/FUTURES trading.
              Proprietary trading bots, indicators, and software tools.
              Access to professional consulting and mentorship from qualified experts.
              All content, software, and tools are produced and owned by Polar Trading Services LTD unless otherwise stated.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. ACCOUNT REGISTRATION</h2>
            <p className={styles.sectionText}>
              Certain Services may require you to create an account. You agree to:
              Provide accurate, current, and complete information during registration.
              Keep your account credentials secure and confidential.
              Accept full responsibility for all activities that occur under your account.
              We reserve the right to suspend or terminate any account that violates these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. INTELLECTUAL PROPERTY</h2>
            <p className={styles.sectionText}>
              All materials available on this website, including but not limited to text, graphics, logos, videos, courses, eBooks, bots, indicators, and software, are the intellectual property of Polar Trading Services LTD or its licensors.
              You may not copy, distribute, modify, sell, or use any of our intellectual property for commercial purposes without prior written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. PURCHASES & PAYMENTS</h2>
            <p className={styles.sectionText}>
              All prices are listed in the currency shown on the website. Payments must be made in full at the time of purchase. We accept various payment methods as displayed at checkout.
              Once payment is confirmed, digital products such as courses, eBooks, and bots are considered delivered and non-refundable, except where required by law or under our Refund Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. REFUND POLICY</h2>
            <p className={styles.sectionText}>
              Due to the digital nature of our Services, all sales are generally final and non-refundable. Refunds may be issued only in exceptional cases, such as duplicate payments or technical errors. Requests must be submitted via our official contact channels within 7 days of purchase.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. RISK DISCLAIMER</h2>
            <p className={styles.sectionText}>
              Trading in FOREX, CRYPTOCURRENCIES, and INDICES/FUTURES involves a high level of risk and may not be suitable for all investors. All educational materials, bots, and software provided by Polar Trading Services LTD are for educational purposes only and should not be interpreted as financial or investment advice.
              You acknowledge that you use our Services at your own risk, and we are not liable for any financial losses incurred.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. SOFTWARE & BOT USAGE</h2>
            <p className={styles.sectionText}>
              All software, trading bots, or scripts provided by Polar Trading Services LTD are licensed for personal use only. You may not resell, share, decompile, or modify any code. We do not guarantee profits, uptime, or compatibility with all platforms or brokers.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. PROFESSIONAL SERVICES</h2>
            <p className={styles.sectionText}>
              When you engage with any professors, mentors, or professionals through our platform, you acknowledge that such services are provided under Polar Trading Services LTD's supervision. However, results may vary based on user effort, market conditions, and other external factors beyond our control.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. LIMITATION OF LIABILITY</h2>
            <p className={styles.sectionText}>
              Polar Trading Services LTD, its employees, partners, and affiliates shall not be liable for:
              Any direct or indirect financial losses.
              Loss of data, profits, or business opportunities.
              Technical issues, service interruptions, or unauthorized access.
              Our total liability under any claim shall not exceed the amount paid for the specific Service in question.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. THIRD-PARTY LINKS</h2>
            <p className={styles.sectionText}>
              Our website may include links to third-party websites or services. We are not responsible for the content, security, or practices of such third parties. Accessing them is at your own risk.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. PRIVACY POLICY</h2>
            <p className={styles.sectionText}>
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>15. TERMINATION</h2>
            <p className={styles.sectionText}>
              We may suspend or terminate your access to our Services at any time, without notice, if we believe you have violated these Terms. Upon termination, all licenses and rights granted to you will immediately cease.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>16. MODIFICATIONS TO TERMS</h2>
            <p className={styles.sectionText}>
              We reserve the right to update or modify these Terms at any time. The most recent version will always be posted on this page with the updated "Last Updated" date. Continued use of our Services constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>17. GOVERNING LAW</h2>
            <p className={styles.sectionText}>
              These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
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
