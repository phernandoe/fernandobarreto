import React from 'react';

const Footer = props => (
    <footer className='footer'>
      <ul className='list center-block'>

        {props.footerData.map( link => (
            <li key={link.name}>
              <a className='link list-link' href={link.link} rel="noopener noreferrer" target='_blank'>{link.name}</a>
            </li>
        ))}

      </ul>

      {/* <p className='center-block'>
        Made with
        <span role='img' aria-label='bread'> 🍞</span>
        by
        <a className='link' target='_blank' rel="noopener noreferrer" href="https://github.com/phernandoe"> Fernando</a>
      </p> */}

    </footer>
)

export default Footer;