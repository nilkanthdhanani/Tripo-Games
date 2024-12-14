import Image from 'next/image'
import styles from './reviews.module.scss'
import StarIcon from '@/assets/images/svg/starIcon'

export default function Reviews({ ss1, ss2, rating, reviewsData }) {
    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                <h2 data-aos="zoom-in">Screenshots</h2>
                <div className={styles.screenShotes}>
                    <div className={styles.ssImage} data-aos="fade-right">
                        <Image src={ss1} alt="ss1" />
                    </div>
                    <div className={styles.ssImage} data-aos="fade-left">
                        <Image src={ss2} alt="ss2" />
                    </div>
                </div>
                <div className={styles.reviewHead}>
                    <h2 data-aos="zoom-in">Reviews</h2>
                    <div className={styles.rating} data-aos="zoom-in">
                        <div className={styles.ratingDiv}>
                            <StarIcon />
                            <div className={styles.ratingStar}>
                                {rating} Rating
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewDiv}>
                    {reviewsData.map((data, index) => (
                        <div className={styles.reviewBox} key={index} data-aos="fade-up">
                            <div className={styles.reviewBoxText}>
                                <p>{data.review}</p>
                                <h3>{data.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
