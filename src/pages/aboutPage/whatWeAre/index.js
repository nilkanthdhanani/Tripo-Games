import styles from './whatWeAre.module.scss'

export default function WhatWeAre() {
    return (
        <section className={styles.whatWeAre}>
            <div className={styles.container2}>
                <div className={styles.wwaHead} data-aos="zoom-in">
                    <h2>What We Are About</h2>
                </div>
                <div className={styles.wwaGrid}>
                    <div className={styles.wwaGridBox} data-aos="fade-right">
                        <h3>Accomplishment</h3>
                        <p>We strive to deliver excellence in every game, celebrating milestones that push the boundaries of mobile entertainment and inspire players worldwide to achieve greatness.</p>
                    </div>
                    <div className={styles.wwaGridBox} data-aos="fade-left">
                        <h3>Creativity</h3>
                        <p>Our games are born from innovation, combining imaginative ideas with cutting-edge technology to craft experiences that captivate and engage audiences globally.</p>
                    </div>
                    <div className={styles.wwaGridBox} data-aos="fade-up">
                        <h3>Community</h3>
                        <p>We foster an inclusive environment where players connect, collaborate, and thrive, building lasting bonds through shared love for gaming adventures.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
