import React from "react";
import styles from "../Post/Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://static.360tv.ru/media/images/articles/cover/05fcf169-bd65-4cef-9611-b49f4d0b83a3/1489482325_smeshnye-alpaki-1.jpg"
        alt="avatar"
      ></img>
      {props.message}
      <div>
        <span>{props.like} likes</span>
      </div>
    </div>
  );
};

export default Post;