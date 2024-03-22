import AstraApproved from '../../assets/images/cosmog.png';
import styles from './assets/journal.module.css';

export default function DreamJournal() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.entryHistory}>
                    <div className={styles.entry}>
                        <div className={styles.entryDate}>
                            <p>1/1/2024</p>
                        </div>
                        <div className={styles.entryTitle}>
                            <p>Teeth Falling out</p>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.entryDate}>
                            <p>1/2/2024</p>
                        </div>
                        <div className={styles.entryTitle}>
                            <p>Running from something</p>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.entryDate}>
                            <p>1/2/2024</p>
                        </div>
                        <div className={styles.entryTitle}>
                            <p>Running from something</p>
                        </div>
                    </div>
                    <div className={styles.entry}>
                        <div className={styles.entryDate}>
                            <p>1/2/2024</p>
                        </div>
                        <div className={styles.entryTitle}>
                            <p>Running from something</p>
                        </div>
                    </div>
                </div>
                <div className={styles.currentEntry}>
                    <div className={styles.title}>
                        <p>Naked Dream</p>
                    </div>
                    <div className={styles.entryContent}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <img src={AstraApproved} alt="Astra Approved" id='astraCert'/>
                </div>
            </div>
        </>
    )
}