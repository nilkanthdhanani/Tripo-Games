import Link from 'next/link'
import styles from './terms.module.scss'

export default function TermsPage() {
  return (
    <main>
      <div className={styles.termsHead}>
        <div className={styles.container}>
          <div className={styles.termsHeadData}>
            <h1>Terms and Conditions</h1>
            <p>Welcome to Tripo Games! These Terms and Conditions govern your use of our website, games, and related services. By accessing or using our platform, you agree to comply with these Terms.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.termsContent}>
          <h2>Acceptance of Terms</h2>
          <p>By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please refrain from using our services.</p>
          <h2>Use of Our Services</h2>
          <ul>
            <li>You must be at least 13 years old to use our services.</li>
            <li>If you are under 18, you confirm that you have received parental or guardian consent to use our services.</li>
            <li>You agree not to misuse or disrupt our services, including attempting to hack, cheat, or exploit our games or website.</li>
          </ul>
          <h2>Accounts</h2>
          <ul>
            <li>To access certain features, you may need to create an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account details and password.</li>
            <li>Notify us immediately if you suspect unauthorized access to your account.</li>
          </ul>
          <h2>User Conduct</h2>
          <p>While using our platform, you agree to:</p>
          <ul>
            <li>Avoid uploading or sharing content that is offensive, abusive, discriminatory, or illegal.</li>
            <li>Respect other users and avoid harassment or bullying.</li>
            <li>Avoid any actions that harm the integrity of our services or disrupt other users' experiences.</li>
          </ul>
          <h2>Intellectual Property</h2>
          <p>All content on our platform, including games, logos, artwork, and text, is the intellectual property of Tripo Games. You may not copy, distribute, or modify our content without prior written consent.</p>
          <h2>In-App Purchases</h2>
          <ul>
            <li>Certain features or content in our games may require in-app purchases.</li>
            <li>All purchases are final and non-refundable unless stated otherwise.</li>
            <li>Ensure you have permission for purchases made through your account.</li>
          </ul>
          <h2>Termination</h2>
          <p>We reserve the right to suspend or terminate your account if you violate these Terms. Unauthorized activities, including hacking or cheating, will result in immediate action.</p>
          <h2>Disclaimer of Warranties</h2>
          <p>Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free services.</p>
          <h2>Limitation of Liability</h2>
          <p>Tripo Games will not be held liable for any damages or losses resulting from your use of our services, including data loss or unauthorized access.</p>
          <h2>Updates to Terms</h2>
          <p>We may update these Terms from time to time. Any changes will be posted on this page, and your continued use of our services implies acceptance of the updated Terms.</p>
          <h2>Governing Law</h2>
          <p>These Terms are governed by and construed under the laws of San Francisco, CA.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, feel free to contact us at:
            <span>Email: <Link href={"info@mysite.com"}>info@mysite.com</Link></span>
            <span>Phone: 123-456-7890</span>
          </p>
        </div>
      </div>
    </main>
  )
}
