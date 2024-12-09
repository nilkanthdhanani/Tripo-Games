import { useState } from 'react';
import styles from './sidebar.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar({ isActive, toggleMenu }) {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLinkClick = () => {
        toggleMenu();
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <aside className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
            <div className={styles.navigation}>
                <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={handleLinkClick}>
                    <span>Home</span>
                </Link>
                <div
                    className={`${styles.link} ${styles.linkDiv}`}
                    onClick={handleDropdownToggle}
                >
                    <span>Games</span>
                </div>
                <div className={`${styles.dropdownBox} ${isDropdownOpen ? styles.open : ''}`}>
                    <Link href="/kipon" className={`${styles.droplink} ${pathname === '/kipon' ? styles.active : ''}`} onClick={handleLinkClick}>
                        Kipon
                    </Link>
                    <Link href="/robotrix" className={`${styles.droplink} ${pathname === '/robotrix' ? styles.active : ''}`} onClick={handleLinkClick}>
                        Robotrix
                    </Link>
                    <Link href="/treasure-box" className={`${styles.droplink} ${pathname === '/treasure-box' ? styles.active : ''}`} onClick={handleLinkClick}>
                        Treasure Box
                    </Link>
                </div>
                <Link href="/careers" className={`${styles.link} ${pathname === '/careers' ? styles.active : ''}`} onClick={handleLinkClick}>
                    <span>Careers</span>
                </Link>
                <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={handleLinkClick}>
                    <span>About</span>
                </Link>
                <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} onClick={handleLinkClick}>
                    <span>Contact</span>
                </Link>
            </div>
        </aside>
    );
}
