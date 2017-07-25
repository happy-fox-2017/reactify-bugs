import React, { Component } from 'react';
import Footer from './Component/Footer';
import Header from './Component/Header';
import BugsForm from './Component/BugsForm';
import ListBugs from './Component/ListBugs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BugsForm />
        <ListBugs />
        <Footer />
      </div>
    );
  }
}

export default App;
