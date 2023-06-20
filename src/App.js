
import './App.css';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Contacts } from './components/Contacts';
import { About } from './components/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from './components/Error';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route caseSensitive={true} path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/outro' element={<Navigate to='/about' />}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
