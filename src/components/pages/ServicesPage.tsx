import React from 'react';
import { Reveal } from '../ui/Reveal';
import ServicesSection from '../sections/ServicesSection';
import ServicesWeProvideSection from './ServicesWeProvideSection';

const ServicesPage: React.FC = () => (
  <div className="flex flex-col font-sans text-gray-800 min-h-screen">
    <Reveal>
      <ServicesSection />
    </Reveal>
    <Reveal>
      <ServicesWeProvideSection />
    </Reveal>
  </div>
);

export default ServicesPage;
