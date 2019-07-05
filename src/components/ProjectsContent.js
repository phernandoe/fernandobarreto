import React from 'react';

const ProjectsContent = ({projects}) => (
  <section className='projects center-block'>
    {projects.map( (project, index) => (
      <ul className='list project-list' key={index}>
        <li className='project-item project-title emph' key={project.title}>
          <a className='link' rel="noopener noreferrer" target='_blank' href={project.link}>{project.title}</a>
        </li>
        <li className='project-item project-desc' key={project.desc}>{project.desc}</li>
        <li className='project-item project-tools' key={project.tools}>{project.tools}</li>
      </ul>
    ))}
  </section>
)

export default ProjectsContent;