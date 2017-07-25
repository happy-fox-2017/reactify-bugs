import React, { Component } from 'react';
import BugReportItem from './BugReportItem';

class BugReportList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: [],
    };
  }

  componentDidMount() {
    const bugs = JSON.parse(localStorage.getItem('bugs')) || [];
    this.setState({
      bugs,
    });
  }

  render() {
    const listItems = this.state.bugs.map((bug) => {
      return (
        <BugReportItem desc={bug.description} />
      );
    });

    return (
      <div className="column is-medium" id="listBugs">
        {listItems}
      </div>
    );
  }
}

export default BugReportList;
