import React, {useEffect} from 'react'

function SubmitBid() {
   function submitBid() {
    await fetch('https://interview-ry.herokuapp.com/bid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'QXNzZXRUeXBlOjIzMTM0OTYz',
        price: 100,
      }),
    })
  }

  return (
    <div className="form">
      <input />
      <button onClick={submitBid}>Bid Amount</button>
    </div>
  )
}

export default SubmitBid
