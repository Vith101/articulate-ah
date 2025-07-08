import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StickyNavbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document.getElementById('hero')?.getBoundingClientRect().bottom || 0;
      setIsSticky(heroBottom <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-pink-100">
        <nav
        className={`w-full bg-transparent transition-all duration-300 z-50 ${
            isSticky ? 'fixed top-0 left-0 h-max-xl' : 'relative'
        }`}
        >
        <div className={`container max-w-4xl bg-pink-950 rounded-full mx-auto px-4 flex justify-center space-x-6 ${ isSticky ? 'transition-all duration-300 py-3' : 'py-4'}`}>
            <Link to="/" className="text-white px-3 py-1 font-bold hover:bg-pink-100 hover:text-black hover:rounded-full">Allied Articulate Health</Link>
            <Link to="/about" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">About Us</Link>
            <Link to="/services" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">Services</Link>
            <Link to="/fees" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">Fees & Rebates</Link>
            <Link to="/contact" className="text-white px-3 py-1 hover:bg-pink-100 hover:text-black hover:rounded-full">Contact</Link>
        </div>
        </nav>
    </div>
  );
};

export default StickyNavbar;
