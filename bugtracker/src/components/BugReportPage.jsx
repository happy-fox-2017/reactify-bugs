import React from 'react';
import BugReportForm from './BugReportForm';
import BugReportList from './BugReportList';

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
        <BugReportList />
      </div>
    </div>
  );
};

export default BugReportPage;
