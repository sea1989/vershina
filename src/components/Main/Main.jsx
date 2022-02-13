import React from 'react';
import './style.css';

import About from '../About/About';
import Projects from '../Projects/Projects';
import Partners from '../Partners/Partners';
import Help from '../Help';

//import LogoDesktop from '../../assets/img/LogoDesktop.png';

export default function Main() {
  return (
    <main>
      <About />
      <Projects />
      <Partners />
      <Help />
    </main>
  );
}
