import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

export const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog + " " + styles.active}>
      <img className={styles.avatar} src={props.avatar} alt="avatar" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
