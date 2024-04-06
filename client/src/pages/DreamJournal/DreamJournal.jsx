import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Image } from "@chakra-ui/react"; // Import Image component
import styles from "./assets/journal.module.css";
import { QUERY_USER } from "../../utils/queries";
import astra from "../../assets/images/cosmog.png";
import sbubble from "../../assets/images/speechBubble.png";

export default function DreamJournal() {
  const { data, loading } = useQuery(QUERY_USER);
  const userData = data?.user || {};
  const mostRecentEntry =
    userData.dreamHistory &&
    userData.dreamHistory[userData.dreamHistory.length - 1];
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <>
      {mostRecentEntry ? (
        <Link to="/dreamInterpretation">
          <div className={styles.speechBubbleContainerDJ}>
            <Image
              src={sbubble}
              boxSize="12%"
              alt="sbubble"
              className={styles.speechBubbleDJ}
            />
            <p className={styles.speechBubbleContainerDJ}>
              Hey there, dreamer! <br />
              Got a new dream to decipher?<br />
              Click me and let's <br />
             uncover it's secrets!
            </p>
            <Image
              src={astra}
              boxSize="13%"
              alt="genie"
              className={styles.float}
            />
          </div>
        </Link>
      ) :   <Link to="/dreamInterpretation">
      <div className={styles.speechBubbleContainerDJ}>
        <Image
          src={sbubble}
          boxSize="12%"
          alt="sbubble"
          className={styles.speechBubbleDJ}
        />
        <p className={styles.speechBubbleContainerDJ}>
              Greetings! I'm Astra, <br />
              here to help you unravel<br />
              the mysteries of your dreams. <br />
              Click me to get started!
            </p>
        <Image
          src={astra}
          boxSize="13%"
          alt="genie"
          className={styles.float}
        />
      </div>
    </Link>}

      <div className={styles.main}>
        <div className={styles.entryHistory}>
          <h1 className={styles.containerTitle}>Past Interpretations</h1>
          {userData.dreamHistory && userData.dreamHistory.length > 0 ? (
            userData.dreamHistory
              .map((item) => (
                <div
                  key={item.id}
                  className={styles.entry}
                  onClick={() => handleEntryClick(item)}
                >
                  <div className={styles.entryDate}>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className={styles.entryTitle}>
                    <p>{item.usersDream}</p>
                  </div>
                </div>
              ))
              .reverse()
          ) : (
            <div className={styles.noEntries}>
              You have no past interpretations to display!
            </div>
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
            <div className={styles.noEntries}>
              You have no current interpretations to display!
            </div>
          )}
        </div>
      </div>
    </>
  );
}
