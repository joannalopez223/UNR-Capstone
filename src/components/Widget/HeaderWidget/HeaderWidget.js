import React from 'react';
import styles from './HeaderWidget.module.css';

function HeaderWidget(props) {
  return (

    <div className={styles.widget}>

        <span className='material-icons'>

            {props.icon}

        </span>

    </div>


  );
}

export default HeaderWidget;
