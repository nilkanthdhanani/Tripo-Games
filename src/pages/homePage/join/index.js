import Image from 'next/image';
import styles from './join.module.scss';
import { joinDoll } from '@/assets/images/image';
import Link from 'next/link';

export default function Join() {
    return (
        <section className={styles.join}>
            <div className={styles.joinDivDoll}>
                <div className={styles.container}>
                    <div className={styles.dollImage}>
                        <Image src={joinDoll} alt="joinDoll" />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.joinDiv}>
                    <span>Join Our Team</span>
                    <h2>It takes the world's best talent to change the game.</h2>
                    <Link href="/careers">
                        <button>Explore Careers</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
