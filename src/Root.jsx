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
          {/*<Route exact path="/" component={App} />*/}
          {/*}<Route exact path="/resume" component={Resume} />*/}
          <Route exact path="/" render={props => <App route='home' {...props} />} />
          <Route exact path="/resume" render={props => <App route='resume' {...props} />} />
          <Route exact path="/job_career" render={props => <App route='job_career' {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Root;
