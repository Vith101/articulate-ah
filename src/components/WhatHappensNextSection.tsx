import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryCard: React.FC<{ title: React.ReactNode; desc: string; className?: string}> = ({ title, desc, className}) => (
  <div className={"bg-pink-950 text-white p-6 shadow rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100" + className} >
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className='text-left'>{desc}</p>
  </div>
);

const WhatHappensNextSection: React.FC = () => (
  <section id="services" className="py-10 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">What Happens Next?</h3>
      <p className="text-left">
        We understand that starting speech-pathology is a big step - so we aim to make that process as smooth and supportive as possible. Here's what to expect when you begin your
        journey with us.
      </p>
      <div className='grid lg:grid-cols-3 gap-16 items-center'>
        <div className="container max-w-7xl mx-auto px-4">
          <DeliveryCard title={
            <>
              1. Submit an {<Link to="/contact" className='text-blue-300 underline'>enquiry form</Link>}.
            </>
          } desc='Your journey starts with our simple, online enquiry form. This helps us gather some initial details about your needs.'/>
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <DeliveryCard title='2. Initial consultation.' desc="We'll schedule an initial online consultation. During this session, we'll get to know you, discuss concerns, gather relevant history and explain 
            how we can help."/>
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <DeliveryCard title='3. Assessment and intervention.' desc="Follwoing the consultation we may recommed a formal assessment to better understand strengths and areas for support. Based on the results,
            we'll create an individualised therapy plan tailored to your goals." />
        </div>
      </div>
    </div>
  </section>
);

export default WhatHappensNextSection;
