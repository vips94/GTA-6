import React, { useEffect, useState } from "react";
import styles from "./character.module.scss";
import { MediaList } from "@/constant/Media";
import Spinner from "@/components/spinner";

const Characters = () => {
  const [selectedMedia, setSelectedMedia] = useState(MediaList[0]);

  return (
    <div
      className={styles.section}
      style={{ backgroundImage: `url(${selectedMedia?.src})` }}
      id="character"
    >
      <div className={styles.top} />
      <div className={styles.container}>
        <div className={styles.title}>CHARACTERS</div>
        <div className={styles.title}>CHARACTERS</div>
        <ul>
          <li>
            <div className={styles.images}>
              <div className={styles.chInfo}>
                <p className={styles.firstName}>Ron</p>
                <p className={styles.lastName}>Jakowski</p>
              </div>
              <img src={"/images/characters/character3.png"} />
            </div>
          </li>
          <li>
            <div className={styles.images}>
              <div className={styles.chInfo}>
                <p className={styles.firstName}>Amanda</p>
                <p className={styles.lastName}>De Santa</p>
              </div>
              <img src={"/images/characters/character2.png"} />
            </div>
          </li>
          <li>
            <div className={styles.images}>
              <div className={styles.chInfo}>
                <p className={styles.firstName}>FRANKLIN</p>
                <p className={styles.lastName}>Clinton</p>
              </div>
              <img src={"/images/characters/character4.png"} />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topHeader} />
      <div className={styles.topFooter} />
    </div>
  );
};

export default Characters;
