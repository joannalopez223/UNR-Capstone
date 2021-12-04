import React from 'react';
import './CurrentUser.css';

function CurrentUser(props) {
  return (

    <div className="user">

        <div className="profile_picture">

            <img src={props.picture}/>

        </div>
        <div className="profile_name">

            <p>

                Welcome, <span>{props.name}</span>

            </p>

        </div>

    </div>

  );
}

export default CurrentUser;