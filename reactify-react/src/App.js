import React, { Component } from 'react';

import './App.css';
import NavBug from './components/NavBug'
import BugForm from './components/BugForm'
import BugList from './components/BugList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBug />
          <BugForm />
          <BugList />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
