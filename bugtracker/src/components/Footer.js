import React from 'react'

class Footer extends React.Component {
  render() {
    const styleFooter = {
      backgroundColor: 'whitesmoke',
      padding: '3rem 1.5rem 6rem',
      marginTop: '170px'
    }
    return (
      <div className="Footer" style={styleFooter}>
        <h5>HACKTIV8 Footer</h5>
      </div>
    )
  }
}

export default Footer
