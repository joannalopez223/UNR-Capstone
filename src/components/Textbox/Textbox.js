import React from "react";
import styles from "./Textbox.module.css";

function Textbox() {
  return (
    <div className={styles.textbox}>
      <form>
        <textarea rows="10"></textarea>
      </form>
    </div>
  );
}

export default Textbox;
