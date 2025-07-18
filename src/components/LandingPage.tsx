import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => (
  <section id="contact" className="py-20 bg-pink-100">
    <div className="container mx-auto px-4 max-w-7xl">
      <h3 className="text-3xl font-semibold text-center mb-8">Empowering communication across every stage of life</h3>
      <p className="text-center mb-4">
        At Articulate Allied Health, we are passionate about helping individuals of all ages find their voice and
        thrive in their daily lives. Our dedicated team of speech pathologists offers personalised, evidence-based 
        therapy for both adults and children, delivered in the environments where our clients live, learn, work and play.
      </p>
      <div className={`container max-w-sm bg-pink-950 rounded-full mx-auto px-4 py-2 flex justify-center space-x-6`}>
        <Link to="/about" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">About Us</Link>
      </div>
    </div>
  </section>
);

export default LandingPage;
