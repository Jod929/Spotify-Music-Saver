import React, { Component } from 'react';

class AddTickers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({
      [e.target.name]: value
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTicker(this.state);
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Ticker
            <input onChange={this.handleChange} value={this.state.ticker} name="ticker"></input>
          </label>

          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default AddTickers;