import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react'; // Using lucide icons for clean UI

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage the visibility of the Services submenu on mobile
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const location = useLocation();

  // --- Utility Functions and Classes ---

  // Function to close ALL menus (main and sub)
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesSubMenuOpen(false);
  };

  // Function to toggle mobile menu (and close submenu if closing main menu)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      // If the main menu is closing, ensure the services submenu is also closed
      if (prev) {
        setIsServicesSubMenuOpen(false);
      }
      return !prev;
    });
  };

  /**
   * FIX: This function now manages both opening the accordion and navigating.
   * 1. If closed: Prevents default navigation and opens the accordion.
   * 2. If open: Allows navigation (default Link behavior) and closes the accordion.
   */
  const handleServicesClickMobile = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isServicesSubMenuOpen) {
      // 1. If closed, prevent navigation and open the accordion.
      e.preventDefault(); 
      setIsServicesSubMenuOpen(true);
    } else {
      // 2. If open, allow the default navigation to /services and close the accordion.
      setIsServicesSubMenuOpen(false); 
      // Do NOT call e.preventDefault(), allowing Link to navigate
    }
  };

  // Utility class for the mobile accordion transition (max-h trick)
  const accordionTransitionClasses = (isOpen: boolean) => `
    overflow-hidden transition-[max-height] duration-300 ease-in-out
    ${isOpen ? 'max-h-40' : 'max-h-0'}
  `;

  // Base classes for your navigation links
  const linkBaseClasses = `
    px-3 py-1 font-bold text-white
    hover:bg-pink-100 hover:text-black hover:rounded-full
    transition-all duration-300 ease-in-out
    ${scrolled ? 'text-sm' : 'text-base'} /* Shrink font on scroll */
  `;

  // Mobile-specific link classes
  const mobileLinkClasses = `
    ${linkBaseClasses}
    block text-center py-3 px-0 w-full /* block display, center text, full width in dropdown */
  `;

  // Classes for links inside the desktop dropdown box
  const subLinkClasses = "block px-4 py-2 hover:bg-pink-100 text-sm font-medium transition duration-150 whitespace-nowrap";

  // --- Effects ---

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
    // Close menu and submenu whenever the location (route) changes
    handleMobileLinkClick(); 
  }, [location]);

  // Close mobile menu if screen resizes to larger than mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        handleMobileLinkClick();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);


  return (
    <header className={`
      bg-pink-950 text-white shadow-md
      sticky top-0 z-50
      transition-all duration-300 ease-in-out
      ${scrolled ? 'py-3' : 'py-6'}
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/" onClick={handleMobileLinkClick}>
          <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            Articulate Allied Health
          </h1>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <div className={`flex justify-center space-x-6`}>

            <Link to="/" className={linkBaseClasses}>Home</Link>
            <Link to="/about" className={linkBaseClasses}>About Us</Link>

            {/* SERVICES DROPDOWN - DESKTOP */}
            <div className="relative group flex items-center">
              <Link
                to="/services"
                className={linkBaseClasses + " flex items-center"}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-150" />
              </Link>

              {/* Submenu Content */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-56 hidden group-hover:block z-10">
                <div className="bg-white text-pink-950 rounded-xl shadow-2xl overflow-hidden ring-1 ring-pink-200">
                  <Link
                    to="/supervision"
                    className={subLinkClasses}
                  >
                    Supervision
                  </Link>
                  <Link
                    to="/preschool-screeners"
                    className={subLinkClasses}
                  >
                    Preschool Screeners
                  </Link>
                </div>
              </div>
            </div>
            {/* SERVICES DROPDOWN - END */}

            <Link to="/fees" className={linkBaseClasses}>Fees & Rebates</Link>
            <Link to="/contact" className={linkBaseClasses}>Contact</Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        md:hidden 
        absolute top-full left-0 right-0 
        bg-pink-950 shadow-lg 
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        origin-top
        py-2 overflow-hidden 
      `}>
        <nav className="flex flex-col items-center">
          <Link to="/" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Home</Link>
          <Link to="/about" className={mobileLinkClasses} onClick={handleMobileLinkClick}>About Us</Link>

          {/* SERVICES ACCORDION - MOBILE */}
          <div className="w-full">
            {/* Using the new handler that allows navigation on the second click */}
            <Link
              to="/services"
              onClick={handleServicesClickMobile} 
              className={mobileLinkClasses + " flex justify-center items-center"}
              aria-expanded={isServicesSubMenuOpen}
            >
              Services
              {/* Accordion Indicator */}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isServicesSubMenuOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Submenu Content (Mobile) */}
            <div className={accordionTransitionClasses(isServicesSubMenuOpen)}>
              <Link to="/supervision" className={mobileLinkClasses + " !py-3 bg-pink-900 hover:bg-pink-800 text-sm font-normal"} onClick={handleMobileLinkClick}>
                Supervision
              </Link>
              <Link to="/preschool-screeners" className={mobileLinkClasses + " !py-3 bg-pink-900 hover:bg-pink-800 text-sm font-normal"} onClick={handleMobileLinkClick}>
                Preschool Screeners
              </Link>
            </div>
          </div>
          {/* SERVICES ACCORDION - END */}

          <Link to="/fees" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Fees & Rebates</Link>
          <Link to="/contact" className={mobileLinkClasses} onClick={handleMobileLinkClick}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;