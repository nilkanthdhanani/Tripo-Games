import Link from 'next/link';
import styles from './gameBanner.module.scss';
import Image from 'next/image';
import { apple, google } from '@/assets/images/image';

export default function GameBanner({ icon, name, category, description, heading, gameBgClass }) {
  return (
    <section className={styles.gameBanner}>
      <div className={`${styles[gameBgClass]}`}></div>
      <div className={styles.container}>
        <div className={styles.gameBox}>
          <div className={styles.gameProfile}>
            <Image src={icon} alt={`${name} Icon`} />
            <div className={styles.gameName}>
              <h2>{name}</h2>
              <span>{category}</span>
            </div>
          </div>
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className={styles.gameLink}>
            <Link href="https://play.google.com/store/games?hl=en&gl=US" target="_blank">
              <Image src={google} alt="google" />
            </Link>
            <Link href="https://www.apple.com/app-store/" target="_blank">
              <Image src={apple} alt="apple" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
