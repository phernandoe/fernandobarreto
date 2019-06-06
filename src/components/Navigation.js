import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (

      <div className="nav-container">

        <Link className="nav-links logo-link" to="/">
          <div className="logo-container">
            <p className="logo clickable">Fernan<br />do Ba<br />rreto</p>
          </div>
        </Link>

        <nav>
          <Link className="nav-links clickable" to="/skills">Skills</Link>
          <Link className="nav-links clickable" to="/projects">Projects</Link>
          <Link className="nav-links clickable" to="/contact">Contact</Link>

        </nav>

      </div>
    );
  }
}

export default Navigation;
