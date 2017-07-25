/* global chance */
let fetchBugs = () => {
  let bugs = JSON.parse(localStorage.getItem('bugs')) || []
  let listBugsElement = document.getElementById('listBugs')

  listBugsElement.innerHTML = ''

  for(let i = 0; i < bugs.length; i++) {
    let id = bugs[i].id
    let desc = bugs[i].description
    let severity = bugs[i].severity
    let assignedTo = bugs[i].assignedTo
    let status = bugs[i].status

    listBugsElement.innerHTML += `<div class="card">
      <header class="card-header">
        <p class="card-header-title">
        BugId: ${id}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          ${desc}
          <span class="tag is-info">${severity}</span>
          <p>Assigned To: ${assignedTo}</p>
        </div>
        <br>
        <small class="tag is-primary">${status}</small>
      </div>
      <footer class="card-footer">
        <a onclick="setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
        <a class="card-footer-item" onclick="deleteBug('${id}')">Delete</a>
      </footer>
    </div>
      <br>`
  }
}

window.onload = () => {
  fetchBugs()
}

const setStatusClosed = (id) => {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let updatedBugs = bugs.map((item) => {
    if (item.id === id)
      item.status = 'Close'
    return item
  })

  localStorage.setItem('bugs', JSON.stringify(updatedBugs))
  fetchBugs()

}

const deleteBug = (id) => {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let remainingBugs = bugs.filter((item) => {
    return item.id !== id
  })
  localStorage.setItem('bugs', JSON.stringify(remainingBugs))

  fetchBugs()
}
