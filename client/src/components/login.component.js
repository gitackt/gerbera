import React, { Component } from "react";
import SendComponent from './send.component';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import "../App.css";

const styles = {
  background: {
    width: '100%',
  },
  button: {
    height: '50px',
    width: '200px',
    marginTop: '50px',
    marginBottom: '100px',
    borderRadius: '10px',
    background: '#eb346b',
    color: 'white',
  },
}

class LoginComponent extends Component {

  render() {
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <SendComponent myAddress={this.props.accounts} web3={this.props.web3} />

        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button style={styles.button}>Login</Button>
        </Link>
      </div>
    );
  }
}

export default LoginComponent;
