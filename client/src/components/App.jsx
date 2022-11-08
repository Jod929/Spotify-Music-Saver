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

      let username = response.data[0].username

      if (response.data.length !== 0) {
        this.setState({
          loggedIn: true,
          user: username
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
      console.log('response in addticker APP', response)
    })
    .catch((err) => {
      console.log('err with add ticker')
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
            <Tickers />
          </div>
        )
      }
    }
  }
}

export default App;