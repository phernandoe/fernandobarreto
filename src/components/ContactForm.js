import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({values, errors, touched, handleSubmit}) => (
  <Form>
    <label>
      Name
      <Field name="author" type="text" placeholder="Name" />
      { touched.author && errors.author && <p>{errors.author}</p> }
    </label>

    <label>
      Email
      <Field name="email" type="email" placeholder="example@me.com" />
      { touched.email && errors.email && <p>{errors.email}</p> }
    </label>

    <label>
      Subject
      <Field name="subject" type="text" placeholder="Subject" />
      { touched.subject && errors.subject && <p>{errors.subject}</p> }
    </label>

    <label>
      Message
      <Field name="body" component="textarea" placeholder="Type in your message here" />
    </label>
    
    <button type="submit">Send</button>
  </Form>
)

const WithFormikContact = withFormik({
  mapPropsToValues( {email, author, subject, body} ) {
    return {
      author: author || '',
      email: email || '',
      subject: subject || '',
      body: body || '' 
    }
  },
  validationSchema: Yup.object().shape({
    author: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    subject: Yup.string().required('Subject is required')
  }),
  handleSubmit(values, {resetForm}) {
    //This is where the email will get sent
    console.log("Submitted!");
    resetForm();
  }
})(ContactForm);

export default WithFormikContact;
