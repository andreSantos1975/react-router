import { useState } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Contacts } from './components/Contacts';
import { About } from './components/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from './components/Error';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Reservada } from './components/Reservada';

function App() {

  const [logado] = useState(false)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services/*' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/reserved' element={logado ? <Reservada /> : <Navigate to='/' />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
