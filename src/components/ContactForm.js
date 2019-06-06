import React, { Component } from 'react';
import { Formik, Form, Field} from 'formik';
import axios from 'axios';
import qs from 'qs';

class ContactForm extends Component {

  render() {
    return (
    <Formik 
    initialValues={{
      "bot-field": "",
      "form-name": "contact",
      author: "",
      email: "",
      subject: "",
      body: ""
    }} validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.author) {
        errors.author = "Required";
      }
      return errors;
    }} onSubmit={values => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(values),
        url: "/"
      };

      try {
        axios(options);
        alert("Message sent!");
      } catch(e){
        alert(e.message);
      }

    }
    } 
    >

      <Form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">

        <Field type="hidden" name="form-name" />
        <Field type="hidden" name="bot-field" />

        <label className="form-field">
          <p>Name</p>
          <Field name="author" type="text"/>
        </label>

        <label className="form-field">
          <p>Email</p>
          <Field name="email" type="email"/>
        </label>

        <label className="form-field">
          <p>Subject</p>
          <Field name="subject" type="text"/>
        </label>

        <label className="form-field">
          <p>Message</p>
          <Field name="body" component="textarea" style={{}}/>
        </label>

        <button id="submit" className="clickable" type="submit"><span role="img" aria-label="mail" className="emoji">☞</span> Send</button>

      </Form>

    </Formik>
    )
  }
}

export default ContactForm;
