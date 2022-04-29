import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Lama" },
    { id: 2, name: "Lama Husband" },
    { id: 3, name: "Lama Mama" },
    { id: 4, name: "Lama Papa" },
    { id: 5, name: "Lama Ira" },
    { id: 6, name: "Lama Egor" },
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Where are you?" },
    { id: 3, message: "OK!" },
    { id: 4, message: "See you later!" },
    { id: 5, message: ";)" },
    { id: 6, message: "Bye!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
