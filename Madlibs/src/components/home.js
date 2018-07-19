import React, { Component } from 'react';

import Header from './header';
import card from './card';

 class home extends Component {
  render() {
    return (
      <div className="home">
        { Header()}
        <card />
      </div>
    );
  }
}
// things to fix
//placeholder
//gray and green labels
//generate btn space
//content labels

export default home;