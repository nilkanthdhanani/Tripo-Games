import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './heroBanner.module.scss';
import { apple, google, homeBg } from '@/assets/images/image';
import Link from 'next/link';

export default function HeroBanner() {
  const [transformX, setTransformX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`.${styles.heroBanner}`);
      if (section) {
        const { top, height } = section.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max(-top / height, 0), 1);
        setTransformX(scrollProgress * -10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroBannerImg}>
        <div
          className={styles.heroBannerImgDiv}
          style={{ transform: `translateX(${transformX}%)` }}>
          <Image src={homeBg} alt="homeBg" />
        </div>
      </div>
      <div className={styles.heroBannerDiv}>
        <div className={styles.container}>
          <div className={styles.heroBannerContent}>
            <h1>Made to Be Played</h1>
            <p>The Very Best in Mobile Gaming</p>
            <div className={styles.storeLink}>
              <Link href="https://www.google.com" target='_blank'>
                <Image src={google} alt="google" />
              </Link>
              <Link href="https://www.apple.com" target='_blank'>
                <Image src={apple} alt="apple" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
