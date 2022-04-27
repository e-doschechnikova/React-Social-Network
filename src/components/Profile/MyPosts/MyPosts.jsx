import React from "react";
import styles from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" like={15} />
        <Post message="It's my first post!" like={3} />
        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
};

export default MyPosts;
