import React from 'react';
import Tools from './Tools';

const ProjectsContent = ({projects}) => {

  return (
    <section className='projects center-block'>

      { projects.map( (project) => {

          return (
          
          <div className='project'>

            <h3 className='project-title'>
              <a className='link' rel="noopener noreferrer" target='_blank' href={project.link}>{project.title}</a>
            </h3>

            <div className='project-info'>
              <p className='project-desc'>
                {project.desc}
              </p>

              <Tools tools={project.tools}/>

            </div>
  
          </div>);

        }
      )}
      
    </section>
  )
  
}

export default ProjectsContent;