import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import { MediaList } from "@/constant/Media";
import DownloadButton from "@/components/download-button";

const About = () => {
  return (
    <div
      className={styles.section}
      style={{ backgroundImage: `url(${MediaList[5]?.src})` }}
    >
      <div className={styles.top} />
      <div className={styles.textHolder}>
        <p className={styles.price}>$35</p>
        <p className={styles.name}>Grand Theft Auto 6</p>
        <div className={styles.divider} />
        <div className={styles.platformContainer}>
          <span className={styles.platform}>
            <p>PS4</p>
            <p>XBOX</p>
            <p>PC</p>
          </span>
          <span className={styles.stars}>stars</span>
        </div>
        <div className={styles.genreContainer}>
          <div className={styles.genraTags}>
            <p>Action</p>
            <p>Adventure</p>
            <p>Shooting</p>
          </div>
          <span className={styles.genre}>: Genre</span>
        </div>
        <p className={styles.about}>
          GTA 6 (Grand Theft Auto VI) is the next chapter of the colossal GTA
          Series. The game has been confirmed to be in development by Rockstar
          Games, and has suffered a major leak on September 18, 2022. It has now
          been 9 long years since Grand Theft Auto V has been released, the
          longest we ever had to wait between Grand Theft Auto games.
        </p>
        <DownloadButton className={styles.buyNow}/>
      </div>
    </div>
  );
};

export default About;
