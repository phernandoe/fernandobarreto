import React from 'react';
import Link from 'next/link';

const ProjectsContent = ({projects}) => (
  <React.Fragment>
    {projects.map( project => (
      <ul>
        <li>
          <Link href={project.link}> 
            <a target='_blank'>{project.title}</a>
          </Link>
        </li>
        <li>{project.tools}</li>
        <li>{project.desc}</li>
      </ul>
    ))}
  </React.Fragment>
)

export default ProjectsContent;