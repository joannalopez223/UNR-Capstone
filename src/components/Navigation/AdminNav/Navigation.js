/*
1. This page is the main routing for the admin pages. 
2. Will need to see if theres a better way to reuse 'user' side nav bar. 
*/

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import styles from "../../Navigation/Navigation.module.css";

const Navigation = () => {
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
          to="/managemaintenancerequests"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Manage Maintenance Request </p>{" "}
        </NavLink>
        <NavLink
          className={styles.NavLink}
          to="/messages"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Messages </p>{" "}
        </NavLink>
        <NavLink
          className={styles.NavLink}
          to="/analytics"
          activeClassName={styles.selected}
        >
          {" "}
          <p> Analytics </p>{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
