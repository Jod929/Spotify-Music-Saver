import React, { Component } from 'react';
import Login from './Login.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
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
      console.log('res in app', response.data)

      if (response.data.length !== 0) {
        this.setState({
          loggedIn: true
        })
      }
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
      console.log('response from signup', response)
      this.setState({
        loggedIn: true
      })
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
            Logged In
          </div>
        )
      }
    }
  }
}

export default App;