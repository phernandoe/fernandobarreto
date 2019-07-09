import React from 'react';

const ProjectsContent = ({projects}) => (
  <section className='projects center-block'>
    {projects.map( (project) => (
      <div className='project'>
        <h3 className='project-title emph'>
          <a className='link' rel="noopener noreferrer" target='_blank' href={project.link}>{project.title} &#8599;</a>
        </h3>
        <p className='project-desc'>
          {project.desc}
        </p>
        <h4>Tech</h4>
        <p className='project-tools'>{project.tools}</p>
      </div>
    ))}
  </section>
)

export default ProjectsContent;