import React from 'react';

const Tickers = (props) => (
  props.tickers.map((ticker) => {
    return (
      <div>
        <h1>{ticker.name}</h1>
      </div>
    )
  })
)

export default Tickers;