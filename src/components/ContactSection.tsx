import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 bg-pink-100">
    <div className="container mx-auto px-4 max-w-lg">
      <h3 className="text-3xl font-semibold text-center mb-8">Contact Us</h3>
      
      <div className="mb-4 max-w-lg" style={{ height: '1000px' }}>
        <iframe 
          src='https://articulate-allied-health.splose.com/public-form/747b15b1-827b-4164-8424-2457c1edf104'
          name='embeddableForm'
          className="w-full h-full" 
          loading='lazy'
        />
      </div>
      
      <p className="text-center mb-4">
        Articulate Allied Health - ABN: 52677440729<br />
        PO Box 6030, South Yarra, Melbourne VIC Australia
      </p>
      <p className="text-center mb-4">
        Email: <a href="mailto:info@articulateah.com.au" className="text-blue-600 hover:underline">info@articulateah.com.au</a><br />
      </p>
    </div>
  </section>
);

export default ContactSection;