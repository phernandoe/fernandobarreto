import React from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import SkillsContent from '../components/SkillsContent';
import PageTitle  from '../components/PageTitle';

import data from '../data/data';

const Skills = () => (

  <Layout>

    <PageTitle title='Skills' />

    <section className='section'>

      <Header title='Things I Know' />
      <hr />
      <SkillsContent skills={data.skills}/>
    </section>

  </Layout>

)

export default Skills;