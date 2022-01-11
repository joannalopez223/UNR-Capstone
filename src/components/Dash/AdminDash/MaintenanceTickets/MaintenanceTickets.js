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
