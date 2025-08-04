import React from 'react';
import { HoverCard } from './HoverCard';

const DeliveryModesSection: React.FC = () => (
  <section id="services" className="py-20 bg-pink-100">
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h3 className="text-3xl font-semibold text-center mb-10">Delivery Methods</h3>
      <div className="container max-w-7xl mx-auto px-4 pb-8">
        <p className="text-left">
          Our community-based model means therapy isn't confined to the clinic - {<span className='font-bold'>we come to you!</span>} We provide home visits, school and childcare support, aged care services and
          telehealth sessions, ensuring our servies are accessible, flexible and tailored to each person's goals. 
        </p>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className="container max-w-7xl mx-auto px-4">
            <HoverCard title='Telehealth' imageLink='/assets/telehealth.png'/>
          </div>
          <div className="container max-w-7xl mx-auto px-4">
            <HoverCard title='Community-based' imageLink='/assets/community-based.png'/>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DeliveryModesSection;
