import React from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src="https://afisha.london/wp-content/uploads/2020/07/alpacas-colour-pattern-1588x840-1.jpg"
          alt="splash-screen"
        ></img>
      </div>
      <div>
        ava+ descr
        <img
          src="https://sun9-24.userapi.com/s/v1/ig2/zAZ7I0Md_UB8Tu70q-7yAyM53SSJwDf7Vv_rNlBU9ONFYjbfAVITsf0H_xcHSs3SMspulTfUday_lJmxOrQhv2zC.jpg?size=720x720&quality=95&type=album"
          alt="avatar"
        ></img>
      </div>
      <div>
        my post
        <div>new post</div>
      </div>
      <div className={styles.posts}>
        <div className={styles.item}>post1</div>
        <div className="item">post2</div>
      </div>
    </div>
  );
};

export default Profile;
