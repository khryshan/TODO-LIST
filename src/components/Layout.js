import React, { Fragment } from 'react';

import './app-style.css';


const Layout = props => (
  <Fragment>
    <div className="app__main-block">
      <div className="container">
        <h1 className="app__header">to do <span>list</span></h1>
          {props.children}
      </div>
    </div>
  </Fragment>  
)

export default Layout;

