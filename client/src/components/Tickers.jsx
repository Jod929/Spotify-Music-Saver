import React from 'react';

const Tickers = (props) => (
  props.tickers.map((ticker) => {
    return (
      <div>
        <h1>NAME: {ticker.name}</h1>
        <p>BID: {ticker.bid}</p>
        <p>ASK: {ticker.ask}</p>
        <p>HIGH: {ticker.high}</p>
        <p>LOW: {ticker.low}</p>
      </div>
    )
  })
)

export default Tickers;