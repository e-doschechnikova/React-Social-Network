import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + " " + styles.active}>
          <NavLink to="/dialogs/1">Lama</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/2">Lama Husband</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Lama Mama</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4">Lama Papa</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5">Lama Sister</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/6">Lama Ira</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi!</div>
        <div className={styles.message}>Where are you?</div>
        <div className={styles.message}>OK!</div>
      </div>
    </div>
  );
};

export default Dialogs;
