import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    margin: '5px',
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

class SendComponent extends Component {
  state = { 
    sendAddress: null,
    sendAmount: 0,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendCoin = async () => {
    if (this.props.myAddress && this.state.sendAddress) {
      await this.props.web3.eth.sendTransaction({from: this.props.myAddress, to: this.state.sendAddress, value: this.props.web3.utils.toWei(this.state.sendAmount, "ether")});
    }
  };

  render() {
    return (
      <div>
        <TextField
          id="outlined-name"
          label="Address"
          style={styles.container}
          value={this.state.sendAddress}
          onChange={this.handleChange('sendAddress')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Amount"
          style={styles.container}
          value={this.state.sendAmount}
          onChange={this.handleChange('sendAmount')}
          margin="normal"
          variant="outlined"
        />
        <br />
        <Button onClick={this.sendCoin} style={styles.button}>Send ETH</Button>
      </div>
    );
  }
}

export default SendComponent;
