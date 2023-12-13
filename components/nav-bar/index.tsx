import React from 'react';
import Image from 'next/image';

import styles from './navBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navSection}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div>Home</div>
                    <div>Media</div>
                </div>
                <div className={styles.center}>
                    <img
                        className={styles.logo}
                        src="/images/logoWithourBorder.svg"
                        alt="Picture of the gta logo"
                    />
                </div>
                <div className={styles.right}>
                    <div>Characters</div>
                    <div>price</div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
