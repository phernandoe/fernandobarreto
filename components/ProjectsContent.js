import React from 'react';
import Link from 'next/link';

const ProjectsContent = ({projects}) => (
  <React.Fragment>
    {projects.map( (project, index) => (
      <ul key={index}>
        <li key={project.title}>
          <Link href={project.link}> 
            <a target='_blank'>{project.title}</a>
          </Link>
        </li>
        <li key={project.tools}>{project.tools}</li>
        <li key={project.desc}>{project.desc}</li>
      </ul>
    ))}
  </React.Fragment>
)

export default ProjectsContent;