import React from 'react';
import Link from 'next/link';

const Footer = () => (
    <footer>
      <ul>

        <li>
          <Link href="https://www.google.com/">
            <a target='blank'>Github</a>
          </Link>
        </li>

        <li>
          <Link href="https://www.google.com/">
            <a target='blank'>Bēhance</a>
          </Link>
        </li>

        <li>
          <Link href="https://www.google.com/">
            <a target='blank'>Linkedin</a>
          </Link>{' '}
        </li>

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