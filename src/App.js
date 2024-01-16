import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';

const App = () => {
  return (
    <Router>
      <div className='body'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
