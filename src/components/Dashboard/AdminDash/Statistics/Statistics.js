/*
  1. This page contains the data for the Statistics aspect of the Admin.
  2. Admin will be able to view 2 charts: 
    a. Radial Bar Graph - New Tickets 
    b. Donut Graph -  Building Opened Tickets
  3.Need: only allow access to users with admin roles via login. 
*/
import React from "react";
import styles from "./Statistics.module.css";
import RadialGraph from "../../../Graphs/RadialGraph/RadialGraph";
import DonutGraph from "../../../Graphs/DonutGraph/DonutGraph";

function Statistics() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left_pane}>
        <RadialGraph />
      </div>
      <div className={styles.right_pane}>
        <DonutGraph />
      </div>
    </div>
  );
}
export default Statistics;
