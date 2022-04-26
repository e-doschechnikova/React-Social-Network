import React from "react";
import styles from "../MyPosts/MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      my post
      <div>new post</div>
      <div className={styles.posts}>
        <div className={styles.item}>post1</div>
        <div className="item">post2</div>
      </div>
    </div>
  );
};

export default MyPosts;
