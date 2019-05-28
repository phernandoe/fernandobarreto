import React, { Component } from 'react';

class HeroLine extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <React.Fragment>
          <svg width="270" height="7">
               <line x1="0" y1="0" x2="270" y2="0"/>
          </svg>
     </React.Fragment>
    );
  }
}

export default HeroLine;
