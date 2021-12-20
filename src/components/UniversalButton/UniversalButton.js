import React from 'react';
import styles from './UniversalButton.module.css';

function UniversalButton(props) {

  return (

    <button className={styles.button} style={{background: props.color}}>

      { props.isIcon ? null : 
        <div className={styles.icon}>

          <span class="material-icons">

            { props.icon }

          </span>
        </div>
      }
      <p className={styles.label}>

        {props.children}

      </p>
          
    </button>

  )
}

export default UniversalButton;