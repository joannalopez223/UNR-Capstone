import React from 'react';
import './StatusButton.css';

function StatusButton(props) {
  return (

    <div className="button">

        <button style={{background: props.color}}>{props.label}</button>

    </div>

  );
}

export default StatusButton;