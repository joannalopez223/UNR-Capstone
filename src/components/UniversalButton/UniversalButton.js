import React from 'react';
import styles from './StatusButton.module.css';

class (props) {
  return (

    <div className={styles.button}>

        <button style={{background: props.color}}>{props.label}</button>

    </div>

  );
}

export default UniversalButton;