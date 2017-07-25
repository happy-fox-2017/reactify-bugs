import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormSubmit from './components/FormSubmit.js'
import BugsList from './components/BugsList.js'
import Bulma from 'bulma/css/bulma.css'
import Chance from 'chance'

class App extends Component {
  constructor() {
    super();
    this.state = {
      bugs: []
    }
  }

  render() {
    let titleStyle = {
      color: "white"
    }

    let contentStyle = {
      "width": "50%",
      margin: "auto"
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="title is-2" style={titleStyle}>Bugtracker by HACKTIV8</h2>
        </div>
        <FormSubmit submitBug={this.submitBug.bind(this)} style={contentStyle}></FormSubmit>
        <hr />
        <BugsList bugs={this.state.bugs} closeBug={this.closeBug.bind(this)} deleteBug={this.deleteBug.bind(this)} style={contentStyle}></BugsList>
      </div>
    );
  }

  closeBug(id) {
    let updatedBugs = this.state.bugs.map(x => {
      if (x.id == id) {
        x.status = "Closed"
        return x
      } else {
        return x
      }
    })
    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
    this.getBugsYo()
  }

  deleteBug(id) {

    let remainingBugs = this.state.bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))

    this.getBugsYo()
  }

  getBugsYo() {
    if (localStorage.bugs != null) {
      this.setState({
          bugs: JSON.parse(localStorage.bugs)
      })
    }
  }

  componentWillMount() {
    this.getBugsYo()
  }

  submitBug(obj, ev) {
    ev.preventDefault()
    const bug = {
        id: new Chance().guid(),
        description: obj.desc,
        severity: obj.severity || "low",
        assignedTo: obj.assignedTo,
        status: "open"
      }

    let bugsNya = []

    if (localStorage.bugs) {
      JSON.parse(localStorage.bugs).forEach(x => {
        bugsNya.push(x)
      })
    }

    bugsNya.push(bug)
    localStorage.setItem("bugs", JSON.stringify(bugsNya))
    this.setState({
        bugs: bugsNya
    })
    // this.getBugsYo()
  }
}

export default App;
