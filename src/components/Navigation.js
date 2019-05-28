import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
      <nav>

        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/">Contact</Link>

      </nav>
    );
  }
}

export default Navigation;
