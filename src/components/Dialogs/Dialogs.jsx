import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + " " + styles.active}>Lama</div>
        <div className={styles.dialog}>Lama Husband</div>
        <div className={styles.dialog}>Lama Mama</div>
        <div className={styles.dialog}>Lama Papa</div>
        <div className={styles.dialog}>Lama Sister</div>
        <div className={styles.dialog}>Lama Ira</div>
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
