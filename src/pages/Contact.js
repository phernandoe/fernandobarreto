import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

const Contact = () => (

  <Layout>

    <section>

      <Header title="Let's Chat!" />
      <hr />
      <ContactForm />

    </section>

  </Layout>

)

export default Contact;