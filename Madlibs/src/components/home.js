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


export default home;