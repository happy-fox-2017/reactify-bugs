import React from 'react';

import Header from './component/Header';
import Form from './component/Form';
import List from './component/List';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bugs: JSON.parse(localStorage.getItem('bugs'))
    }
  }

  render() {
    let bugs = this._getBugs();

    return (
      <div>
        <div className="container">
          <Header />
          <Form submitBug={this._submitBug.bind(this)} />
          <hr />
          {bugs}
          <Footer />
        </div>
      </div>
    );
  }

  _getBugs() {
    let bugs = this.state.bugs;

    return bugs.map((bug) => {
      return (
        <List
          description={bug.description} severity={bug.severity} status={bug.status} assignedTo={bug.assignedTo} id={bug.id} key={bug.id}/>
      );
    })
  }

  _submitBug(bugs) {
    this.setState({bugs: bugs})
  }

}

export default App;
