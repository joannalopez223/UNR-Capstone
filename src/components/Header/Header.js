import React from "react";
import CurrentUser from "../CurrentUser/CurrentUser";
import profile_picture from "../../assets/profile_picture.png";
import HeaderWidget from "../Widget/HeaderWidget/HeaderWidget";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <CurrentUser picture={profile_picture} name="John Doe"></CurrentUser>

        <div className={styles.widgets}>
          <HeaderWidget icon="settings"></HeaderWidget>
        </div>
      </div>
    </div>
  );
}

export default Header;
