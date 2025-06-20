import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#A8C5D9] z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => scrollToSection('hero')}
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[#FFFAFA] px-3 py-2 text-sm font-medium transition-colors duration-200 font-['DM_Sans']"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#FFFAFA] px-3 py-2 text-sm font-medium transition-colors duration-200 font-['DM_Sans']"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-[#FFFAFA] px-3 py-2 text-sm font-medium transition-colors duration-200 font-['DM_Sans']"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('project')}
                className="text-white hover:text-[#FFFAFA] px-3 py-2 text-sm font-medium transition-colors duration-200 font-['DM_Sans']"
              >
                Project
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-[#738C93] hover:bg-[#FFFAFA] hover:text-[#000000] px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 font-['DM_Sans'] shadow-md hover:shadow-lg"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFFAFA] hover:bg-gray50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#5a737a]">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 font-['DM_Sans']"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 font-['DM_Sans']"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="text-white hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 font-['DM_Sans']"
          >
            Project
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-white hover:text-black hover:bg-gray-50 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 font-['DM_Sans']"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-[#738C93] hover:bg-[#FFFAFA] hover:text-[#000000] block px-3 py-2 text-base font-medium w-full text-left mt-2 rounded-md transition-all duration-200 font-['DM_Sans']"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;