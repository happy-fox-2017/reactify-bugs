import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import Title from './components/Title.js'
import Form from './components/Form.js'
import Footer from './components/Footer.js'
import List from './components/List.js'
import Chance from 'chance'

const chance = new Chance()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bugs: []
    }
  }

  submitBug(event, formParams){
    event.preventDefault()
    formParams.bugId = chance.guid()
    this.setState({
      bugs: this.state.bugs.concat([formParams])
    })
  }

  render() {
    return (
      <div className='container'>
        <Title />
        <Footer />
        <Form submitBug={ this.submitBug.bind(this)}/>
        <List bugs={this.state.bugs} />
      </div>
    );
  }
}

export default App;
