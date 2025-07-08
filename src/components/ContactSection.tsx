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
      <form className="space-y-4">
        <input className="w-full px-4 py-2 border rounded" type="text" placeholder="Your Name" />
        <input className="w-full px-4 py-2 border rounded" type="email" placeholder="Your Email" />
        <textarea className="w-full px-4 py-2 border rounded" rows={4} placeholder="Your Message"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
