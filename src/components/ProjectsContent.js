import React from 'react';

const ProjectsContent = ({projects}) => (
  <section className='projects center-block'>
    {projects.map( (project) => (
      <div className='project'>

        <div className='project-header'>
          <h3 className='project-title emph'>
            <a className='link' rel="noopener noreferrer" target='_blank' href={project.link}>{project.title} &#8599;</a>
          </h3>
          <p className='project-desc'>
            {project.desc}
          </p>
        </div>

        <div className='project-tools'>
          <h4 className='tools-header'>Tech</h4>
          <p className='tools'>{project.tools}</p>
        </div>

      </div>
    ))}
  </section>
)

export default ProjectsContent;