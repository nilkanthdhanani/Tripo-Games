import { useEffect, useState } from 'react';
import styles from './aboutContent.module.scss'

export default function AboutContent() {
    const [transformX, setTransformX] = useState(-100);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(`.${styles.aboutContent}`);
            if (section) {
                const { top, height } = section.getBoundingClientRect();
                const scrollProgress = Math.min(Math.max(-top / height, 0), 1);
                setTransformX((1 - scrollProgress) * -100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.aboutContent}>
            <div className={styles.container}>
                <div className={styles.aboutConHead} data-aos="zoom-in">
                    <span>We Are Tripo</span>
                    <h1>We're creating the best in intractive entertainment by making games that change the way people have fun.</h1>
                </div>
            </div>
            <div className={styles.aboutConGrid}>
                <div className={styles.aboutConBg}>
                    <div className={styles.aboutBgImg} style={{ transform: `translateX(${transformX}px)` }}></div>
                </div>
                <div className={styles.aboutConText}>
                    <p data-aos="zoom-in">Here's a 150-word paragraph for your About page: Welcome to Tripo Games, where imagination meets innovation! At the heart of our company lies a passion for creating engaging, immersive experiences that connect players worldwide. Founded on the belief that gaming is more than just entertainment, we aim to inspire creativity, foster collaboration, and spark joy in every adventure we craft.</p>
                    <p data-aos="zoom-in">Our team of talented developers, designers, and storytellers is dedicated to pushing the boundaries of technology and storytelling, delivering games that captivate and challenge players of all ages. Whether you're exploring vast open worlds, solving intricate puzzles, or competing in thrilling battles, our goal is to ensure every moment feels memorable. We're constantly evolving, listening to our community, and striving to bring new ideas to life. Join us on this exciting journey and discover why gaming is more than a pastime—it's a way of connecting and creating unforgettable memories. Game on!</p>
                </div>
            </div>
        </section>

    )
}
