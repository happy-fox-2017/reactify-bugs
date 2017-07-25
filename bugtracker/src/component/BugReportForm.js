import React from 'react'
import BugReportCard from './BugReportCard.js'

var Chance = require('chance'),
    chance = new Chance();

class BugReportForm extends React.Component {
  constructor () {
    super();
    this.state = {
        description: '',
        severity: '',
        assigned: ''
    }
  }
  
  changeBugDesc (event) {
    this.setState({description: event.target.value})
  }
  
  deleteBug (id, event) {
    let data = JSON.parse(localStorage.getItem('bugs'))
    
    let remainingBugs = data.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
  }
  
  changeBugSeve (event) {
    this.setState({severity: event.target.value})
  }
  
  changeBugAssign (event) {
    this.setState({assigned: event.target.value})
  }
  
  submitLocalStorage (event) {
    let data = this.state;
    const bug = {
      id: chance.guid(),
      description: data.description,
      severity: data.severity,
      assignedTo: data.assigned,
      status: 'Open'
    }
    
    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))
  }
  
  itemBugs () {
    return JSON.parse(localStorage.getItem('bugs'));
  }
  
  render () {
    return (
      <div>
        <h2 className="title">Add New Bug Report:</h2>
        <form action="" id="bugInputForm">
          <label className="label">Description</label>
          <p className="control">
            <input className="input" type="text" id="description" 
            value={this.state.description} 
            onChange={(event) => {this.changeBugDesc(event)}} placeholder="Describe a bug..."/>
          </p>
          <label className="label">Severity</label>
          <p className="control">
            <span className="select">
              <select id="severity" name="severity" value={this.state.severity} onChange={(event) => {this.changeBugSeve(event)}}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </span>
          </p>
          <label className="label">Assigned To</label>
          <p className="control">
            <input className="input" type="text" id="assignedTo" value={this.state.assigned} onChange={(event) => {this.changeBugAssign(event)}} placeholder="Enter responsible..."/>
          </p>
          <div className="control is-grouped">
            <p className="control">
              <button className="button is-warning" onClick = {(event) => {this.submitLocalStorage(event)}}>Submit</button>
            </p>
          </div>
        </form>
        <div>
          { (this.itemBugs()) ? <BugReportCard data={this.itemBugs()} deleteCard={this.deleteBug} /> : null}
        </div>
      </div>
    )
  }
}

export default BugReportForm;