import { aboutBg, aboutDoll, kiponImg, robotrixImg, treasureImg } from '@/assets/images/image'
import styles from './about.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import DownArrow from '@/assets/images/svg/downArrow'

const aboutData = [
    {
        link: "/kipon",
        img: kiponImg,
        title: 'Kipon',
        description: 'Casual - Free',
    },
    {
        link: "/robotrix",
        img: robotrixImg,
        title: 'Robotrix',
        description: 'RPG - Free',
    },
    {
        link: "/treasure",
        img: treasureImg,
        title: 'Treasure Box',
        description: 'Adventure - Free',
    },
]

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.aboutGrid}>
                    {aboutData.map((data, index) => (
                        <div className={styles.aboutGridMain} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <Link href={data.link}>
                                <div className={styles.aboutGridBox}>
                                    <Image src={data.img} alt={data.title} />
                                    <div className={styles.aboutGridBoxText}>
                                        <div>
                                            <span>{data.title}</span>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className={styles.aboutGridMain} data-aos="fade-up" data-aos-delay={600}>
                        <Link href={"/#games"}>
                            <div className={styles.aboutGameBox}>
                                <div className={styles.aboutGameBoxBg}></div>
                                <div className={styles.aboutGameBoxText}>
                                    <span>Explore Our Games</span>
                                    <DownArrow />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.aboutContent} data-aos="zoom-in">
                    <span>About Tripo</span>
                    <h2>Your Source for Mobile Entertainment</h2>
                    <p>Gaming at Your Fingertips - Anytime, Anywhere!</p>
                    <Link href="/about">
                        <button type="button">Explore Now</button>
                    </Link>
                    <div className={styles.aboutContentImg} data-aos="fade-up">
                        <div className={styles.aboutImgBg}>
                            <Image src={aboutBg} alt="aboutBg" />
                        </div>
                        <div className={styles.aboutImgDoll} data-aos="zoom-in">
                            <Image src={aboutDoll} alt="aboutDoll" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
