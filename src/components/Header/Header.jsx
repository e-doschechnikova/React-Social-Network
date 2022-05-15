import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../../img/logo.png" alt="logo"></img>
    </header>
  );
};

export default Header;
