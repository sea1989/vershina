import React, { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
//import Modal from './components/Modal/Modal';
function App() {
  //const [modalActive, setModalActive] = useState(true)
  return (
    <div className="App">

      <Header />
      <Main />
      <Footer />
      {/* <Modal active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
}

export default App;
