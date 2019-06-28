import React from 'react';
import Link from 'next/link';

const Footer = props => (
    <footer>
      <ul>

        {props.footerData.map( link => (
            <li key={link.name}>
              <Link href={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
        ))}

      </ul>

      <p>
        Made with 🍞by
        <Link href="https://www.google.com/"> 
          <a> Fernando</a>
        </Link>
      </p>

    </footer>
)

export default Footer;