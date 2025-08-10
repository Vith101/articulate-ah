import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// The main Dropdown component
// It takes a 'question' and 'answer' as props.
const FAQDropDown :  React.FC<{
  question: React.ReactNode;
  answer: React.ReactNode;
}> = ({ question, answer }) => {
  // Use a state hook to track whether the dropdown is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the isOpen state.
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-pink-950 text-white shadow rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Question section - clickable to toggle the dropdown */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-pink-950 hover:bg-pink-1000 transition-colors duration-200"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        {/* Chevron icon that rotates based on the isOpen state */}
        <svg
          className={`w-5 h-5 text-white transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden p-4 border-gray-200">
          <p className="text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQDropDown;
