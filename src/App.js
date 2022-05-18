import './App.css'
import React, {useState, useEffect} from 'react'
import CardList from './components/CardList'
import Modal from './components/Modal'
import SubmitBid from './components/SubmitBid'
import {io} from 'socket.io-client'
var socket = io('https://interview-ry.herokuapp.com/')

function App() {
  const [bids, setBids] = useState([])
  const [newBid, setNewBid] = useState(false)
  useEffect(() => {
    socket.on('item', bid => {
      setBids([
        {
          id: bid.id,
          tokenId: bid.tokenId,
          image: bid.imageUrl,
          favoritesCount: bid.favoritesCount,
          chain: bid.assetContract.chain,
          owner: bid.creator.address,
          collectionName: bid.collection.name,
          collectionImage: bid.collection.imageUrl,
          price: bid.orderData.bestAsk.usdSpotPrice,
        },
      ])
    })
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h3>Header</h3>
        <button>Add Bid</button>
      </div>
      <div className="collection">
        <CardList bids={bids} />
      </div>

      <Modal open={!!newBid} />
    </div>
  )
}

export default App
