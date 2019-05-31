import React, { Component } from 'react';
import HeroLine from '../HeroLine';

class Projects extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Projects</h1>
          <HeroLine />
          <div className="project-list">
               
               <section>
                    <p> <span className="project-title">TECMap</span> - NLP, Maven, Java, Web Scraping </p>
                    <p>Worked with a team developing an application written primarily 
                         in Java designed to aid instructors in 
                         designing course curricula.
                    </p>
               </section>

               <section>
                    <p> <span className="project-title">Can't Decide</span> - HTML, CSS, Threejs </p>
                    <p>Small web app that chooses for you</p>
               </section>

               <section>
                    <p> <span className="project-title">Fernando Barreto</span> - React, CSS </p>
                    <p>This portfolio and it's many iterations!</p>
               </section>

               <section>
                    <p className="inline-link">Github</p>
               </section>

          </div>
     </div>         
    );
  }
}

export default Projects;
