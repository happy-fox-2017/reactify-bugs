import React from 'react'
import bulma from 'bulma/css/bulma.css'

var Chance = require('chance'),
    chance = new Chance();

class Form extends React.Component {
  render () {
    const style = {
      margin: {
        marginLeft: '180px',
        marginRight: '180px',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        textAlign: 'left'
      },
      button: {
        marginTop: '10px'
      }
    }
    return (
      <div className="container" >
        <section className="hero is-medium">
          <div className="hero-body" style={style.margin}>
            <h2 className="title">Add New Bug Report:</h2>
            <form action="" id="bugInputForm">
              <label className="label">Description</label>
              <p className="control">
                <input className="input" type="text" id="description" placeholder="Describe a bug..."></input>
              </p>
              <label className="label">Severity</label>
              <p className="control">
                <span className="select">
                  <select id="severity" name="severity">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label">Assigned To</label>
              <p className="control">
                <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..."></input>
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button style={style.button} className="button is-warning" onClick={this.handleClickSubmit}>
                    Submit
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }

  handleClickSubmit = () => {
    const bug = {
      id:chance.guid(),
      description: document.getElementById('description').value,
      severity: document.getElementById('severity').value,
      assignedTo: document.getElementById('assignedTo').value,
      status: 'Open'
    }
    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))
    console.log(bugs);
  }
}

export default Form
