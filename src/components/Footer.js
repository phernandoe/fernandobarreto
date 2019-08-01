import React from 'react';

const Footer = props => (
    <footer className='footer'>
      <ul className='list right-block'>

        {props.footerData.map( link => (
            <li className='link-container' key={link.name}>
              <a className='link list-link' href={link.link} rel="noopener noreferrer" target='_blank'>{link.name}</a>
            </li>
        ))}

      </ul>

    </footer>
)

export default Footer;