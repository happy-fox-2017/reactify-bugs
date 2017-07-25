import React, {Component} from 'react'

export default class List extends Component {
  render(){
    return (
      <div className='columns'>
        {this.props.bugs.map((bug) => {
          return <div className='column is-4' key={bug.BugId}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                BugId: {bug.bugId}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  {bug.bugDesc}
                  <span className="tag is-info">{bug.bugSev}</span>
                  <p>Assigned To: {bug.bugResp}</p>
                </div>
                <br/>
                <small className="tag is-primary">{bug.bugStat}</small>
              </div>
              <footer className="card-footer">
                <a className="is-warning card-footer-item" onClick={() => this.props.closeBug(bug.bugId)}>Close</a>
                <a className="card-footer-item" onClick={() => this.props.deleteBug(bug.bugId)} >Delete</a>
              </footer>
            </div>
          </div>
        })}
      </div>
    )
  }
}
