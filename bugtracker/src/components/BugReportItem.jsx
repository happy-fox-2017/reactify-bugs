import React from 'react';

const BugReportItem = ({
  id,
  desc,
  severity,
  assignedTo,
  status,
  setStatusClosed,
  deleteBug,
}) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
        BugId: ${id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          ${desc}
          <span className="tag is-info">${severity}</span>
          <p>Assigned To: ${assignedTo}</p>
        </div>
        <br />
        <small className="tag is-primary">${status}</small>
      </div>
      <footer className="card-footer">
        <a onClick={() => setStatusClosed(id)} className="is-warning card-footer-item">Close</a>
        <a className="card-footer-item" onClick={() => deleteBug(id)}>Delete</a>
      </footer>
    </div>
  );
};

export default BugReportItem;
