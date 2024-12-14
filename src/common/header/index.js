"use client"
import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar';

export default function Header() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className={styles.header} data-aos="fade-down">
        <div className={styles.container}>
          <div className={styles.headerDiv}>
            <Link href="/">
              <div className={styles.logo}>
                <span>Tripo Games</span>
              </div>
            </Link>
            <nav>
              <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>
                <span>Home</span>
              </Link>
              <div className={`${styles.link} ${styles.linkDiv}`}>
                <span>Games</span>
                <div className={styles.dropdown}>
                  <div className={styles.dropdownBox}>
                    <Link href="/kipon" className={`${styles.droplink} ${pathname === '/kipon' ? styles.active : ''}`}>
                      Kipon
                    </Link>
                    <Link href="/robotrix" className={`${styles.droplink} ${pathname === '/robotrix' ? styles.active : ''}`}>
                      Robotrix
                    </Link>
                    <Link href="/treasure" className={`${styles.droplink} ${pathname === '/treasure-box' ? styles.active : ''}`}>
                      Treasure Box
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/careers" className={`${styles.link} ${pathname === '/careers' ? styles.active : ''}`}>
                <span>Careers</span>
              </Link>
              <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>
                <span>About</span>
              </Link>
              <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>
                <span>Contact</span>
              </Link>
            </nav>
            <div className={styles.hamburgerMenu}>
              <div
                className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
                onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} toggleMenu={toggleMenu} />
    </>
  );
}
