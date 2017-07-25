import React from 'react';
import Chance from 'chance';
import Report from './Report'

var chance = new Chance()

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      description: '',
      severity: 'low',
      assignedTo: '',
      status: 'Open'
    }
  }

  submitBug() {
    const bug = {
      id: chance.guid(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo:this.state.assignedTo,
      status: this.state.status
    }

    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))
  }

  setStatusClosed() {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((bug) => {
      if (bug.id === bug.id)
        bug.status = 'Close'
    return bug
    })
  }

  changeBugDesc(event) {
    this.setState({description: event.target.value})
  }

  changeBugSeverity(event) {
    this.setState({severity: event.target.value})
  }

  changeBugAssign(event) {
    this.setState({assignedTo: event.target.value})
  }

  render() {
    return (
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <h2 className="title">Add New Bug Report:</h2>
            <form action="" id="bugInputForm">
              <label className="label" >Description</label>
              <p className="control">
                <input className="input" type="text" id="description" placeholder="Describe a bug..." value={this.state.description} onChange={(event) => this.changeBugDesc(event)}></input>
              </p>
              <label className="label" >Severity</label>
              <p className="control"> {this.state.severity}
                <span className="select">
                  <select id="severity" name="severity" value={this.state.severity} onLoad={(event) => this.changeBugDesc(event)}  onChange={(event) => this.changeBugSeverity(event)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" >Assigned To</label>
              <p className="control">
                <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={this.state.assignedTo} onChange={(event) => this.changeBugAssign(event)}></input>
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning" onClick={() => this.submitBug()}>Submit</button>
                </p>
              </div>
            </form>
          </div>
        </section>

        <br></br>

        <Report />
      </div>
    );
  }
}

export default Main;