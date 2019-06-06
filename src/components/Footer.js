import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <footer id="footer">
        <ul className="footer-list">
          <li className="footer-item"><a className="clickable" href="https://github.com/phernandoe" rel="noopener noreferrer" target="_blank">Github</a></li>
          <li className="footer-item"><a className="clickable" href="https://www.behance.net/bFernando" rel="noopener noreferrer" target="_blank">Behance</a></li>
          <li className="footer-item"><a className="clickable" href="https://www.linkedin.com/in/fernando-barreto-696968161/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;