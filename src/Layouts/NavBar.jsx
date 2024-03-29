import React, { useState } from 'react';
import './MultiLevelDropdown';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center md:space-x-4">
          
            <a href="#" className="text-white px-2 pl-3 py-2 text-sm font-medium border-r border-white">Home</a>

            <span className="border-r border-white hidden md:block"></span>

            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-white px-3 py-2 text-sm font-medium border-r border-white"></a>
              <a href="#" className="text-white px-3 py-2 text-sm font-medium border-r border-white">Joha Offers</a>
              <a href="#" className="text-white px-3 py-2 text-sm font-medium border-r border-white">Joha Crafts</a>
              {/* Last item doesn't have a border */}
              <a href="#" className="text-white px-3 py-2 text-sm font-medium">Sellers</a>
            </div>
          </div>
          
          {/* Flex container for right side of navbar */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white px-3 py-2 text-sm font-medium border-r border-white">Start Selling</a>
            <a href="#" className="text-white px-3 py-2 text-sm font-medium">Contact Us</a>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Joha Mall</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Joha Offers</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Joha Crafts</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Sellers</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Start Selling</a>
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
``
