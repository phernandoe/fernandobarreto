import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/pages/Landing';
import Navigation from './components/Navigation';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import './App.css';

class App extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (

      <Router>

        <div className="start">

          <Navigation />

            <React.Fragment>
              <div className="hero">
                <Route exact path="/" component={Landing} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
              </div>
            </React.Fragment>

        </div>
      </Router>
      
    );
  }
}

export default App;
