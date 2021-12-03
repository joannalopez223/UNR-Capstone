import React from 'react';
import CurrentUser from './components/CurrentUser/CurrentUser';
import HeaderWidget from './components/HeaderWidget/HeaderWidget';
import './Header.css';

function Header(props) {
  return (

    <div className="header">

        <div className="container">
          <CurrentUser picture="../images/opfElement.png" name="Melissa Flores"></CurrentUser>

          <div className="widgets">

              <HeaderWidget icon="chat_bubble"></HeaderWidget>
              <HeaderWidget icon="account_circle"></HeaderWidget>

          </div>
        </div>

    </div>

  );
}

export default Header;