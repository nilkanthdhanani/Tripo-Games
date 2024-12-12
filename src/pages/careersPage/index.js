import styles from './career.module.scss'
import JobOpenings from './jobOpenings'

export default function CareersPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.careerHead}>
          <span>Help Us Change the Way People Play</span>
          <h1>We’re Hiring</h1>
          <p>Join our team and be part of an exciting journey in the gaming industry. We offer dynamic opportunities, creative challenges, and a fun environment to grow and thrive together.</p>
        </div>
        <JobOpenings />
      </div>
    </main>
  )
}
