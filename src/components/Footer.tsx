import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  
  // Define Policy sub-links data structure
  const policyLinks = [
    { name: 'Policy', to: '/policy'},
    { name: 'Terms & Conditions', to: '/policy/terms-and-conditions' },
    { name: 'Cancellation Policy', to: '/policy/cancellation-policy' },
    { name: 'Payment Policy', to: '/policy/payment-policy' },
    { name: 'Zero Tolerance Policy', to: '/policy/zero-tolerance' },
    { name: 'Privacy Policy', to: '/policy/privacy-policy' },
  ];

  // Base class for links in the footer
  const footerLinkClasses = "text-pink-200 hover:text-pink-50 transition duration-200 text-sm";
  // Base class for the main category headings. md:ml-auto ensures the border-b aligns right when text is right-aligned.
  const footerHeadingClasses = "text-lg font-bold text-pink-50 mb-3 border-b-2 border-pink-700 inline-block pb-1 md:ml-auto";

  return (
    <footer className="bg-pink-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Main Content Grid: 
          On Mobile (default): [Nav Links] | [Contact Info] | [Empty]
          On Desktop (md:order-*): [Empty] | [Contact Info] | [Nav Links] (Right Justified)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-b border-pink-800 pb-10 mb-8">
          
          {/* 1. Navigation Links (Right Justified on Desktop) - Order 3 */}
          <div className="md:col-span-1 grid grid-cols-2 gap-8 md:gap-10 text-left md:text-right md:order-3">
            
            {/* Policy Section */}
            {/* items-start on mobile, items-end on desktop to push content right */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-start md:items-end">
              <h4 className={footerHeadingClasses}>Policy</h4>
              <nav className="flex flex-col space-y-2 items-start md:items-end">
                {policyLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={footerLinkClasses}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Other Links Section */}
            {/* items-start on mobile, items-end on desktop to push content right */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-start md:items-end">
              <h4 className={footerHeadingClasses}>Support</h4>
              <nav className="flex flex-col space-y-2 items-start md:items-end">
                <Link to="/contact" className={footerLinkClasses}>
                  Contact Us
                </Link>
                
                {/* FAQ Link */}
                <Link to="/faq" className={footerLinkClasses}>
                  FAQs
                </Link>
                
                {/* Helpful Resources Link: We use md:justify-end to align the text and icon together to the right */}
                <Link to="/resources" className={footerLinkClasses + " flex items-center md:justify-end"}>
                  Helpful Resources 
                  <ExternalLink className="w-3 h-3 ml-1 md:ml-0 md:mr-1" />
                </Link>
              </nav>
            </div>
          </div>

          {/* 2. Contact Information (Center) - Order 2 */}
          <div className="md:col-span-1 flex flex-col items-start md:items-center text-left md:text-center space-y-4 pt-2 md:order-2">
            <h4 className={footerHeadingClasses.replace('md:ml-auto', '')}>Get in Touch</h4> {/* Remove ml-auto for the centered heading */}

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-pink-300 flex-shrink-0" />
              <a 
                href="mailto:info@articulateah.com.au" 
                className="text-white hover:text-pink-300 font-semibold transition duration-200 break-all"
              >
                info@articulateah.com.au
              </a>
            </div>
            
            {/* Simple Branding Block for the center column on desktop */}
            <div className="hidden md:block pt-6">
                <p className="text-pink-400 font-serif italic text-sm">
                    Providing clarity and connection through compassionate allied health services.
                </p>
            </div>
          </div>

          {/* 3. Empty/Placeholder Column (Left on Desktop) - Order 1 */}
          {/* This column takes up the first slot on desktop to push the contact info to the center */}
          <div className="hidden md:block md:col-span-1 md:order-1">
            {/* Intentionally left empty for centering layout */}
          </div>
        </div>

        {/* Copyright and Bottom Text */}
        <div className="text-center text-sm text-pink-400">
          <p>&copy; {new Date().getFullYear()} Articulate Allied Health. All rights reserved.</p>
          <p className="mt-1">ABN 52 677 440 729</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;