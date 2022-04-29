import React from "react";
import styles from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 1 },
    { id: 2, message: "It's my first post!", likesCount: 12 },
    { id: 3, message: "Oh, no! I'm lost!", likesCount: 6 },
    { id: 4, message: "Where am I?", likesCount: 60 },
  ];
  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
