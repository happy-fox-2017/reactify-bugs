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

  deleteBug(bugId){
    let remainingBugs = this.state.bugs.filter((bug) => {
      return bug.bugId !== bugId
    })
    this.setState({
      bugs: remainingBugs
    })
  }

  closeBug(bugId){
    let updatedBugs = this.state.bugs.map((bug) => {
      if (bug.bugId === bugId) {
        bug.bugStat = 'close'
        return bug
      } else {
        return bug
      }
    })
    this.setState({
      bugs: updatedBugs
    })
  }

  render() {
    return (
      <div className='container'>
        <Title />
        <Footer />
        <Form submitBug={this.submitBug.bind(this)}/>
        <List bugs={this.state.bugs} deleteBug={this.deleteBug.bind(this)} closeBug={this.closeBug.bind(this)}/>
      </div>
    );
  }
}

export default App;
