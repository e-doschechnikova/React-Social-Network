import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Lama" id="1" />
        <DialogItem name="Lama Husband" id="2" />
        <DialogItem name="Lama Mama" id="3" />
        <DialogItem name="Lama Papa" id="4" />
        <DialogItem name="Lama Sister" id="5" />
        <DialogItem name="Lama Ira" id="6" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi!" />
        <Message message="Where are you?" />
        <Message message="OK!" />
        <Message message="See you later!" />
        <Message message=";)" />
        <Message message="Bye!" />
      </div>
    </div>
  );
};

export default Dialogs;
