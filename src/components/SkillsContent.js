import React from 'react';

const SkillsContent = ({skills}) => (
  <section className='skills'>
    {Object.values(skills).map( (skill, index) => (
      <ul className='list skill-list' key={index}>
        <li className='skill-list-item' key={skill.title}>
          <h3 className='skill-list-title emph'>{skill.title}</h3>
        </li>
        {skill.items.map( item => (
          <li className='skill-list-item' key={item}>{item}</li>
        ))}
      </ul>
    ))}
  </section>
);

export default SkillsContent;