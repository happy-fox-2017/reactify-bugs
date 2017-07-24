import React from 'react';

import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
