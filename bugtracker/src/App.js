import React from 'react';

import Header from './component/Header';
import Form from './component/Form';
import List from './component/List';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  render() {
    const bugs = this._getBugs();
    return (
      <div>
        <div className="container">
          <Header />
          <Form />
          <hr />
          {bugs}
          <Footer />
        </div>
      </div>
    );
  }

  _getBugs() {
    let bugs = [];
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'));
    }

    return bugs.map((bug) => {
      return (
        <List
          description={bug.description} severity={bug.severity} status={bug.status} assignedTo={bug.assignedTo} id={bug.id} key={bug.id}/>
      );
    })
  }
}

export default App;
