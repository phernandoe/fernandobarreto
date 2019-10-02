import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import PageTitle  from '../components/PageTitle';

const Contact = () => (

  <Layout>

    <section className='section'>

    <PageTitle title='Contact' />

      <Header title="Let's Chat!" />
      <hr />
      <section className='center-block'>
        <ContactForm />
      </section>

    </section>

  </Layout>

)

export default Contact;