import Link from 'next/link'
import styles from './refund.module.scss'

export default function RefundPage() {
  return (
    <main>
      <div className={styles.refundHead}>
        <div className={styles.container}>
          <div className={styles.refundHeadData}>
            <h1>Refund Policy</h1>
            <p>At Tripo Games, we are committed to your satisfaction. If you’re not completely happy with your purchase, please review our Refund Policy below.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.refundContent}>
          <h2>Eligibility for Refunds</h2>
          <ul>
            <li>Refunds are available for physical products returned within [15 days] of delivery in unused and original condition.</li>
            <li>For digital products, refunds will only be issued in cases of technical issues or accidental duplicate purchases.</li>
          </ul>
          <h2>How to Request a Refund</h2>
          <ul>
            <li>Email us at <Link href={"info@mysite.com"}>info@mysite.com</Link>. with your order details, reason for the refund, and any relevant photos (for damaged products).</li>
            <li>Our team will review your request and respond within [3-5 business days].</li>
          </ul>
          <h2>Refund Process</h2>
          <ul>
            <li>Once your return is received and inspected, we will notify you of the refund approval or rejection.</li>
            <li>Approved refunds will be processed within [5-7 business days] to your original payment method.</li>
          </ul>
          <h2>Non-Refundable Items</h2>
          <ul>
            <li>Sale or promotional items.</li>
            <li>Gift cards and downloadable content.</li>
          </ul>
          <h2>Shipping Costs for Returns</h2>
          <ul>
            <li>Customers are responsible for return shipping costs unless the item was defective or incorrect.</li>
          </ul>
          <h2>Changes to Refund Policy</h2>
          <p>We may update this policy at any time. Updated policies will be reflected on this page.</p>
        </div>
      </div>
    </main>
  )
}
