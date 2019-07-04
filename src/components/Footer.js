import React from 'react';

const Footer = props => (
    <footer>
      <ul>

        {props.footerData.map( link => (
            <li key={link.name}>
              <a href={link.link} target='_blank'>{link.name}</a>
            </li>
        ))}

      </ul>

      <p>
        Made with <span role='img' aria-label='bread'>🍞</span>by
        <a target='_blank' href="https://github.com/phernandoe"> Fernando</a>
      </p>

    </footer>
)

export default Footer;