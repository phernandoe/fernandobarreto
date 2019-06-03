import React, { Component } from 'react';

class Skills extends Component {

     constructor(props) {
          super(props);
          this.languages = ["Python", "Javascript", "Java", "HTML", "CSS"];
          this.designTools = ["Illustrator", "Photoshop", "Indesign"];
     }

     createListItems(list) {
          return list.map((item) => <li key={item.toString()}>{item}</li>);
     }

     //Render lifecycle method
     render() {
          //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
          return (
               <div className="content">
                    <h1>Things I know<span className="emoji" role="img" aria-label="hand wave"> 🤔</span></h1>
                    <hr />
                    <div className="skills-lists">
                         <ul className="skill-list"> 
                              <li>Languages</li>
                              {this.createListItems(this.languages)}
                         </ul>

                         <ul className="skill-list">
                              <li>Design</li>
                              {this.createListItems(this.designTools)}
                         </ul>
                    </div>
               </div>
          );
     }
}

export default Skills;
