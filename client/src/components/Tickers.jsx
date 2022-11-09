import React from 'react';


class Tickers extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log('clicked', e);
    this.props.delete(e);
  }

  render() {
    return (
      <div>
        {
          this.props.tickers.map((ticker) => {
            return (
              <div>
                <h1>NAME: {ticker.name}</h1>
                <p>BID: {ticker.bid}</p>
                <p>ASK: {ticker.ask}</p>
                <p>HIGH: {ticker.high}</p>
                <p>LOW: {ticker.low}</p>

                <button onClick={() => this.handleClick(ticker.name)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default Tickers;