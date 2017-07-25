import React, { Component } from 'react';
import '../App.css';
import BugReportForm from './BugReportForm.js';
import BugReportFooter from './BugReportFooter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Bug Tracker <small>by HACKTIV8</small> </h1>
        <br></br>
        <BugReportForm/>
        <BugReportFooter/>
      </div>
    );
  }
}

export default App;
