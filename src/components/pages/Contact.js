import React, { Component } from 'react';
import { Formik } from 'formik';
import HeroLine from '../HeroLine';

class Contact extends Component {
  //Render lifecycle method
  render(){
    //This is JSX - Javascript to render in the browser. HTML/JS Hybrid
    return (
     <div className="content">
          <h1>Let's chat!</h1>
          <HeroLine />
     </div>
    );
  }
}

export default Contact;
