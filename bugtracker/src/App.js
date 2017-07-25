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
      bugs: JSON.parse(localStorage.getItem('bugs')) || []
    }
  }

  render() {
    let bugs = this._getBugs();

    return (
      <div>
        <div className="container">
          <Header />
          <Form submitBug={this._updateBug.bind(this)} />
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
          description={bug.description} severity={bug.severity} status={bug.status} assignedTo={bug.assignedTo} id={bug.id} key={bug.id} deleteBug={this._deleteBug.bind(this)} setStatusClosed={this._setStatusClosed.bind(this)}/>
      );
    })
  }

  _updateBug(bugs) {
    this.setState({bugs: bugs})
  }

  _deleteBug(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))

    let newBug = JSON.parse(localStorage.getItem('bugs'))
    this._updateBug(newBug)
  }

  _setStatusClosed(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))

    let newBug = JSON.parse(localStorage.getItem('bugs'))
    this._updateBug(newBug)
  }

}

export default App;
