import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar.js";
import HomePage from './components/Home';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import FreeQuoteForm from './components/FreeQuoteForm'; 
import Modal from './components/Modal'; 
import whatsapp from "./images/whatsapp-v1.png"


function App() {
  const [showFixedButtons, setShowFixedButtons] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowFixedButtons(true);
      } else {
        setShowFixedButtons(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleQuoteClick = () => {
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
      <Footer />

      {showFixedButtons && (
        <div className="fixed-buttons">
          <a href="https://wa.me/yourwhatsappnumber" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" className='whats'/> Chat with us
          </a>
          <a className="quote-button" onClick={handleQuoteClick}>
            Get Free Quote
          </a>
        </div>
      )}

      <Modal show={showModal} onClose={handleCloseModal}>
        <FreeQuoteForm />
      </Modal>
    </div>
  );
}

export default App;
