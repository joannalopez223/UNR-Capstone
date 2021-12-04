import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

import NavigationLink from './NavigationLink/NavigationLink';

const Navigation =() => {
  return (

    <div className="navigation">

        <div class="logo">
            <img src="/images/opfElement.png"/>
        </div>

      
        <div className="links">

        <NavLink  to = '/dashboard'> <NavigationLink active={false} label="Dashboard"></NavigationLink>  </NavLink>
        <NavLink to = '/viewmaintenancerequest'>  <NavigationLink active={true} label="View Maintenance Request"></NavigationLink> </NavLink>
        <NavLink to = '/createmaintenancerequest'>  <NavigationLink active={false} label="Create New Maintenance Request"></NavigationLink> </NavLink>
        <NavLink to = '/feedback'>  <NavigationLink active={false} label="Feedback"></NavigationLink> </NavLink>
                
        </div>
      

    </div>

  );
}

export default Navigation;