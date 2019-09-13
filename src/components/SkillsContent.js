import React from 'react';

const SkillsContent = ({skills}) => (
  <section className='skills center-block'>
    {Object.values(skills).map( (skill, index) => (

      <div className='skills-container'>

        <h3 className='skill-list-title'>{skill.title}</h3>

        <ul className='list skill-list' key={index}>

          {skill.items.map( item => (
            <li className='skill-list-item' key={item}>{item}</li>
          ))}

        </ul>
    
      </div>

      
    ))}

  </section>
);

export default SkillsContent;