import React from 'react';

const ProjectsContent = ({projects}) => (
  <React.Fragment>
    {projects.map( (project, index) => (
      <ul key={index}>
        <li key={project.title}>
          <a rel="noopener noreferrer" target='_blank' href={project.link}>{project.title}</a>
        </li>
        <li key={project.tools}>{project.tools}</li>
        <li key={project.desc}>{project.desc}</li>
      </ul>
    ))}
  </React.Fragment>
)

export default ProjectsContent;