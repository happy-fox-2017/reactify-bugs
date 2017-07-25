import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.bugDescChange = this.bugDescChange.bind(this);
    this.bugSevChange = this.bugSevChange.bind(this)
    this.bugRespChange = this.bugRespChange.bind(this)
    this.state = {
      bugDesc: '',
      bugSev: 'low',
      bugResp: '',
      bugStat: 'open',
      bugId: ''
    }
  }

  render () {
    return (
      <div className='hero is-medium'>
        <div className='hero-body'>
          <h2 className='title'>Add New Bug Report</h2>
          <form>
            <label className='label'>
              Description
            </label>
            <input value={this.state.bugDesc} onChange={this.bugDescChange} className='input' type='text' placeholder="Describe a bug..." />
            <label className="label" >Severity</label>
            <p className="control">
              <span className="select">
                <select value={this.state.bugSev} onChange={this.bugSevChange} >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" >Assigned To</label>
              <input value={this.state.bugResp} onChange={this.bugRespChange} className="input" type="text" placeholder="Enter responsible..."/>
              <div className="control is-grouped">
                <p className="control">
                  <button onClick={(event) => this.props.submitBug(event, this.state)} className="button is-warning">Submit</button>
                </p>
              </div>
          </form>
        </div>
      </div>
    )
  }

  bugDescChange(event) {
    this.setState({
      bugDesc: event.target.value
    });
  }

  bugSevChange(event) {
    this.setState({
      bugSev: event.target.value
    })
  }

  bugRespChange(event){
    this.setState({
      bugResp: event.target.value
    })
  }
}
