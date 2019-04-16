import React, { Component } from 'react';
import Header from './Header.jsx'
import Home from './Home.jsx'
import Resume from './Resume.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    const { route } = this.props;
    if(route){console.log(route)}
    return (

      <div className="App">
        <Header />
        { route == 'home' ? <Home /> : ''}
        { route == 'resume' ? <Resume /> : ''}
        <Footer />
      </div>
    );
  }
}

export default App;
