import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Resume from './Resume.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class Root extends Component {
  render(){
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
