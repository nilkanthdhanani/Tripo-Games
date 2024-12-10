import { useEffect, useRef, useState } from 'react';
import { apple, google, kiponIcon, ourDoll, ourGameBg, robotrixIcon, treasureIcon } from '@/assets/images/image';
import styles from './ourGame.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const gameList = [
    {
        icon: kiponIcon,
        title: 'Kipon',
        subtitle: 'Casual - Free',
        description: "Dive into a relaxing world with Kipon, a casual game perfect for quick play sessions. Enjoy endless fun, simple controls, and engaging levels to keep your stress at bay.",
    },
    {
        icon: robotrixIcon,
        title: 'Robotrix',
        subtitle: 'RPG - Free',
        description: "Embark on an epic adventure in Robotrix, an RPG filled with futuristic challenges. Customize robots, battle powerful enemies, and explore a world where strategy and skill decide your fate.",
    },
    {
        icon: treasureIcon,
        title: 'Treasure Box',
        subtitle: 'Adventure - Free',
        description: "Unleash your inner explorer in Treasure Box! Solve puzzles, discover hidden treasures, and embark on thrilling adventures across magical lands. It's a journey filled with surprises and rewards!",
    }
]

export default function OurGames() {
    const [opacity, setOpacity] = useState(0);
    const gameGridRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!gameGridRef.current) return;

            const gameGrid = gameGridRef.current;
            const rect = gameGrid.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top >= 0 && rect.top <= windowHeight) {
                const progress = 1 - rect.top / windowHeight;
                setOpacity(progress);
            } else if (rect.top < 0) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.ourGame} id='games'>
            <div className={styles.container}>
                <div className={styles.gameHead}>
                    <h2>Our Games</h2>
                    <p>Explore an exciting collection of mobile games designed for endless fun and entertainment. From action-packed adventures to brain-teasing puzzles, our games deliver immersive experiences for players of all ages.</p>
                </div>
                <div className={styles.gameGrid} ref={gameGridRef}>
                    <div className={styles.gameGridImg} style={{ opacity }}>
                        <Image src={ourGameBg} alt="ourGameBg" />
                    </div>
                    <div className={styles.gameGridDoll}>
                        <Image src={ourDoll} alt="ourDoll" />
                    </div>
                    <div className={styles.gameGrid1}>
                        {gameList.map((data, index) => (
                            <div className={styles.gameGrid1Box} key={index}>
                                <div className={styles.gameProfile}>
                                    <Image src={data.icon} alt={data.title} />
                                    <div className={styles.gameName}>
                                        <h3>{data.title}</h3>
                                        <span>{data.subtitle}</span>
                                    </div>
                                </div>
                                <p>{data.description}</p>
                                <div className={styles.gameLink}>
                                    <Link href="https://play.google.com/store/games?hl=en&gl=US" target="_blank">
                                        <Image src={google} alt="google" />
                                    </Link>
                                    <Link href="https://www.apple.com/app-store/" target="_blank">
                                        <Image src={apple} alt="apple" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
