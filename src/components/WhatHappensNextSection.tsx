// src/components/WhatHappensNextSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryCard from './DeliveryCard';

import next1Image from '../../assets/next1.png';
import next2Image from '../../assets/next2.png';
import next3Image from '../../assets/next3.png';

const WhatHappensNextSection: React.FC = () => (
  <section id="services" className="py-10 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">What Happens Next?</h3>
      <p className="text-left mb-8">
        We understand that starting speech-pathology is a big step - so we aim to make that process as smooth and supportive as possible. Here's what to expect when you begin your
        journey with us.
      </p>
      <div className='grid lg:grid-cols-3 gap-8 md:gap-16 items-start mt-10 group'>
        <DeliveryCard
          imageLink={next1Image} // Use the imported variable here
          title={<>1. Submit an {<Link to="/contact" className='text-blue-300 underline'>enquiry form</Link>}.</>}
          desc='Your journey starts with our simple, online enquiry form. This helps us gather some initial details about your needs.'
        />
        <DeliveryCard
          imageLink={next2Image} // Use the imported variable here
          title='2. Initial consultation.'
          desc="We'll schedule an initial online consultation. During this session, we'll get to know you, discuss concerns, gather relevant history and explain how we can help."
        />
        <DeliveryCard
          imageLink={next3Image} // Use the imported variable here
          title='3. Assessment and intervention.'
          desc="Following the consultation we may recommend a formal assessment to better understand strengths and areas for support. Based on the results, we'll create an individualised therapy plan tailored to your goals."
        />
      </div>
    </div>
  </section>
);

export default WhatHappensNextSection;