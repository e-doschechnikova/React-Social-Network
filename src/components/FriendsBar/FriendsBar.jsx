import React from "react";
import styles from "./FriendsBar.module.css";

const FriendsInfo = (props) => {
  return (
    <div className={styles.friendsBlock}>
      <img className={styles.avatar} alt="avatar" src={props.avatar} />
      <span>{props.name}</span>
    </div>
  );
};

const FriendsBar = (props) => {
  let idFriends = props.state.map((i) => {
    return <FriendsInfo key={i.id} name={i.name} avatar={i.avatar} />;
  });

  return <div className={styles.friendsBar}>{idFriends}</div>;
};

export default FriendsBar;
