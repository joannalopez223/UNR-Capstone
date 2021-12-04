import React from 'react';
import './HeaderWidget.css';

function HeaderWidget(props) {
  return (

    <div className="widget">

        <span className="material-icons">

            {props.icon}

        </span>

    </div>


  );
}

export default HeaderWidget;