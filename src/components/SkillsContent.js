import React from 'react';

const SkillsContent = ({skills}) => (
  <section className='skills'>
    {Object.values(skills).map( (skill, index) => (
      <ul className='list skill-list' key={index}>
        <li className='skill-list-item skill-list-title emph' key={skill.title}>{skill.title}</li>
        {skill.items.map( item => (
          <li className='skill-list-item' key={item}>{item}</li>
        ))}
      </ul>
    ))}
  </section>
);

export default SkillsContent;