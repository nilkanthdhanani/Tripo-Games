import styles from './gameDes.module.scss'

export default function GameDes({ gameDesCls, title, description }) {
    return (
        <section className={styles.gameDes}>
            <div className={`${styles[gameDesCls]}`}></div>
            <div className={styles.container}>
                <div className={styles.gameDesBox} data-aos="zoom-in">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}
