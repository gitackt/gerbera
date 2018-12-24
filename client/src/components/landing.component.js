import React, { Component } from 'react';

const styles = {
  background: {
    width: '100%',
  },
}

class LandingComponent extends Component {

  render() {
    return (
      <div style={styles.background}>
        <h1>landing</h1>
      </div>
    );
  }
}

export default LandingComponent;
