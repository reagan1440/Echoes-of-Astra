import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Image } from '@chakra-ui/react'; // Import Image component
import styles from './assets/journal.module.css';
import { QUERY_USER } from '../../utils/queries';
import astra from '../../assets/images/Cosmog.png';
import sbubble from '../../assets/images/speechBubble.png';


export default function DreamJournal() {
  const { data, loading } = useQuery(QUERY_USER);
  const userData = data?.user || {};
  const mostRecentEntry = userData.dreamHistory && userData.dreamHistory[userData.dreamHistory.length - 1];
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <>
      <Link to="/dreamInterpretation">
        <div className={styles.speechBubbleContainerDJ}>
          <Image src={sbubble} boxSize="16%" alt="sbubble"/>
          <p className={styles.speechBubbleContainerDJ}>
            Hi, I&apos;m Astra, <br />
            your dream interpretation AI! <br />
            Click me to have your <br />
            dream interpreted!!
          </p>
          <Image src={astra} boxSize="20%" alt="genie" className="float" />
        </div>
      </Link>

      <div className={styles.main}>
        <div className={styles.entryHistory}>
          <h1 className={styles.containerTitle}>Past Interpretations</h1>
          {userData.dreamHistory && userData.dreamHistory.length > 0 ? (
            userData.dreamHistory.map((item) => (
              <div key={item.id} className={styles.entry} onClick={() => handleEntryClick(item)}>
                <div className={styles.entryDate}>
                  <p>{item.createdAt}</p>
                </div>
                <div className={styles.entryTitle}>
                  <p>{item.usersDream}</p>
                </div>
              </div>
            )).reverse()
          ) : (
            <div className={styles.noEntries}>You have no past interpretations to display!</div>
          )}
        </div>
        <div className={styles.currentEntry}>
        <h1 className={styles.containerTitle}>Current Interpretation</h1>
          {selectedEntry ? (
            <>
              <div className={styles.userRes}>
                <p>{selectedEntry.usersDream}</p>
              </div>
              <div className={styles.entryContent}>
                <p>{selectedEntry.aiResponse}</p>
              </div>
            </>
          ) : mostRecentEntry ? (
            <>
              <div className={styles.userRes}>
                <p>{mostRecentEntry.usersDream}</p>
              </div>
              <div className={styles.entryContent}>
                <p>{mostRecentEntry.aiResponse}</p>
              </div>
            </>
          ) : (
            <div className={styles.noEntries}>You have no current interpretations to display!</div>
          )}
        </div>
      </div>
    </>
  );
}
