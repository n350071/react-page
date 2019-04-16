import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Resume from './Resume.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/react-page/" component={App} />
      <Route exact path="/react-page/resume" component={Resume} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
