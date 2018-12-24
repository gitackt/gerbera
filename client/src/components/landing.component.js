import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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

class LandingComponent extends Component {
  render() {
    return (
      <div style={styles.background}>
        <h1>landing</h1>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button style={styles.button}>Login</Button>
        </Link>
      </div>
    );
  }
}

export default LandingComponent;
