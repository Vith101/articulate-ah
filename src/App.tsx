import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import DeliveryModesSection from './components/DeliveryModesSection';
import WhatHappensNextSection from './components/WhatHappensNextSection';
import ServicesPage from './components/ServicesPage';
import FeesSection from './components/FeesSection';
import SupervisionSection from './components/SupervisionSection';
import PreeschoolSection from './components/PreeschoolSection';
import PolicySection from './components/PolicySection';
import FAQs from './components/FAQs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col font-sans text-gray-800 min-h-screen">
        <Header />
        <main className='bg-pink-100 flex-grow'>
          <HeroSection />
          <Routes>
            <Route path="/about" element={<AboutSection />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fees" element={<FeesSection />} />
            <Route path="/supervision" element={<SupervisionSection />} />
            <Route path="/preschoolScreeners" element={<PreeschoolSection />} />
            <Route path="/policy" element={<PolicySection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/" element={
              <>
                <LandingPage />
                <ServicesSection />
                <div className={`container max-w-sm bg-pink-950 rounded-full mx-auto px-4 py-2 flex justify-center space-x-6`}>
                  <Link to="/services" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">Our services</Link>
                </div>
                <DeliveryModesSection />
                <WhatHappensNextSection />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
