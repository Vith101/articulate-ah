import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StickyNavbar from './components/StickyNavbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import DeliveryModesSection from './components/DeliveryModesSection';
import WhatHappensNextSection from './components/WhatHappensNextSection';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-gray-800 h-screen">
        <Header />
        <HeroSection />
        <StickyNavbar />
        <Routes>
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/fees" element={<div className='py-20 text-center'><h2 className='text-3xl'>Fees & Rebates Page (Coming Soon)</h2></div>} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/" element={
            <>
              <LandingPage />
              <ServicesSection />
              <DeliveryModesSection />
              <WhatHappensNextSection />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
