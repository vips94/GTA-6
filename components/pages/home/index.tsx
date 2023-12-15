import React from 'react';
import styles from './home.module.scss';

const HomePage = () => {
    return (
        <div className={styles.section}>
            <div className={styles.top}/>
            <img className={styles.circle} src='./svg/circle.svg'/>
            <div className={styles.logo}>
                <img src={'/images/gta6logo.png'}/>
            </div>
            <div className={styles.release}>
                Coming 2025
            </div>
            <img className={styles.character} src='./images/characters/character1.png'/>
            <div className={styles.videoContainer}>
                <p>
                    LATEST TRAILER
                </p>
                <iframe 
                    className={styles.videoSec}
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    allowFullScreen
                    src={`https://youtube.com/embed/QdBZY2fkU-0?autoplay=0&rel=0`}>
                </iframe>
            </div>
            
        </div>
    );
};

export default HomePage;
