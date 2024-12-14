"use client"
import { useState } from 'react';
import styles from './careerOption.module.scss'
import JoinModal from '../joinModal';

export default function CareerOption({ title, whatPera1, whatPera2, whatPera3, whoPera1, whoPera2, whoPera3 }) {
    const [isModalOpen, SetIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        SetIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <section className={styles.careerOption}>
                <div className={styles.careerOptionBg}></div>
                <div className={styles.container}>
                    <div className={styles.carOpHead} data-aos="zoom-in">
                        <span>Careers</span>
                        <h1>{title}</h1>
                        <p>Location: San Francisco</p>
                        <p>Employment Type: Contract</p>
                        <div className={styles.carOpModal}>
                            <button type='button'onClick={handleModalToggle}>Apply Now</button>
                        </div>
                    </div>
                    <div className={styles.carOpBox}>
                        <div className={styles.carOpBoxText}>
                            <h2>What You'll Do</h2>
                            <p>{whatPera1}</p>
                            <p>{whatPera2}</p>
                            <p>{whatPera3}</p>
                        </div>
                        <div className={styles.carOpBoxText}>
                            <h2>Who You Are</h2>
                            <p>{whoPera1}</p>
                            <p>{whoPera2}</p>
                            <p>{whoPera3}</p>
                        </div>
                    </div>
                </div>
            </section>
            <JoinModal isOpen={isModalOpen} onClose={handleModalToggle} />
        </>
    )
}
