import React, { Component } from 'react';
import ContactForm from '../ContactForm';

class Contact extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Let's chat! <span className="emoji" role="img" aria-label="hand wave">✋</span></h1>
          <hr />
          <ContactForm />
     </div>
    );
  }
}

export default Contact;
