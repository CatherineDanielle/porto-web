import React, { useState } from 'react';
import skillsData from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const categories = [
    { key: 'programming', name: 'Programming Language' },
    { key: 'frameworks', name: 'Frameworks' },
    { key: 'tools', name: 'Tools & Platforms' }
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#738C93] font-['DM_Sans'] flex items-center">
      <div className="container mx-auto px-6 py-20 -mt-300">
        <div className="text-center mb-16">
          <h2 className="text-[#1E1E1E] text-5xl lg:text-6xl font-bold mb-12">
            Skill
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-white text-[#738C93] shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {skillsData[activeCategory]?.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 group cursor-pointer transform hover:scale-110 transition-all duration-300"
              style={{ margin: '0 15px' }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-22 h-22 object-contain"
                />
              </div>
              <p className="text-white text-base lg:text-lg font-medium text-center group-hover:text-gray-200 transition-colors duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
