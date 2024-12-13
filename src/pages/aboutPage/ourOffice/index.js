import Link from 'next/link'
import styles from './ourOffice.module.scss'
import { studioIcon } from '@/assets/images/image'
import Image from 'next/image'

export default function OurOffice() {
    return (
        <section className={styles.ourOffice}>
            <div className={styles.container}>
                <div className={styles.ourOfficeDiv}>
                    <div className={styles.officeDivText}>
                        <span>Our Office</span>
                        <h2>Our Studio in San Francisco</h2>
                        <p>Our San Francisco studio is the heart of our creativity and innovation. Nestled in the vibrant tech hub, it fosters collaboration and inspiration, driving our mission to deliver cutting-edge mobile entertainment experiences to players worldwide.</p>
                    </div>
                    <div className={styles.officeDivExplore}>
                        <div className={styles.officeImage}>
                            <Image src={studioIcon} alt="studioIcon" />
                        </div>
                        <h3>We'd Love to Work With You</h3>
                        <p>We'd love to collaborate with passionate talent who share our vision for creating unforgettable gaming experiences and pushing boundaries.</p>
                        <Link href={"/careers"}>
                            <button>Explore Opportunities</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
