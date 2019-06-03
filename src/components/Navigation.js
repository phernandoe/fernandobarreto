import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
      <nav>

        <Link className="nav-links" to="/skills">Skills</Link>
        <Link className="nav-links" to="/projects">Projects</Link>
        <Link className="nav-links" to="/contact">Contact</Link>

      </nav>
    );
  }
}

export default Navigation;
