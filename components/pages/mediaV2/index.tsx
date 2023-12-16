import React, { useEffect, useState } from "react";
import styles from "./media.module.scss";
import { MediaList } from "@/constant/Media";
import Spinner from "@/components/spinner";

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState(MediaList[0]);
  const [isIframeMounted, setIsIframeMounted] = useState(false);

  useEffect(()=>{
    if(!selectedMedia?.isImage){
        setIsIframeMounted(true);
        setTimeout(()=>{
            setIsIframeMounted(false);
        },2000)
    }
  },[selectedMedia.isImage])

  const handleIframeLoad = () => {
    setIsIframeMounted(true);
  };

  return (
    <div
      className={styles.section}
      style={{ backgroundImage: `url(${selectedMedia?.src})` }}
    >
      <div className={styles.top} />
      <div className={styles.videoHolder}>
        {isIframeMounted && <div className={styles.loadingScreen}>
          <Spinner />
        </div>}
        {selectedMedia.isImage ? (
          <img
            className={styles.mediaImage}
            src={selectedMedia.src}
            alt="Picture of the GTA"
          />
        ) : (
          <iframe
            className={styles.videoSec}
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            allowFullScreen
            frameBorder={0}
            src={`https://youtube.com/embed/QdBZY2fkU-0?autoplay=0&rel=0`}
            // onLoad​={handleIframeLoad}
          />
        )}
      </div>
      <div className={styles.listHolder}>
      <div className={styles.title}>MEDIA</div>

        <ul>
          {MediaList?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setSelectedMedia(item);
                }}
              >
                {
                    !item?.isImage && <div className={styles.showPlayButton}>
                        <img src='/svg/youtubeBtn.svg' alt="youtube button" />
                    </div> 
                }
                <img src={item.src} alt="Picture of the GTA" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.topHeader} />
      <div className={styles.topFooter} />
    </div>
  );
};

export default Media;
