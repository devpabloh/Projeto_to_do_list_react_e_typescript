import React from 'react'

import styles from "./Header.module.css"



const Header = () => {
  return (
    <header>
        <h1 className={styles.header}>To-Do List</h1>
    </header>
  );
};

export default Header