import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const activeLink = ({ isActive }) => (isActive ? styles.active : styles.item);

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" className={activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={activeLink}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={activeLink}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/setting" className={activeLink}>
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
