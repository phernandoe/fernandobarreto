import React, { Component } from 'react';
import HeroLine from '../HeroLine';
import WithFormikContact from '../ContactForm';

class Contact extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Let's chat!</h1>
          <HeroLine />
          <WithFormikContact />
     </div>
    );
  }
}

export default Contact;
