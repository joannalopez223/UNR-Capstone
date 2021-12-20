import React from "react";
import styles from "./UniversalTextbox.module.css";

function UniversalTextbox(props) {
  return (
    <div className={styles.textbox}>
      <form>
        <textarea rows={props.rows}></textarea>
      </form>
    </div>
  );
}

export default UniversalTextbox;
