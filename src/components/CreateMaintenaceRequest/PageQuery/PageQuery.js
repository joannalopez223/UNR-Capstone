import React from 'react';
import styles from './PageQuery.module.css';

function PageQuery(props) {
  return (
    <div className={styles.query}>

        <div className={styles.title}>

          <p>

            {props.title}

          </p>

        </div>
        
        <div className={styles.content}>

            {props.children}

        </div>

    </div>

  );
}

export default PageQuery;