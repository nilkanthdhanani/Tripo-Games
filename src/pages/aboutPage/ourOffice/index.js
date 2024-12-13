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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum fuga commodi ex eligendi inventore, modi repellendus rerum. Deserunt nisi natus aliquam at illo asperiores quidem soluta ducimus ipsam quia!</p>
                    </div>
                    <div className={styles.officeDivExplore}>
                        <div className={styles.officeImage}>
                            <Image src={studioIcon} alt="studioIcon" />
                        </div>
                        <h3>We'd Love to Work With You</h3>
                        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                        <Link href={"/careers"}>
                            <button>Explore Opportunities</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
