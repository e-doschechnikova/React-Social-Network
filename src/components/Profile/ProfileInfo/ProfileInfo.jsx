import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="splash-screen"
        ></img>
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
