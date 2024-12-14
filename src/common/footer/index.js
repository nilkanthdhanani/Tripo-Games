
import Link from 'next/link';
import styles from './footer.module.scss';
import { apple, google } from '@/assets/images/image';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <div className={styles.logo}>
                <span>Tripo Games</span>
              </div>
            </Link>
            <p>An Immersive Gaming Experience</p>
          </div>
          <div className={styles.footerLine}></div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksDiv}>
              <h2>Contact</h2>
              <Link href="mailto:info@mysite.com">info@mysite.com</Link>
              <p>Tel: 123-456-7890</p>
              <p>500 Terry Francine St</p>
              <p>San Francisco, CA 94158</p>
            </div>
            <div className={styles.footerLinksDiv}>
              <h2>Navigatin</h2>
              <Link href="/#games">Games</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/shipping">Shipping Policy</Link>
              <Link href="/refund">Refund Policy</Link>
            </div>
            <div className={styles.footerLinksDiv}>
              <h2>Social</h2>
              <Link href="https://discord.com" target='_blank'>Discord</Link>
              <Link href="https://www.twitch.tv" target='_blank'>Twitch</Link>
              <Link href="https://www.facebook.com" target='_blank'>Facebook</Link>
              <Link href="https://www.youtube.com" target='_blank'>YouTube</Link>
              <Link href="https://www.twitter.com" target='_blank'>Twitter</Link>
              <Link href="https://www.linkedin.com" target='_blank'>LinkedIn</Link>
            </div>
            <div className={styles.footerLinksDiv}>
              <h2>Find Us On</h2>
              <Link href="https://play.google.com/store/games?hl=en&gl=US" target="_blank">
                <Image src={google} alt="google" />
              </Link>
              <Link href="https://www.apple.com/app-store/" target="_blank">
                <Image src={apple} alt="apple" />
              </Link>
            </div>
          </div>
          <div className={styles.footerLine}></div>
          <div className={styles.footerRight}>
            <p>© 2023 Tripo Games . All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
