import React from 'react';

import forespas from '../assets/forespas.jpg';
import bendahara from '../assets/bendahara.jpg';
import paud from '../assets/paud.jpg';
import fl from '../assets/fl.jpg';

const experiences = [
  {
    id: 1,
    title: 'Committee in the FORESPAS MKRJ (Forum Pastoral Mahasiswa Keuskupan Regio Jawa)',
    image: forespas,
  },
  {
    id: 2,
    title: 'Volunteering activities, teaching PAUD Harapan',
    image: paud,
  },
  {
    id: 3,
    title: 'Officially elected as the KMK BINUS General Treasurer period 2025-2026',
    image: bendahara,
  },
  {
    id: 4,
    title: 'Presented on Strategic Management during KMK Leadership Training.',
    image: "https://drive.google.com/file/d/1ijAO1iGqeDNI86YHQScJpZqF_yZ7MsIi/view?usp=drive_link",
  },
  {
    id: 5,
    title: 'Volunteered as a Freshmen Leader for Binusian 2028',
    image: fl,
  },
];

const Gallerybento = () => {
  const handleViewAllClick = () => {
    window.location.href = '/organizational-experience';
  };

  return (
    <section id='gallery' className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-[#2A3749] mb-1">Cath’s Gallery</h2>
            <p className="text-[#5F7890] text-lg">Funtastic journey of growth</p>
          </div>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[600px]">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img src={experiences[0].image} alt={experiences[0].title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-white text-sm font-medium">{experiences[0].title}</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md row-span-2">
            <img src={experiences[2].image} alt={experiences[2].title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-white text-sm font-medium">{experiences[2].title}</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img src={experiences[1].image} alt={experiences[1].title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-white text-sm font-medium">{experiences[1].title}</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src={experiences[3].image}
              alt={experiences[3].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-white text-sm font-medium">{experiences[3].title}</p>
              <a
                href="https://drive.google.com/file/d/1UjF3B_nWwk5v6_iH7y5SBmfBmAYqcv5Y/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline text-xs mt-1 inline-block"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img src={experiences[4].image} alt={experiences[4].title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-white text-sm font-medium">{experiences[4].title}</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-[#738C93] text-base italic font-['DM_Sans']">
            This gallery is just a glimpse. There’s more to show, and even more to create. Beyond these moments, I've been involved in many more meaningful experiences, from exciting adventures to valuable opportunities that expanded my perspective and strengthened my soft skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallerybento;
