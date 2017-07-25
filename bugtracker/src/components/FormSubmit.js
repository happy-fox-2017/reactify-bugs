import React from 'react'

export default class FormSubmit extends React.Component {
  constructor() {
    super()
    this.state = {
      newBug: {
        desc: "",
        severity: "low",
        assignedTo: ""
      }
    }
  }

  render (props) {
    return (
      <div>
        <br />
        <h4 className="title is-1">Add New Bug Report</h4>
        <br/>
        <form>
          <div className="field">
            <p className="label">Description</p>
            <input type="text" id="desc" className="input" placeholder="Describe a bug..." onChange={(e) => this.modelDesc(e)}/>
            <br/>
          </div>
          <div className="field">
            <p className="label">Severity</p>
            <h1>{this.state.newBug.severity}</h1>
            <div className="select">
              <select id="severity" onChange={(e) => this.modelSeverity(e)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">Severe</option>
              </select>
            </div>
          </div>
          <div className="field">
            <p className="label" onChange={(e) => this.modelAssignedTo(e)}>Assigned To</p>
            <input type="text" id="assignedTo" className="input" placeholder="Enter responsible..." />
          </div>
          <div className="field">
            <button className="button is-warning" onClick={(ev) => this.props.submitBug(this.state.newBug, ev)}>Submit</button>
          </div>
        </form>
      </div>
    )
  }

  modelDesc(e) {
    this.setState({
      newBug: {
        desc: e.target.value
      }
    })
  }

  modelSeverity(e) {
    console.log(e.target.value);
    this.setState({
      newBug: {
        severity: e.target.value
      }
    })
  }

  modelAssignedTo(e) {
    this.setState({
      newBug: {
        assignedTo: e.target.value
      }
    })
  }

}
