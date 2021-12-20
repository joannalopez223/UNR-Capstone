import React from "react";
import styles from "./Textbox.module.css";

function Textbox(props) {
  return (
    <div className={styles.textbox}>
      <form>
        <textarea rows={props.rows}></textarea>
      </form>
    </div>
  );
}

export default Textbox;
