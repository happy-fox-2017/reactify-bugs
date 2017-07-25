import React from 'react';

const BugReportCard = (props) => {
  
  return (
    <div>
    { props.data.map( card => {
      return (
        <div key={card.id}> 
          <h5>{card.id} </h5>
          <h5>{card.description} </h5>
          <h5>{card.severity} </h5>
          <h5>{card.assignedTo} </h5>
          <button onClick={props.deleteCard.bind(this, card.id)}>Delete </button>
          <button>Status </button>
        </div>
        )
    }) 
      
    }
    </div>
  )
}

export default BugReportCard;