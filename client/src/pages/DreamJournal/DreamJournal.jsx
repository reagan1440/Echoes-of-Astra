import React, { useState } from 'react';
import styles from "./assets/journal.module.css";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

export default function DreamJournal() {
  const { data, loading } = useQuery(QUERY_USER);
  const userData = data?.user || {};

  const mostRecentEntry = userData.dreamHistory && userData.dreamHistory[0];

  // State to track the currently selected entry for details view
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Handler to update the selected entry
  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.entryHistory}>
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
            ))
          ) : (
            <div className={styles.noEntries}>You have no interpretations to display!</div>
          )}
        </div>
        <div className={styles.currentEntry}>
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
            <div className={styles.noEntries}>You have no interpretations to display!</div>
          )}
        </div>
      </div>
    </>
  );
}
