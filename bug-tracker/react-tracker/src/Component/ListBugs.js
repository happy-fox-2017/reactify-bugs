import React, { Component } from 'react'

class ListBugs extends Component {
    constructor () {
        super ()
        this.state = {
            bugs: []
        }
    }

    componentDidMount () {
        let bugs = this.fetchBugs()
        this.setState({bugs: bugs})
    }

    setClosedStatus (id) {
        let bugs = JSON.parse(localStorage.getItem('bugs'))
        let updatedBug = bugs.map((bug) => {
            if(bug.id === id){
                bug.status = 'close'
            }
            return bug
        })
        localStorage.setItem('bugs', JSON.stringify(updatedBug))
        this.fetchBugs()
    }

    fetchBugs () {
        return JSON.parse(localStorage.getItem('bugs')) || []
    }

    deleteBug (id) {
        let bugs = JSON.parse(localStorage.getItem('bugs'))
        let deleteBug = bugs.filter((bug) => {
            return bug.id !== id
        })
        localStorage.setItem('bugs', JSON.stringify(deleteBug))
        this.fetchBugs()
    }

    render () {
        return (
            <div>
                <div className="columns">
                    {this.state.bugs.map((bug, index) => {
                    return <div key={index} className="column is-medium" id="ListBugs">
                        <div className="card">
                            <header className="card-header">
                                Bug Id: {bug.id}
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {bug.description}
                                </div>
                                <span className="tag is-info">{bug.severity}</span>
                                <p>Assigned To :  {bug.assignedTo}</p>
                                <br />
                                <small className="tag is-primary">{bug.status}</small>
                            </div>
                            <footer className="card-footer">
                                <a onClick={() => {this.setClosedStatus(bug.id)}} className="is-warning card-footer-item">Close</a>
                                <a onClick={() => {this.deleteBug(bug.id)}} className="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default ListBugs;