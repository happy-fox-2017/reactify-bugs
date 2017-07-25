import React from 'react'

class ListBug extends React.Component {
  constructor() {
    super()
    this.state = {
      bug: []
    }
  }
  getBugs() {
    if (localStorage.bugs !== undefined) {
      JSON.parse(localStorage.bugs).forEach(x => {
        this.state.bug.push(x)
      })
    } else {
      console.log('hai');
    }
  }

  componentWillMount() {
    this.getBugs()
    console.log('hoooo');
  }

  render () {
    var data = this.state.bug
    console.log('my',data);

    const style = {
      form: {
        textAlign: 'center',
        marginLeft: '200px',
        marginRight: '200px'
      },
      p: {
        textAlign: 'center'
      }
    }
    return (
      <div>
        {
          data.map((item) => {
            return (
              <div className="card" key={item.id} style={style.form}>
                <div className="column is-medium" id="listBugs" >
                  <div className="card-header">
                    <p style={style.p}>BugId: {item.id}</p>
                  </div>
                  <div className="card-conitemnt">
                  <div className="conitemnt">
                    <p>description: {item.description}</p>
                    <span className="tag is-info">{item.severity}</span>
                    <p>Assigned To: {item.assignedTo}</p>
                  </div>
                  <small className="tag is-primary">{item.status}</small>
                  </div>
                  <footer className="card-footer">
                    <a onClick= {(id) => {this.close(item.id)}} className="is-warning card-footer-item">Close</a>
                    <a className="card-footer-item" onClick= {(id) => {this.deleteBug(item.id)}}>Delete</a>
                  </footer>
                </div>
              </div>
            )
          })
        }
        </div>

    )
  }

  deleteBug (id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      console.log(id);
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))

  }
  close (id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
  }
}

export default ListBug
