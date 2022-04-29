import React from "react";
import styles from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 1 },
    { id: 2, message: "It's my first post!", likesCount: 12 },
    { id: 3, message: "Oh, no! I'm lost!", likesCount: 6 },
    { id: 4, message: "Where am I?", likesCount: 60 },
  ];

  console.log(postData);
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
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
        <Post
          message={postData[2].message}
          likesCount={postData[2].likesCount}
        />
        <Post
          message={postData[3].message}
          likesCount={postData[3].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
