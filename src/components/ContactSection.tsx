import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 bg-pink-100">
    <div className="container mx-auto px-4 max-w-lg">
      <h3 className="text-3xl font-semibold text-center mb-8">Contact Us</h3>
      <p className="text-center mb-4">
        Articulate Allied Health - ABN: 52677440729<br />
        PO Box 123, South Yarra, Melbourne VIC Australia
      </p>
      <p className="text-center mb-4">
        Email: <a href="mailto:info@articulateah.com.au" className="text-blue-600 hover:underline">info@articulateah.com.au</a><br />
        Phone: <a href="tel:+61398123456" className="text-blue-600 hover:underline">+61 3 9812 3456</a>
      </p>
      <div className="relative max-w-lg h-screen">
        <iframe 
          src='https://articulate-allied-health.splose.com/public-form/747b15b1-827b-4164-8424-2457c1edf104'
          name='embeddableForm'
          className="absolute top-0 left-0 w-full h-full"
          loading='lazy'
          height={'100%'}
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
