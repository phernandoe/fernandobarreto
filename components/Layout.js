import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import styles from '../styles/style.css';
import data from '../data/data';


const Layout = props => (

  <React.Fragment>

    <Navigation navData={data.navLinks}/>
      <main id='main-content'>{props.children}</main>
    <Footer footerData={data.footerLinks}/>

  </React.Fragment>
  
)

export default Layout;