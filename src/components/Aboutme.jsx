import React, { useState } from 'react';
import photo2 from '../assets/foto-about.png';
import photo from '../assets/foto-about2.png';
import skillsData from '../data/skillsData.js';

const Aboutme = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const categories = [
    { key: 'programming', name: 'Programming Language' },
    { key: 'frameworks', name: 'Frameworks' },
    { key: 'tools', name: 'Tools & Platforms' }
  ];

  const experiences = [
    "General Treasurer of KMK BINUS University – 2025/2026",
    "Treasurer of LDK Activist – Aug 2024 to Jan 2025",
    "Equipment & Logistics Division – HUT & Natal KMK – Jul 2024 to Jan 2025",
    "Fundraising Division Staff – Pengabdian Kepada Masyarakat 'Story of Love' – Jun to Sep 2024",
    "Treasurer – KMK Adventure 'Celestial Quest' – Mar to Jun 2024",
    "PR Division Activist of KMK BINUS University – 2024/2025",
    "Committee of FORESPAS MKRJ (Forum Moderatores Pastoral Mahasiswa Keuskupan Regio Jawa) – Jul 2024",
    "Volunteer Teacher – PAUD with TFI – Oct to Dec 2023"
  ];

  return (
    <section id="about" className="pt-20 pb-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#2A3749] tracking-wide">ABOUT ME</h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center lg:justify-end">
            <img 
              src={photo}
              alt="Catherine Danielle" 
              className="mr-40 mt-2 max-w-[300px] w-130 h-150 rounded-lg" 
            />
          </div>
          <div className="space-y-6 pt-14">
            <p className="text-[#505157] text-base leading-relaxed text-justify">
              I'm a Computer Science student at BINUS University with a strong passion for building software applications and integrating AI into real-world solutions. I also have a deep interest in the Artificial Intelligence of Things (AIoT). I enjoy turning ideas into functional, user-centered applications and continuously learning new technologies to grow as a developer.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-[#2A3749] mb-3">Experience</h3>
              <ul className="space-y-2 text-[#505157]">
                {experiences.map((experience, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-lg mr-3 mt-0">•</span>
                    <span className="text-sm lg:text-base">{experience}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#505157] italic mt-4">
                and many more experiences before...
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center pt-10 mb-12">
          <h2 className="text-5xl font-bold text-[#2A3749]">Skill</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-[#2A3749] text-white shadow-md'
                    : 'bg-white border border-[#738C93] text-[#738C93] hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skillsData[activeCategory]?.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 group cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-[#2A3749] font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
