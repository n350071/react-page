import React, { Component } from 'react';
import Header from './Header.jsx'
import Home from './Home.jsx'
import Resume from './Resume.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render() {
    const { route } = this.props;
    return (

      <div className="App">
        <Header {...this.props} />
        { route == 'home' ? <Home  {...this.props} /> : ''}
        { route == 'resume' ? <Resume  {...this.props} /> : ''}
        <Footer  {...this.props} />
      </div>
    );
  }
}

export default App;
