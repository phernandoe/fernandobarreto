import React from 'react';

const Tools = props => (
  
    <div className='project-tools' >

        {props.tools.map( tool => (
            <div className='project-tool-container' key={tool}>
              <p className='project-tool'>
                {tool}
              </p>
            </div>
        ))}

    </div>
)

export default Tools;