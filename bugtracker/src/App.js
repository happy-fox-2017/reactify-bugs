import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import ListBug from './components/ListBug'
import Footer from './components/Footer'

class App extends Component {
  render() {
    const css = {
      nav: {
        backgroundColor: 'whitesmoke',
        margin: '10px'
      },
      h1: {
        textAlign: 'center'
      }
    }
    return (
      <div className="App">
        <div className="col-md-8" style={css.satu, css.nav}>
          <h1 style={css.h1}>Bug Tracker by HACKTIV8 </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <Form></Form>
          <ListBug></ListBug>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
