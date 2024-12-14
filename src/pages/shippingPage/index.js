import Link from 'next/link'
import styles from './shipping.module.scss'

export default function ShippingPage() {
  return (
    <main>
      <div className={styles.shippingHead}>
        <div className={styles.container}>
          <div className={styles.shippingHeadData}>
            <h1>Shipping Policy</h1>
            <p>At Tripo Games, we strive to ensure that your gaming merchandise and products reach you efficiently. This Shipping Policy explains our procedures.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <div className={styles.shippingContent}>
          <h2>Shipping Coverage</h2>
          <ul>
            <li>We currently ship to all U.S. states or globally</li>
            <li>Delivery to remote areas may require additional time.</li>
          </ul>
          <h2>Processing Time</h2>
          <ul>
            <li>Orders are processed within [1-3 business days] after payment confirmation.</li>
            <li>Orders placed on weekends or holidays will be processed on the next business day.</li>
          </ul>
          <h2>Delivery Time</h2>
          <ul>
            <li><span>Standard shipping:</span> [5-7 business days].</li>
            <li><span>Expedited shipping:</span> [2-3 business days]. <br />
              Delivery timelines may vary based on location or unforeseen delays.
            </li>
          </ul>
          <h2>Shipping Costs</h2>
          <ul>
            <li>Shipping charges are calculated at checkout based on the delivery address and selected shipping method.</li>
            <li>Free shipping is available for orders above $50.</li>
          </ul>
          <h2>Order Tracking</h2>
          <ul>
            <li>Once your order ships, you will receive an email with a tracking number to monitor the delivery status.</li>
          </ul>
          <h2>Lost or Damaged Shipments</h2>
          <ul>
            <li>If your shipment is lost or arrives damaged, please contact us within [7 days] of delivery at <Link href={"info@mysite.com"}>info@mysite.com</Link>. </li>
          </ul>
          <h2>Changes to Shipping Policy</h2>
          <ul>
            <li>We reserve the right to update our shipping policy at any time. Changes will be posted here.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
