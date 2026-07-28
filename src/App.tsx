import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Reveal } from './components/ui/Reveal';
import { PillLink } from './components/ui/PillLink';
import PageTransition from './components/ui/PageTransition';
import ContactModal from './components/ui/ContactModal';
import { ContactModalProvider } from './context/ContactModalContext';

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

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fees" element={<FeesSection />} />
          <Route path="/supervision" element={<SupervisionSection />} />
          <Route path="/preschool-screeners" element={<PreeschoolSection />} />
          <Route path="/policy" element={<PolicySection />} />
          <Route path="/policy/:slug" element={<PolicyPage />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App: React.FC = () => (
  <Router>
    <ContactModalProvider>
      <div className="flex flex-col font-sans text-gray-800 min-h-screen">
        <Header />
        <main className="bg-pink-100 flex-grow">
          <HeroSection />
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <ContactModal />
    </ContactModalProvider>
  </Router>
);

export default App;
