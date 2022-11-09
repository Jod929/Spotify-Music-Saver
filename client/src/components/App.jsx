import React, { Component } from 'react';
import Login from './Login.jsx';
import AddTickers from './AddTickers.jsx';
import Tickers from './Tickers.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      user: '',
      tickers: []
    }

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.addTicker = this.addTicker.bind(this);
    this.deleteTicker = this.deleteTicker.bind(this);
  }

  login(userInfo) {
    axios({
      method: 'post',
      url: '/login',
      data: {
        userInfo
      }
    })
    .then((response) => {

      let username = response.data[0].username;
      let tickers = response.data[0].tickers;

      if (response.data.length !== 0) {
        this.setState({
          loggedIn: true,
          user: username,
          tickers: tickers
        })
      }
      console.log(this.state);

    })
    .catch((err) => {
      console.log('err with add login')
    })

  }

  signUp(userInfo) {
    console.log('user info in sign uop', userInfo)
    axios({
      method: 'post',
      url: '/signup',
      data: {
        userInfo
      }
    })
    .then((response) => {
      let username = response.data.username;
      console.log('response', response)

      this.setState({
        loggedIn: true,
        user: username
      })
    })
    .catch((err) => {
      console.log('err with signup')
    })
  }

  addTicker(ticker) {

    let user = this.state.user;

    axios({
      method: 'put',
      url: '/addTicker',
      data: {
        ticker,
        user
      }
    })
    .then((response) => {
      let tickers = response.data[0].tickers;

      if (ticker.length !== 0) {
        this.setState({
          tickers: tickers
        })
      }


    })
    .catch((err) => {
      console.log('err with add ticker')
    })
  }

  deleteTicker(ticker) {

    let user = this.state.user;
    let tickerInfo = {
      user,
      ticker
    }

    axios({
      method: 'put',
      url: '/deleteTicker',
      data: tickerInfo
    })
    .then((response) => {
      let tickers = response.data[0].tickers;

      this.setState({
        tickers: tickers
      })
      // console.log('response in delete tiker', response)
    })
  }


  render() {

    {
      if (!this.state.loggedIn) {
        return (
          <div>
            <Login login={this.login} signUp={this.signUp}/>
          </div>
        )
      } else {
        return (
          <div>
            <AddTickers addTicker={this.addTicker}/>
            <Tickers tickers={this.state.tickers} delete={this.deleteTicker}/>
          </div>
        )
      }
    }
  }
}

export default App;