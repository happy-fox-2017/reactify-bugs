import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './style.css';
import BugReportPage from './components/BugReportPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BugReportPage />
      </div>
    );
  }
}

export default App;
