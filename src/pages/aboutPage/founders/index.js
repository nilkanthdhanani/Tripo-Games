import { founder1, founder2, founder3, founder4 } from '@/assets/images/image'
import styles from './founders.module.scss'
import Image from 'next/image'

const fonders = [
    {
        image: founder1,
        name: "Ray Finigun",
        post: "CEO",
    },
    {
        image: founder2,
        name: "Daizy Suarez",
        post: "CTO",
    },
    {
        image: founder3,
        name: "Tao Deng",
        post: "Senior Game Designer",
    },
    {
        image: founder4,
        name: "Beng Singleton",
        post: "Senior Game Developer",
    },
]

export default function Founders() {
    return (
        <section className={styles.founders}>
            <div className={styles.container}>
                <div className={styles.foundersBox}>
                    <h2>Meet the Founders</h2>
                    <div className={styles.fonderGrid}>
                        {fonders.map((data, index) => (
                            <div className={styles.fonderGridBox} key={index}>
                                <div className={styles.fonderBoxImg}>
                                    <Image src={data.image} alt={data.name} />
                                </div>
                                <h3>{data.name}</h3>
                                <span>{data.post}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
