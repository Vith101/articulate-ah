import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { Reveal } from './components/ui/Reveal';
import { PillLink } from './components/ui/PillLink';

import HeroSection from './components/sections/HeroSection';
import LandingPage from './components/sections/LandingPage';
import ServicesSection from './components/sections/ServicesSection';
import DeliveryModesSection from './components/sections/DeliveryModesSection';
import WhatHappensNextSection from './components/sections/WhatHappensNextSection';

import AboutSection from './components/pages/AboutSection';
import ServicesPage from './components/pages/ServicesPage';
import FeesSection from './components/pages/FeesSection';
import SupervisionSection from './components/pages/SupervisionSection';
import PreeschoolSection from './components/pages/PreeschoolSection';
import ContactSection from './components/pages/ContactSection';
import FAQs from './components/pages/FAQs';
import PolicySection from './components/pages/PolicySection';
import PolicyPage from './components/pages/PolicyPage';

const HomePage: React.FC = () => (
  <>
    <Reveal>
      <LandingPage />
    </Reveal>
    <Reveal>
      <ServicesSection />
      <PillLink to="/services">Our services</PillLink>
    </Reveal>
    <Reveal>
      <DeliveryModesSection />
    </Reveal>
    <Reveal>
      <WhatHappensNextSection />
    </Reveal>
  </>
);

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <div className="flex flex-col font-sans text-gray-800 min-h-screen">
      <Header />
      <main className="bg-pink-100 flex-grow">
        <HeroSection />
        <Routes>
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fees" element={<FeesSection />} />
          <Route path="/supervision" element={<SupervisionSection />} />
          <Route path="/preschool-screeners" element={<PreeschoolSection />} />
          <Route path="/policy" element={<PolicySection />} />
          <Route path="/policy/:slug" element={<PolicyPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
