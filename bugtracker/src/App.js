import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import Title from './components/Title.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Title />
        <Footer />
        <Form />
      </div>
    );
  }
}

export default App;
