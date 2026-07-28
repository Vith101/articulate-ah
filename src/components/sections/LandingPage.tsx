import React from 'react';
import { Section, SectionHeading } from '../ui/Section';
import { PillLink } from '../ui/PillLink';

import landing1 from '../../../assets/landing1.png';
import landing2 from '../../../assets/landing2.png';

const LandingPage: React.FC = () => (
  <Section id="landing" padding="lg">
    <div className="container mx-auto px-4 max-w-7xl">
      <SectionHeading mb="mb-8">Empowering communication across every stage of life</SectionHeading>
      <p className="text-center mb-8">
        At Articulate Allied Health, we are passionate about helping individuals of all ages find their voice and
        thrive in their daily lives. Our dedicated team of Speech Pathologists offers personalised, evidence-based
        therapy for both adults and children, delivered in the environments where our clients live, learn, work and play.
      </p>
      <PillLink to="/about">About Us</PillLink>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={landing1} alt="Description for landing image 1" className="max-w-full max-h-[350px]" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={landing2} alt="Description for landing image 2" className="max-w-full max-h-[350px]" />
        </div>
      </div>
    </div>
  </Section>
);

export default LandingPage;
