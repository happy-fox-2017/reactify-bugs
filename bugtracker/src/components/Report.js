import React from 'react'

const Report = (props) => {
  let bugs = JSON.parse(localStorage.getItem('bugs')) || []
  return (
    <div className="columns">
      <div className="column is-medium" id="listBugs">
      {
        bugs.map(bug => {
          return (
            <div className="card" key={bug.id}>
              <header className="card-header">
                <p className="card-header-title">
                BugId: {bug.id}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  {bug.description}
                  <span className="tag is-info">{bug.severity}</span>
                  <p>Assigned To: {bug.assignedTo}</p>
                </div>
                <br></br>
                <small className="tag is-primary">{bug.status}</small>
              </div>
              <footer className="card-footer">
              </footer>
              <br></br>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}


export default Report