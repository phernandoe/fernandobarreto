import React from 'react';

const Header = ({title, hide}) => {

    const index = Math.floor(Math.random() * (title.length/2 - 1) + 1);
    const startTitle = title.substring(0,index);
    const endTitle = title.substring(index+1);
    let style = {};

    if (hide) style.visibility = 'hidden';

    return (
      <h1 className='section-header' style={style}>
        {startTitle}
        <span className='float'>{title[index]}</span>
        {endTitle}
      </h1>
    )
}

export default Header;