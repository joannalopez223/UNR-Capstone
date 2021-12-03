import React from 'react';
import './Navigation.css';
import NavigationLink from './components/NavigationLink/NavigationLink';

function Navigation(props) {
  return (

    <div className="navigation">

        <div class="logo">

            <img src="/images/opfElement.png"/>

        </div>
        <div className="links">

            <NavigationLink active={false} label="Dashboard"></NavigationLink>
            <NavigationLink active={true} label="View Maintenance Request"></NavigationLink>
            <NavigationLink active={false} label="Create New Maintenance Request"></NavigationLink>
            <NavigationLink active={false} label="Feedback"></NavigationLink>
                
        </div>

    </div>

  );
}

export default Navigation;