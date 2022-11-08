import React, { Component } from 'react';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  render() {

    {
      if (!this.state.loggedIn) {
        return (
          <div>
            <Login />
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