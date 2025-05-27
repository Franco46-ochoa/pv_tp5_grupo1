import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/Styles.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

