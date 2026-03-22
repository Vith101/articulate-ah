import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  // NEW: State for Contact/FAQ submenu
  const [isContactSubMenuOpen, setIsContactSubMenuOpen] = useState(false);
  const location = useLocation();

  // --- Utility Functions and Classes ---

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesSubMenuOpen(false);
    setIsContactSubMenuOpen(false); // Close contact submenu
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      if (prev) {
        setIsServicesSubMenuOpen(false);
        setIsContactSubMenuOpen(false);
      }
      return !prev;
    });
  };

  const handleServicesClickMobile = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isServicesSubMenuOpen) {
      e.preventDefault(); 
      setIsServicesSubMenuOpen(true);
      setIsContactSubMenuOpen(false); // Close other submenus
    } else {
      setIsServicesSubMenuOpen(false); 
    }
  };

  // NEW: Handler for Contact mobile accordion
  const handleContactClickMobile = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isContactSubMenuOpen) {
      e.preventDefault();
      setIsContactSubMenuOpen(true);
      setIsServicesSubMenuOpen(false); // Close other submenus
    } else {
      setIsContactSubMenuOpen(false);
    }
  };

  const accordionTransitionClasses = (isOpen: boolean) => `
    overflow-hidden transition-[max-height] duration-300 ease-in-out
    ${isOpen ? 'max-h-40' : 'max-h-0'}
  `;

  const linkBaseClasses = `
    px-3 py-1 font-bold text-white
    hover:bg-pink-100 hover:text-black hover:rounded-full
    transition-all duration-300 ease-in-out
    ${scrolled ? 'text-sm' : 'text-base'}
  `;

  const mobileLinkClasses = `
    ${linkBaseClasses}
    block text-center py-3 px-0 w-full
  `;

  const subLinkClasses = "block px-4 py-2 hover:bg-pink-100 text-sm font-medium transition duration-150 whitespace-nowrap";

  // --- Effects ---

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    handleMobileLinkClick(); 
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) handleMobileLinkClick();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className={`bg-pink-950 text-white shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/" onClick={handleMobileLinkClick}>
          <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            Articulate Allied Health
          </h1>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2 rounded-lg" aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className="flex justify-center space-x-6">
            <Link to="/" className={linkBaseClasses}>Home</Link>
            <Link to="/about" className={linkBaseClasses}>About Us</Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group flex items-center">
              <Link to="/services" className={linkBaseClasses + " flex items-center"}>
                Services
                <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-150" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-56 hidden group-hover:block z-10">
                <div className="bg-white text-pink-950 rounded-xl shadow-2xl overflow-hidden ring-1 ring-pink-200">
                  <Link to="/supervision" className={subLinkClasses}>Supervision</Link>
                  <Link to="/preschool-screeners" className={subLinkClasses}>Preschool Screeners</Link>
                </div>
              </div>
            </div>

            <Link to="/fees" className={linkBaseClasses}>Fees & Rebates</Link>

            {/* CONTACT DROPDOWN - DESKTOP */}
            <div className="relative group flex items-center">
              <Link to="/contact" className={linkBaseClasses + " flex items-center"}>
                Contact
                <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-150" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-40 hidden group-hover:block z-10">
                <div className="bg-white text-pink-950 rounded-xl shadow-2xl overflow-hidden ring-1 ring-pink-200">
                  <Link to="/faq" className={subLinkClasses}>FAQs</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-pink-950 shadow-lg transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} origin-top py-2 overflow-hidden`}>
        <nav className="flex flex-col items-center">
          <Link to="/" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Home</Link>
          <Link to="/about" className={mobileLinkClasses} onClick={handleMobileLinkClick}>About Us</Link>

          {/* SERVICES ACCORDION - MOBILE */}
          <div className="w-full">
            <Link to="/services" onClick={handleServicesClickMobile} className={mobileLinkClasses + " flex justify-center items-center"}>
              Services
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isServicesSubMenuOpen ? 'rotate-180' : ''}`} />
            </Link>
            <div className={accordionTransitionClasses(isServicesSubMenuOpen)}>
              <Link to="/supervision" className={mobileLinkClasses + " !py-3 bg-pink-900 text-sm font-normal"} onClick={handleMobileLinkClick}>Supervision</Link>
              <Link to="/preschool-screeners" className={mobileLinkClasses + " !py-3 bg-pink-900 text-sm font-normal"} onClick={handleMobileLinkClick}>Preschool Screeners</Link>
            </div>
          </div>

          <Link to="/fees" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Fees & Rebates</Link>

          {/* CONTACT ACCORDION - MOBILE */}
          <div className="w-full">
            <Link to="/contact" onClick={handleContactClickMobile} className={mobileLinkClasses + " flex justify-center items-center"}>
              Contact
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isContactSubMenuOpen ? 'rotate-180' : ''}`} />
            </Link>
            <div className={accordionTransitionClasses(isContactSubMenuOpen)}>
              <Link to="/faq" className={mobileLinkClasses + " !py-3 bg-pink-900 text-sm font-normal"} onClick={handleMobileLinkClick}>FAQs</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;