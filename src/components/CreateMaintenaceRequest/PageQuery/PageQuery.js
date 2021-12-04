import React from 'react';
import './PageQuery.css';

function PageQuery(props) {
  return (
    <div className="query">

        <div className="title">

          <p>

            {props.title}

          </p>

        </div>
        
        <div className="content">

            {props.children}

        </div>

    </div>

  );
}

export default PageQuery;