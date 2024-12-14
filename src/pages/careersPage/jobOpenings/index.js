"use client"
import { useState } from 'react';
import { jobIcon1, jobIcon2, jobIcon3, jobIcon4 } from '@/assets/images/image';
import styles from './jobOpenings.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import JoinModal from '@/component/joinModal';

const jobOpenings = [
    {
        image: jobIcon1,
        title: 'Community Manager',
        place: 'San Francisco, CA',
        description: 'Build player communities, foster engagement, and enhance gaming experiences through communication and collaboration with teams worldwide.',
        link: '/community-manager',
    },
    {
        image: jobIcon2,
        title: 'QA Tester',
        place: 'San Francisco, CA',
        description: 'Test games, identify bugs, ensure performance, and collaborate with developers to deliver high-quality gaming experiences.',
        link: '/qa-tester',
    },
    {
        image: jobIcon3,
        title: 'Game Designer',
        place: 'San Francisco, CA',
        description: 'Design creative gameplay mechanics, levels, and features, ensuring captivating and enjoyable experiences for players globally.',
        link: '/game-designer',
    },
    {
        image: jobIcon4,
        title: 'Game Developer',
        place: 'San Francisco, CA',
        description: 'Develop games using advanced technologies, collaborate with teams, and deliver high-performance features that captivate players worldwide.',
        link: '/game-developer',
    },
];

export default function JobOpenings() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className={styles.jobOpenings}>
                <h2 data-aos="zoom-in">Job Openings</h2>
                <div className={styles.jobGrid}>
                    {jobOpenings.map((data, index) => (
                        <div className={styles.jobBox} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <div>
                                <div className={styles.jobBoxImg}>
                                    <Image src={data.image} alt={data.title} />
                                </div>
                                <h3>{data.title}</h3>
                                <span>{data.place}</span>
                                <p>{data.description}</p>
                            </div>
                            <Link href={data.link}>
                                <button>Apply</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.sendCV}>
                <div className={styles.sendCVText} data-aos="zoom-in">
                    <span>Didn’t Find the Position You’re Looking For?</span>
                    <h2>Send Us Your CV</h2>
                    <button type="button" onClick={handleModalToggle}>Apply Now</button>
                </div>
            </div>
            <JoinModal isOpen={isModalOpen} onClose={handleModalToggle} />
        </>
    );
}
