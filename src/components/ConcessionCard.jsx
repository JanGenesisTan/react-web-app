import React from 'react'
import './ConcessionCard.css'

const ConcessionCard = ({ concession }) => {
  return (
    <div className="candy-card">
        <img src={concession.canImage} alt="Candy" />
        <div className="candy-card-body">
          <h3>{concession.brand}</h3>
          <hr></hr>
          <p>{concession.descrip.slice(0, 125)+"..."}</p>
        </div>
    </div>
  )
}

export default ConcessionCard;