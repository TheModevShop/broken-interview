import './App.css'
import React, {useState, useEffect} from 'react'
import CardList from './components/CardList'
import Modal from './components/Modal'
import SubmitBid from './components/SubmitBid'
import {io} from 'socket.io-client'
var socket = io('https://interview-ry.herokuapp.com/')

function App() {
  const [bids, setBids] = useState()
  const [newBid, setNewBid] = useState(false)

  return (
    <div className="App">
      <div className="header">
        <h3>All Bids</h3>
      </div>
      <div className="collection">
        <CardList bids={bids} />
      </div>

      <Modal open={!!newBid}>
        <SubmitBid item={newBid} />
      </Modal>
    </div>
  )
}

export default App
