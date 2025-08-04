import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Hook to get current URL location

  // Effect for shrinking header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Effect to close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu whenever the location (route) changes
  }, [location]);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu if screen resizes to larger than mobile (Tailwind's default 'md' breakpoint is 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]); // Depend on isMobileMenuOpen to re-check when it changes

  // Base classes for your navigation links
  const linkBaseClasses = `
    px-3 py-1 font-bold
    hover:bg-pink-100 hover:text-black hover:rounded-full
    transition-all duration-300 ease-in-out
    ${scrolled ? 'text-sm' : 'text-base'} /* Shrink font on scroll */
  `;

  // Mobile-specific link classes (adds block, center text, more padding)
  const mobileLinkClasses = `
    ${linkBaseClasses}
    block text-center py-3 px-0 w-full /* block display, center text, full width in dropdown */
  `;

  return (
    <header className={`
      bg-pink-950 text-white shadow-md
      sticky top-0 z-50
      transition-all duration-300 ease-in-out
      ${scrolled ? 'py-3' : 'py-6'}
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center relative"> {/* Added relative here for absolute positioning */}
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}> {/* Close menu if logo clicked */}
          <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            Articulate Allied Health
          </h1>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden"> {/* Only show on screens smaller than 'md' */}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation menu"
          >
            {/* SVG for hamburger/close icon */}
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation - Hidden on mobile, block on md and up */}
        <nav className="hidden md:block">
          <div className={`container max-w-4xl bg-pink-950 rounded-full mx-auto px-4 flex justify-center space-x-6 py-4`}>
            <Link to="/" className={linkBaseClasses}>Home</Link>
            <Link to="/about" className={linkBaseClasses}>About Us</Link>
            <Link to="/services" className={linkBaseClasses}>Services</Link>
            <Link to="/fees" className={linkBaseClasses}>Fees & Rebates</Link>
            {/* <Link to="/supervision" className={linkBaseClasses}>Supervision</Link>
            <Link to="/preschoolScreeners" className={linkBaseClasses}>Preeschool Screeners</Link> */}
            <Link to="/policy" className={linkBaseClasses}>Policy</Link>
            <Link to="/contact" className={linkBaseClasses}>Contact</Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Positioned absolutely below the header, full width. */}
      {/* Visibility controlled by isMobileMenuOpen state and transform. */}
      <div className={`
        md:hidden                 /* Only show on screens smaller than 'md' */
        absolute top-full left-0 right-0  /* Position below header, full width */
        bg-pink-950 shadow-lg      /* Background and shadow for the dropdown */
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} /* Toggle visibility and animation */
        ${isMobileMenuOpen ? 'block' : 'hidden'} /* Explicitly hide/show to control layout */
        origin-top                /* For transform-origin */
        py-2 overflow-hidden     /* Add overflow-hidden to clip the translateY animation */
      `}>
        {/* Your navigation links for the mobile dropdown */}
        <nav className="flex flex-col items-center"> {/* Stack links vertically */}
          <Link to="/" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/services" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/fees" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Fees & Rebates</Link>
          {/* <Link to="/supervision"className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Supervision</Link>
          <Link to="/preschoolScreeners" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Preeschool Screeners</Link> */}
          <Link to="/policy" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Policy</Link>
          <Link to="/contact" className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;