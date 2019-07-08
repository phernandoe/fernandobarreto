import React from 'react';

const Header = ({title}) => {

    const index = Math.floor(Math.random() * (title.length/2 - 1) + 1);
    const startTitle = title.substring(0,index);
    const endTitle = title.substring(index+1);

    return (
      <h1 className='section-header'>
        {startTitle}
        <span className='float'>{title[index]}</span>
        {endTitle}
      </h1>
    )
}

export default Header;