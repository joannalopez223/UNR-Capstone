/*
  1. This page contains the data and table for the maintenance tickets.
  2. Admin will be able to view the most recent maintenance tickets on the dashboard. The Table will be able to filter the data by clicking the respective column.
  3. Will need to connect to database to render the data.
  4. Check with Araam and Nasrin for universal component of table previously done on "View Maintenance Request Page"- (Will replace with theirs for cohesiveness throughout the app).  
*/
import React, { Component } from "react";
import styles from "./MaintenanceTickets.module.css";

class MaintenanceTickets extends Component {
  render() {
    return (
      <div>
        <div className={styles.maintenance}>
          <div className={styles.title}>
            <p>Maintenance Tickets</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MaintenanceTickets;
