import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

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
        {/* <img
          src="https://sun9-24.userapi.com/s/v1/ig2/zAZ7I0Md_UB8Tu70q-7yAyM53SSJwDf7Vv_rNlBU9ONFYjbfAVITsf0H_xcHSs3SMspulTfUday_lJmxOrQhv2zC.jpg?size=720x720&quality=95&type=album"
          alt="avatar"
        ></img> */}
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
