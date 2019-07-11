import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

const Contact = () => (

  <Layout>

    <section>

      <title>Fernando Barreto | Contact</title>

      <Header title="Let's Chat!" />
      <hr />
      <section className='center-block'>
        <ContactForm />
      </section>

    </section>

  </Layout>

)

export default Contact;