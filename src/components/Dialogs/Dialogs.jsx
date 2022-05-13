import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let sentMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <div>
          <button onClick={sentMessage} className={styles.sentMess}>Sent message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
