import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

const ContactForm = () => {

  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  const [data, setData] = useState(initialFormData);

  const handleChange = event => {
    const {name, value} = event.target;
    setData({...data, [name]: value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert('Fields must not be empty!');
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify({ 'form-name': 'contact', ...data}),
      url: "/"
    };

    try {
      axios(options).then(
        alert('Message sent!')
      );
    } catch(error) {
      //TODO: Handle Error
      console.log(error);
      alert('There was an error!');
    }

    alert('Message sent!');

    setData(initialFormData);
    console.log(data);
  }

  return (
    <form name="contact" method='post' action='' data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form" onSubmit={handleSubmit}>

      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" onChange={handleChange} />

      <label>
        Name:
        <input name='name' type='text' value={data.name} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input name='email' type='email' value={data.email} onChange={handleChange} />
      </label>

      <label>
        Subject:
        <input name='subject' type='text' value={data.subject} onChange={handleChange} />
      </label>

      <label>
        Message:
        <textarea name='message' value={data.message} onChange={handleChange} />
      </label>

      <input type="submit" value="Submit" />

    </form>
  )
}

export default ContactForm;