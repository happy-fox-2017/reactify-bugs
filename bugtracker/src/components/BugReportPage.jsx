import React from 'react';
import BugReportForm from './BugReportForm';

const BugReportPage = () => {
  return (
    <div className="container">
      <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <BugReportForm />
        </div>
      </section>

      <hr />

      <div className="columns">
        <div className="column is-medium" id="listBugs"></div>
      </div>
    </div>
  );
};

export default BugReportPage;
