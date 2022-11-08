import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsername: '',
      loginPassword: '',
      signUpUsername: '',
      signUpPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let value = e.target.value;

    this.setState({
      [e.target.name]: value
    })

  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login(this.state);

  }

  render() {
    return (
      <div>

        <div>
          <h1>Login</h1>

          <form onSubmit={this.handleSubmit}>

            <label>
              Username:
              <input value={this.state.loginUsername} onChange={this.handleChange} name="loginUsername"></input>
            </label>
            <label>
              Password:
              <input value={this.state.loginPassword} onChange={this.handleChange} name="loginPassword"></input>
            </label>

            <input type="submit"></input>

          </form>

        </div>


        <div>
          <h1>Sign Up</h1>

          <form onSubmit={this.handleSubmit}>

            <label>
              Username:
              <input value={this.state.signUpUsername} onChange={this.handleChange} name="signUpUsername"></input>
            </label>
            <label>
              Password:
              <input value={this.state.signUpPassword} onChange={this.handleChange} name="signUpPassword"></input>
            </label>

            <input type="submit"></input>

          </form>
        </div>

      </div>
    )
  }

}

export default Login;