import React, { Component } from 'react';
import HeroLine from '../HeroLine';

class Skills extends Component {

     constructor(props) {
          super(props);
          this.languages = ["Python", "Javascript", "Java", "HTML", "CSS"];
          this.designTools = ["Illustrator", "Photoshop", "Indesign"];
     }

     createListItems(list) {
          return list.map((item) => <li>{item}</li>);
     }

     //Render lifecycle method
     render() {
          //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
          return (
               <div className="content">
                    <h1>Skills</h1>
                    <HeroLine />
                    <div className="skills-lists">
                         <ul>
                              <li>Languages</li>
                              {this.createListItems(this.languages)}
                         </ul>

                         <ul>
                              <li>Design</li>
                              {this.createListItems(this.designTools)}
                         </ul>
                    </div>
               </div>
          );
     }
}

export default Skills;
