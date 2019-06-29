import React from 'react';

const SkillsContent = ({skills}) => (
  <React.Fragment>
    {Object.values(skills).map( (skill, index) => (
      <ul key={index}>
        <li key={skill.title}>{skill.title}</li>
        {skill.items.map( item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ))}
  </React.Fragment>
);

export default SkillsContent;