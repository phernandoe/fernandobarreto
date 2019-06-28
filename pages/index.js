import React from 'react';
import styles from '../styles/style.css'

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

import data from '../data/data';

const Index = () => (
  <React.Fragment>

    <Navigation navData={data.navLinks}/>

    <Header title='Fernando Barreto'/>
    
    <hr />

    <Footer footerData={data.footerLinks}/>

  </React.Fragment>
)

export default Index;