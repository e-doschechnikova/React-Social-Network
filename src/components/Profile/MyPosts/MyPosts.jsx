import React from "react";
import styles from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

let addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

let updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POAT-TEXT",
    newText: text,
  };
};

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    // let action = { type: "UPDATE-NEW-POAT-TEXT", newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
