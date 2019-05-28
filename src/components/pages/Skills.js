import React, { Component } from 'react';
import HeroLine from '../HeroLine';

class Skills extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Skills</h1>
          <HeroLine />
          <div className="skills-lists">
               <ul>
                    <li>Langagues</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
               </ul>

               <ul>
                    <li>Design</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Indesign</li>
               </ul>
          </div>
     </div>
    );
  }
}

export default Skills;
