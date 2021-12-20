import React from "react";
import styles from "./CurrentUser.module.css";

function CurrentUser(props) {
  return (
    <div className={styles.user}>
      <div className={styles.profile_picture}>
        <img src={props.picture} />
      </div>
      <div className={styles.profile_name}>
        <p>
          Welcome, <span>{props.name}</span>
        </p>
      </div>
    </div>
  );
}

export default CurrentUser;
