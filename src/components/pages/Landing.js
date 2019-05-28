import React, { Component } from 'react';
import HeroLine from '../HeroLine';

class Landing extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Fernando Barreto</h1>
          <HeroLine />
          <h2>Web Developer</h2>
     </div>
    );
  }
}

export default Landing;
