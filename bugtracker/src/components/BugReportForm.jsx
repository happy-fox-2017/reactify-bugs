import React, { Component } from 'react';
import Chance from 'chance';

class BugReportForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      severity: 'low',
      assignedTo: '',
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  submitForm(event) {
    event.preventDefault();

    const chance = new Chance();

    const bug = {
      id: chance.string(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: 'Open',
    };

    let bugs = [];
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'));
    }
    bugs.push(bug);
    localStorage.setItem('bugs', JSON.stringify(bugs));

    this.setState({
      description: '',
      severity: 'low',
      assignedTo: '',
    });
  }

  render() {
    return (
      <form
        action=""
        id="bugInputForm"
        onSubmit={event => this.submitForm(event)}
      >
        <label className="label" htmlFor="">Description</label>
        <p className="control">
          <input
            className="input"
            type="text"
            name="description"
            onChange={event => this.handleInputChange(event)}
            placeholder="Describe a bug..."
            value={this.state.description}
          />
        </p>
        <label className="label" htmlFor="">Severity</label>
        <p className="control">
          <span className="select">
            <select
              name="severity"
              onChange={event => this.handleInputChange(event)}
              value={this.state.severity}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </span>
        </p>
        <label className="label" htmlFor="">Assigned To</label>
        <p className="control">
          <input
            name="assignedTo"
            className="input"
            type="text"
            onChange={event => this.handleInputChange(event)}
            value={this.state.assignedTo}
            placeholder="Enter responsible..."
          />
        </p>
        <div className="control is-grouped">
          <p className="control">
            <button className="button is-warning">Submit</button>
          </p>
        </div>
      </form>
    );
  }

}

export default BugReportForm;