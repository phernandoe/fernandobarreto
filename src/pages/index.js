import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import PageTitle  from '../components/PageTitle';
import { Link } from 'gatsby';

const Index = () => (

  <Layout>

    <PageTitle title='Home' />

    <section className='section landing'>

      <Header title='Fernando Barreto' hide='true'/>
      <hr />

      <p className='intro-p'>
        My name is <span className='emph name'>Fernando Barreto</span>. I'm a web developer & designer
        from <span role='img' aria-label='Puerto Rico'>🇵🇷</span> interested in way too many things for my own good.
      </p>

      <p className='intro-p'>
        You can check out some of my <Link className='link emph' to='/Skills'> skills </Link> 
        & 
        <Link className='link emph' to='/Projects'> projects </Link>
        throughout this
        page or contact me via this handy
        <Link className='link emph' to='/Contact'> form</Link>.
      </p>
    </section>

  </Layout>
)

export default Index;