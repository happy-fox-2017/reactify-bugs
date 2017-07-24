import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super()
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
            <input className='input' type='text' placeholder="Describe a bug..." />
            <label className="label" for="">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" >Assigned To</label>
              <input className="input" type="text" placeholder="Enter responsible..."/>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning">Submit</button>
                </p>
              </div>
          </form>
        </div>
      </div>
    )
  }

  submitBug () {

  }
}
