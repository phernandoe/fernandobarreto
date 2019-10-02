import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ProjectsContent from '../components/ProjectsContent';
import PageTitle  from '../components/PageTitle';

import data from '../data/data';

const Projects = () => (

  <Layout>

    <PageTitle title='Projects' />

    <section className='section'>

      <Header title='Things I Do' />
      <hr />
      <ProjectsContent projects={data.projects} />
    </section>

  </Layout>

)

export default Projects;