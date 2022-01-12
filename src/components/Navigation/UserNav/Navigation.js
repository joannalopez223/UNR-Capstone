import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import styles from "../../Navigation/Navigation.module.css";

const UserNavigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>

      <nav className={styles.nav}>
        <NavLink
          className={styles.NavLink}
          to="/dashboard"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Dashboard </p>{" "}
        </NavLink>
        <NavLink
          className={styles.NavLink}
          to="/viewmaintenancerequest"
          activeClassName={styles.selected}
        >
          {" "}
          <p> View Maintenance Request </p>{" "}
        </NavLink>
        <NavLink
          className={styles.NavLink}
          to="/createmaintenancerequest"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Create New Maintenance Request </p>{" "}
        </NavLink>
        <NavLink
          className={styles.NavLink}
          to="/feedback"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Feedback </p>{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default UserNavigation;
