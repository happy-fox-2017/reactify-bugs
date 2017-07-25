import React from 'react'

const BugsList = function(props) {
    return (
      <div>
        {props.bugs.map(x => {
          return <div className="card" key={x.id} style={{marginBottom: 20 + 'px'}}>
            <div className="card-header">
              <p className="card-header-title">Bug ID: {x.id}</p>
            </div>

            <div className="card-content">
              <span className="content">{x.description}</span>
              <span className="tag is-info"> {x.severity} </span>
              <p className="content">Assigned To: {x.assignedTo} </p>
            </div>

            <div className="card-content">
              <span className="tag is-primary">{x.status}</span>
            </div>

            <footer className="card-footer">
              <a className="card-footer-item" onClick={() => props.closeBug(x.id)}>Close</a>
              <a className="card-footer-item" onClick={() => props.deleteBug(x.id)}>Delete</a>
            </footer>
          </div>
        })}
      </div>
    )
  }

export default BugsList
