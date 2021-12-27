import React from 'react';

import styles from './Header.module.css';
import headerImage from '../../assets/logo.png';

const Header = () => {
    return <header className={styles.header}>
        <img src={headerImage} alt='Logo' />
        <h1>Metabolic Rate Calculator</h1>
    </header>
}

export default Header;