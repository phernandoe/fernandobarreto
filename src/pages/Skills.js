import React from 'react';

import Header from '../components/Header';
import Layout from '../components/Layout';
import SkillsContent from '../components/SkillsContent';

import data from '../data/data';

const Skills = () => (

  <Layout>

    <section className='section skills'>

      <Header title='Things I Know' />
      <hr />
      <SkillsContent skills={data.skills}/>
    </section>

  </Layout>

)

export default Skills;