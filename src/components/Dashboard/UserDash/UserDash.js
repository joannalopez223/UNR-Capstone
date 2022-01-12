import styles from "./UserDash.module.css";
import React from "react";
import ActiveMessage from "./ActiveMessage/ActiveMessage";
import ActiveRequest from "./ActiveRequest/ActiveRequest";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Dash() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left_pane}>
        <ActiveRequest />
        <ActiveMessage />
      </div>
      <div className={styles.right_pane}>
        <Calendar />
      </div>
    </div>
  );
}

export default Dash;
