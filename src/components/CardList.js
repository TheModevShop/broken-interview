import React, {useEffect} from 'react'
import Card from './Card'

function CardList({bids}) {
  return (
    <div className="card-list">
      {bids.map(bid => {
        return <Card bid={bid} />
      })}
    </div>
  )
}

export default CardList
