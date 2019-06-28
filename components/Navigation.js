import React from 'react';
import Link from 'next/link';

const Navigation = props => (
    <nav>

      <ul>

        {props.navData.map( link => (
            <li key={link.name}>
              <Link href={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}

      </ul>

    </nav>
)

export default Navigation;