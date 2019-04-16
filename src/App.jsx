import React, { Component } from 'react';
import Header from './Header.jsx'
import Home from './Home.jsx'
import Resume from './Resume.jsx';
import JobCareer from './JobCareer.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    const { route } = this.props;
    // if(route){console.log(route)}
    return (

      <div className="App">
        <Header {...this.props} />
        { route === 'home' ? <Home  {...this.props} /> : ''}
        { route === 'resume' ? <Resume  {...this.props} /> : ''}
        { route === 'job_career' ? <JobCareer  {...this.props} /> : ''}
        <Footer  {...this.props} />
      </div>
    );
  }
}

export default App;
