import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Image, Button } from "@chakra-ui/react"; 
import styles from "./assets/journal.module.css";
import { QUERY_USER } from "../../utils/queries";
import { DELETE_DREAM } from '../../utils/mutations';
import astra from "../../assets/images/cosmog.png";
import sbubble from "../../assets/images/speechBubble.png";

export default function DreamJournal() {
  const { data, loading } = useQuery(QUERY_USER);
  const userData = data?.user || {};
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Define the deleteDream mutation function
  const [deleteDream] = useMutation(DELETE_DREAM, {
    refetchQueries: [{ query: QUERY_USER }],
  });

  const truncateText = (text) => {
    const words = text.split(" ");
    return words.slice(0, 5).join(" ");
  };

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleDeleteDream = (dreamId) => {
    // Call the deleteDream mutation function
    deleteDream({ variables: { dreamId } })
      .then((res) => {
        // Handle success
        console.log("Dream deleted successfully:", res);
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting dream:", error);
      });
  };

  return (
    <>
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
            Got a new dream to decipher?
            <br />
            Click me and let's <br />
            uncover its secrets!
          </p>
          <Image
            src={astra}
            boxSize="13%"
            alt="genie"
            className={styles.float}
          />
        </div>
      </Link>

      <div className={styles.main}>
        {/* Past interpretations */}
        <div className={styles.entryHistory}>
          <h1 className={styles.containerTitle}>Past Interpretations</h1>
          {userData.dreamHistory && userData.dreamHistory.length > 0 ? (
            userData.dreamHistory
              .map((item, index) => (
                <div
                  key={item.id}
                  className={styles.entry}
                  onClick={() => handleEntryClick(item)}
                >
                  <div className={styles.entryDate}>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className={styles.entryDreamNum}>
                    <p>{`Dream ${index + 1}`}</p>
                  </div>
                  <div className={styles.entryTitle}>
                    <p>{truncateText(item.usersDream)}</p>
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
        {/* Current interpretation */}
        <div className={styles.currentEntry}>
          <h1 className={styles.containerTitle}>Current Interpretation</h1>
          {selectedEntry ? (
            <>
              {/* Dream number */}
              <div className={styles.entryDreamNum}>
                <p>{`Dream ${
                  userData.dreamHistory.indexOf(selectedEntry) + 1
                }`}</p>
              </div>
              {/* User response */}
              <div className={styles.userRes}>
                <p>{selectedEntry.usersDream}</p>
              </div>
              {/* Entry content */}
              <div className={styles.entryContent}>
                <p>{selectedEntry.aiResponse}</p>
              </div>
                     {/* Delete button */}
                     
                     {/* <div className={styles.deleteButton}>
                    <Button onClick={() => handleDeleteDream(item.id)}>Delete</Button>
                  </div> */}
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
