import React, { Component } from 'react';
import QuoteMachine from './QuoteMachine';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteMachine />
        <Footer />
      </div>
    );
  }
}

export default App;
