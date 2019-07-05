import React from 'react';
import { Link } from 'gatsby';

const Navigation = props => (
    <nav className='nav' >

      <ul className='list center-block'>

        {props.navData.map( link => (
            <li className='link-container' key={link.name}>
              <Link className='link list-link' to={link.link}>
                {link.name}
              </Link>
            </li>
        ))}

      </ul>

    </nav>
)

export default Navigation;