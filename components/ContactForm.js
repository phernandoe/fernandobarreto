import React, { useState } from 'react';

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
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name='name' type='text' onChange={handleChange} />
      </label>

      <label>
        Email:
        <input name='email' type='email' onChange={handleChange} />
      </label>

      <label>
        Subject:
        <input name='subject' type='text' onChange={handleChange} />
      </label>

      <label>
        Message:
        <textarea name='message' onChange={handleChange} />
      </label>

      <input type="submit" value="Submit" />

    </form>
  )
}

export default ContactForm;