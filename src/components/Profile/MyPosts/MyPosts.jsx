import React from "react";
import styles from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" like={15} />
        <Post message="It's my first post!" like={3} />
      </div>
    </div>
  );
};

export default MyPosts;
