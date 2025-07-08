import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-pink-950 text-white py-6 text-center">
    &copy; {new Date().getFullYear()} Articulate Allied Health. All rights reserved.
  </footer>
);

export default Footer;
