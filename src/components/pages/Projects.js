import React, { Component } from 'react';

class Projects extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Things <span className="mobileLineBreak">I do<span className="emoji" role="img" aria-label="hand wave"> 📄</span></span></h1>
          <hr />
          <div className="project-list">
               
               <section>
                    <p> <a href="https://github.com/tobydragon/tecmap" rel="noopener noreferrer" target="_blank" className="clickable project-title">TECMap</a> - NLP, Maven, Java, Web Scraping </p>
                    <p>Worked with a team developing an application written primarily 
                         in Java designed to aid instructors in 
                         designing course curricula.
                    </p>
               </section>

               <section>
                    <p> <a href="https://phernandoe.github.io/CantDecide/" rel="noopener noreferrer" target="_blank" className="clickable project-title">Can't Decide</a> - HTML, CSS, Threejs </p>
                    <p>Small web app that chooses for you</p>
               </section>

               <section>
                    <p> <span className="project-title">Fernando Barreto</span> - React, CSS </p>
                    <p>This portfolio and it's many iterations!</p>
               </section>

          </div>
     </div>         
    );
  }
}

export default Projects;
