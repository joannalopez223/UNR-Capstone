import React from 'react';
import styles from '../PostWidget/PostWidget.module.css'

function PostWidget(props){
    return (
        <div className= {styles.icon}>
            <span className="material-icons">account_circle</span>
        </div>
    );
};

export default PostWidget;