import React from 'react';
import './NavigationLink.css';

function NavigationLink(props) {
  return (

    <div className="link" style={props.active == true ? {background: "#c1cad1"} : {}}>

        <p>

            {props.label}

        </p>
                
    </div>

  );
}

export default NavigationLink;