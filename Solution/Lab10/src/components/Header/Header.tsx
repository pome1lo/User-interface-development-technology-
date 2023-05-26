import React, {FC} from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.logo}>
                    FRONTEND <span>JOB</span>
                </div>
                <ul className={styles.nav_menu}>
                    <li><a href='#'>Поиск вакансий</a></li>
                    <li className={styles.nav_link}><a href='#'>Избранные вакансии</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;