import React, {useEffect} from 'react'

function Card({bid}) {
  return (
    <div className="card">
      <div className="header">
        <img style={{width: 70, height: 70}} src={bid.collectionImage} />
        <h3>{bid.collectionName}</h3>
      </div>
      <div className="image">
        <img style={{maxWidth: '100%'}} src={bid.image} />
      </div>

      <div className="body">
        <h3>{bid.tokenId}</h3>
        <h3>{bid.price}</h3>
        <h3>{bid.owner}</h3>
      </div>
    </div>
  )
}

export default Card
