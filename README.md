# NFT Collection

We have a socket.io connection at the following URL
https://interview-ry.herokuapp.com/

There are 10 unique NFTs that have a constant stream of new bids coming in from
a web socket connection. We will want to display a list of unique NFTs coming
back in our UI.

When we receive the `item` event containing If we already have that NFT in our
state we only want the `PRICE` to update.

###Connect to the web socket and subscribe to the event “item”

The web socket exposes an event called “item” which has JSON for NFT bids. Some
of the data we want to expose is below.

````
socket.on("item", (bid) => {
  const newBid = {
    id: bid.id,
    tokenId: bid.tokenId,
    image: bid.imageUrl,
    favoritesCount: bid.  favoritesCount,
    chain: bid.assetContract.chain,
    owner: bid.creator.address,
    collectionName: bid.collection.name,
    collectionImage: bid.collection.imageUrl,
    price: bid.orderData.bestAsk.usdSpotPrice
  }
});```

Your `localhost` post must be 8000 - `PORT=8000 npm start`

#
#
#

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
````
