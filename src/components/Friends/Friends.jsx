import React from "react";
import styles from "./Friends.module.css";

const FriendsAll = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img className={styles.avatarAll} src={props.avatar} alt="avatar" />
    </div>
  );
};

const Friends = (props) => {
  let friendsElements = props.state.map((userInfo) => {
    return <FriendsAll name={userInfo.name} avatar={userInfo.avatar} />;
  });

  return (
    <div className={styles.friendsNav}>
      <h2> Friends</h2>
      <div>{friendsElements}</div>
    </div>
  );
};

export default Friends;
