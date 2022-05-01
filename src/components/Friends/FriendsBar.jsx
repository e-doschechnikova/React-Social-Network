import React from "react";
import styles from "./FriendsBar.module.css";
import FriendsList from "./FriendsList";

const FriendsInfo = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <img src={props.avatar} />
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
