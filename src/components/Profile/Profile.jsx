import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1632226901385-e07fe19a345e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
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
