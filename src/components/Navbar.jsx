import React from "react";
import styles from "./Navbar.module.css";

// let styles = {
//   nav: "Navbar_nav__P8IDh",
//   item: "Navbar_item__0wJa1",
// };

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a href="#s">Profile</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="#s">News</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Music</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
