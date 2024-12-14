import Link from 'next/link'
import styles from './privacy.module.scss'

export default function PrivacyPage() {
  return (
    <main>
      <div className={styles.privacyHead}>
        <div className={styles.container}>
          <div className={styles.privacyHeadData}>
            <h1>Privacy Policy</h1>
            <p>At Tripo Games, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, games, and services.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.privacyContent}>
          <h2>Information We Collect</h2>
          <ul>
            <li><span>Personal Information:</span> When you create an account or make a purchase, we may collect details such as your name, email address, billing information, and phone number.</li>
            <li><span>Usage Data:</span> We collect information about your interactions with our services, including IP address, browser type, and device information.</li>
            <li><span>Cookies:</span> Our website uses cookies to improve user experience. You can manage cookie preferences in your browser settings.</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our services and games.</li>
            <li>Process transactions and deliver purchased items.</li>
            <li>Communicate updates, promotions, or support-related messages.</li>
            <li>Prevent fraud, unauthorized access, and other security concerns.</li>
          </ul>
          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><span>Service Providers:</span> We may share your information with third-party service providers who assist us in operating our services, such as hosting, analytics, and customer support. These providers are contractually obligated to keep your information confidential and use it only for the purposes for which it was collected.</li>
            <li><span>Legal Compliance:</span> We may disclose your information to comply with legal obligations, protect our rights, or enforce our terms of service.</li>
            <li><span>Business Transfers:</span> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity or new owners.</li>
          </ul>
          <h2>Your Rights</h2>
          <ul>
            <li><span>Access, Update, or Delete:</span> You have the right to access, update, or delete your personal data by contacting us at <Link href={"info@mysite.com"}>info@mysite.com</Link>.</li>
            <li><span>Opt Out of Marketing Communications:</span> You can opt out of marketing communications at any time.</li>
          </ul>
          <h2>Security</h2>
          <p>We use industry-standard security measures to protect your information. However, no system is completely secure, and we encourage you to take steps to safeguard your account.</p>
          <h2>Updates to Privacy Policy</h2>
          <p>We may update this Privacy Policy occasionally. Any changes will be posted here, and your continued use of our services implies agreement with the updated policy.</p>
        </div>
      </div>
    </main>
  )
} 
