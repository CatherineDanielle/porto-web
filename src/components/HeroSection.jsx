import React from 'react';
import pict from '../assets/foto-hero.png';

const HeroSection = () => {
  return (
    <section id='home' className="min-h-screen flex items-center pt-20 sm:pt-24 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full text-center lg:hidden order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 leading-tight px-2">
              For innovators who turn{' '}
              <span className="text-[#c6a79e]">data</span> into{' '}
              <span className="text-gray-600">real-world</span>{' '}
              <span className="text-[#eed5b7]">impact!</span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="flex-1 order-2 lg:order-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <div className="relative">
              <div className=" flex items-center justify-center overflow-hidden">
                <img 
                  src= {pict}
                  alt="Catherine Danielle - AI-Powered Web & App Developer"
                  className="w-full h-150 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mb-40 flex-1 text-center lg:text-left order-3 lg:order-1 w-full">
            <div className="hidden lg:block mb-4 lg:mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                For innovators who turn{' '}
                <span className="text-[#c6a79e]">data</span> into{' '}
                <span className="text-gray-600">real-world</span>{' '}
                <span className="text-[#eed5b7]">impact!</span>
              </h1>
            </div>
            <div className="px-2 sm:px-0">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-1 sm:mb-2">Hello!</p>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
                I'm Catherine Danielle
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                AI-Powered Web & App Developer
              </p>
              
              <a
                href="/cv.pdf"
                download="CV - Catherine Danielle"
                className="bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-800 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 text-sm sm:text-base touch-manipulation min-h-[44px]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        <div className="h-0"></div>
      </div>
    </section>


  );
};

export default HeroSection;