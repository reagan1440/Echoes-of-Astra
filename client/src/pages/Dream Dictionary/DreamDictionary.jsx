import React, { useState } from 'react';
import styles from "./assets/dreamdictionary.module.css";
import chased from "../../assets/images/being-chased.jpg";
import death from "../../assets/images/death.jpg";
import falling from "../../assets/images/falling.jpg";
import flying from "../../assets/images/flying.jpg";
import late from "../../assets/images/late.jpg";
import lost from "../../assets/images/lost.jpg";
import naked from "../../assets/images/naked.jpg";
import paralysis from "../../assets/images/sleep-paralysis.jpg";
import teeth from "../../assets/images/teeth.jpg";
import test from "../../assets/images/test-taking.jpg";
import water from "../../assets/images/water.jpg";



const DreamDictionary = () => {
  const data = [
    {
      id: 1,
      title: "Being Chased",
      description: "Dreams of being chased are the most common among all people. It is a sign that you are running away from your fears or problems in your life. It could also mean that you are avoiding a situation that you do not want to confront.",
      image: chased,
    },
    {
      id: 2,
      title: "Death",
      description: "Dreams of death are not always a bad omen. It could mean that you are going through a period of change in your life. It could also mean that you are letting go of something that is no longer serving you.",
      image: death,
    },
    {
      id: 3,
      title: "Falling",
      description: "Dreams of falling are a sign that you are feeling out of control in your life. It could mean that you are feeling overwhelmed by a situation or that you are afraid of failing.",
      image: falling,
    },
    {
      id: 4,
      title: "Flying",
      description: "Dreams of flying are a sign that you are feeling free and liberated in your life. It could mean that you are feeling confident and in control of your life.",
      image: flying,
    },
    {
id: 5,
title: "Late",
description: "Dreams of being late are a sign that you are feeling overwhelmed by a situation in your life. It could mean that you are feeling unprepared or that you are afraid of missing out on an opportunity.",
image: late,
    },
    {
id: 6,
title: "Lost",
description: "Dreams of being lost are a sign that you are feeling directionless in your life. It could mean that you are feeling confused or that you are searching for something that is missing in your life.",
image: lost,
    },
    {
      id: 7,
      title: "Naked",
      description: "Dreams of being naked are a sign that you are feeling exposed or vulnerable in your life. It could mean that you are feeling insecure or that you are afraid of being judged by others.",
      image: naked,
    },
    {
id: 8,
title: "Sleep Paralysis",
description: "Dreams of sleep paralysis are a sign that you are feeling trapped or helpless in your life. It could mean that you are feeling overwhelmed by a situation or that you are afraid of losing control.",
image: paralysis,
    },
    { id: 9,
      title: "Teeth",
      description: "Dreams of teeth are a sign that you are feeling anxious or stressed in your life. It could mean that you are feeling insecure or that you are afraid of losing something important to you.",
      image: teeth,
    },
    {
      id: 10,
      title: "Test Taking",
      description: "Dreams of taking a test are a sign that you are feeling anxious or stressed in your life. It could mean that you are feeling unprepared or that you are afraid of failing.",
      image: test,
    },
    {
      id: 11,
      title: "Water",
      description: "Dreams of water are a sign that you are feeling emotional or overwhelmed in your life. It could mean that you are feeling out of control or that you are afraid of drowning in your emotions.",
      image: water,
    },
  ]

  const [selectedDream, setSelectedDream] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  const showDescriptionText = () => {
    const descriptionData = data.filter((item) => item.id === selectedDream)

    return descriptionData[0]?.description;
  }


  return (
    <div
      className={styles.container}
    >
      <div className={styles.bar} >
        {data.map((item) => (
          <div key={item.id} className={styles.card} onClick={() => {
            setSelectedDream(item.id)
            setShowDescription(true)
          }}>
            <div>
              <img src={item.image} alt={item.title} width={300}  className={styles.image}/>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            {showDescription && selectedDream === item.id ?
              (<div className={styles.description}>
                <h2>Description</h2>
                <p>{item.description}</p>
              </div>) : ''}
          </div>

        ))}

        {/* {showDescription ? (
          <div className={styles.description}>

            <h2>Description</h2>
            <p>{showDescriptionText()}</p>

          </div>

        ) : ''} */}
      </div>


    </div>

  );
};

export default DreamDictionary;