import React from 'react';

export default class List extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-medium">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                BugId: {this.props.id}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {this.props.description}&nbsp;
                <span className="tag is-info">{this.props.severity}</span>
                <p>Assigned To: {this.props.assignedTo}</p>
              </div>
              <br/>
              <small className="tag is-primary">{this.props.status}</small>
            </div>
            <footer className="card-footer">
              <a onClick={() => this.props.setStatusClosed(this.props.id)} className="is-warning card-footer-item">Close</a>
              <a onClick={() => this.props.deleteBug(this.props.id)} className="card-footer-item">Delete</a>
            </footer>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}
