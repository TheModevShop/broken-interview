# NFT Collection

We have a socket.io connection at the following URL
https://interview-ry.herokuapp.com/

There are 10 unique NFTs that have a constant stream of new bids coming in from
a web socket connection. We will want to display the 10 unique NFTs coming back
in our UI as a list of Cards.

When we receive the `item` event containing a new bid, and we already have that NFT item in our state, we do not want to add the
card to our UI. In this case, we only want the `PRICE` to update on the existing card.

### Connect to the web socket and subscribe to the event "item"

The web socket exposes an event called “item” which has JSON for NFT bids. Some
of the data we want to expose is below.

Socket Docs:

```
socket.on("item", (bid) => {
  const newBid = {
    id: bid.id,
    tokenId: bid.tokenId,
    image: bid.imageUrl,
    favoritesCount: bid.favoritesCount,
    chain: bid.assetContract.chain,
    owner: bid.creator.address,
    collectionName: bid.collection.name,
    collectionImage: bid.collection.imageUrl,
    price: bid.orderData.bestAsk.usdSpotPrice
  }
});
```

We understand not everyone has worked with web sockets before. You can think of
`socket.on('some_event', (data) => {})` as if it were an event listener like so
`window.addEventListener('resize', reportWindowSize);`


The creative challenge: Lets design a grid of cards that match the image below

<img width="376" alt="Fine Cats" src="https://user-images.githubusercontent.com/1517775/173403240-384c3d06-7878-4c04-a1da-5af2041228be.png">


---



# Getting Started with Create React App

NOTE: Your `localhost` post must be 8000 - `PORT=8000 npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.
