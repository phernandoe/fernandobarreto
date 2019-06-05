import React, { Component } from 'react';

class Landing extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Fernando <span className="mobileLineBreak">Barreto</span></h1>
          <hr />
          <h2>Web <span className="mobileLineBreak">Developer</span></h2>
     </div>
    );
  }
}

export default Landing;
