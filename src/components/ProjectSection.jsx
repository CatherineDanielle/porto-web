import React, { useState, useRef, useEffect } from 'react';

import bomi from '../assets/bomi.png';
import nyenyakin from '../assets/nyenyakin.png';
import porto from '../assets/porto.png';
import catering from '../assets/cateringz.png';
import tch from '../assets/tch.png';

import gh from '../assets/github.png';
import web from '../assets/web.png';
import fig from '../assets/figma.png';

const ProjectSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      id: 1,
      name: "Nyenyakin",
      techStack: "React.js, Tailwind CSS, Python, Flask",
      description: " Nyenyakin is a group project developed for the Machine Learning and Research Methodology course and this is the practical implementation of our research paper. The project demonstrates how AI can analyze the impact of urban lifestyle factors on sleep quality, providing data-driven insights for potential health interventions. To make the results accessible, we built this Nyenyakin website that allows users to input their lifestyle data and receive sleep quality predictions. The frontend was developed using React.js and Tailwind CSS, while the backend and machine learning models were implemented using Flask and various Python libraries.",
      image: nyenyakin,
      github: "https://github.com/CatherineDanielle/nyenyakin-frontend",
      website: "https://nyenyakin.vercel.app/"
    },
    {
      id: 2,
      name: "BOMI",
      techStack: "React.js, Tailwind CSS, Laravel",
      description: "BOMI is a health-focused web application designed to help users monitor and manage their body health more effectively. Built using React, Tailwind CSS, and Laravel, BOMI offers several key features including a Body Mass Index (BMI) calculator, body composition estimator, health tracker, and practical tips to maintain a healthy lifestyle. This project supports Sustainable Development Goal (SDG) 3 by raising awareness of personal health and promoting well-being for all users.",
      image: bomi,
      github: "https://github.com/CatherineDanielle/bomi-health-app"
    },
    {
      id: 3,
      name: "CAteriNgz",
      techStack: "HTML, CSS, JS",
      description: "CAteriNgz is a website application developed as a brand prototype for a local homemade culinary business. Built using HTML, CSS, and JavaScript, the website aims to help CAteriNgz grow its customer base in Jakarta, Bandung, and Malang by building a strong online presence that reflects the brand’s identity and values. This project highlights clean UI design, well-structured content, and responsive layout to simulate a real-world business scenario. The development began with wireframing and UI design in Figma.The process start from translating the design into code to optimizing the user experience across various devices—ensuring the website is both functional and visually engaging.",
      image: catering,
      github: "https://github.com/CatherineDanielle/cateringz-website"
    },
    {
      id: 4,
      name: "Portfolio Website",
      techStack: "React.js, Tailwind CSS",
      description: "This is my personal portfolio website developed using React.js and Tailwind CSS. I created this site to showcase my past projects, experiences, and creative journey. It features a clean and interactive design that reflects my personal style. Through this project, I was able to explore my creativity from designing the layout to translating it into code and build a platform that provides potential collaborators or employers with quick access to my professional background.",
      image: porto,
      github: "https://github.com/CatherineDanielle/porto-web",
      website: "https://cdanielle.vercel.app/"
    },
    {
      id: 5,
      name: "The Children House",
      techStack: "Work in Progress",
      description: "TCH APP is a web application designed to support my workplace, a private tutoring institution, by improving communication between teachers and parents. The platform aims to promote the tuition centre while streamlining daily operations. Inspired by my own teaching experience, the app includes features such as attendance tracking, behaviour logs, and daily activity updates. Its core feature is an automated report generator for teachers, powered by a Natural Language Model. Developed using React, this tool was built to reduce miscommunication and enhance transparency in a simple, accessible format for educators and parents alike.",
      image: tch,
      github: "https://github.com/CatherineDanielle/tch-app",
      figma: "https://www.figma.com/design/FCMChltXMKmEXbUGwJcCPc/TCH-APP?node-id=11-17&t=SxhJMZ4YwHDNqUbM-1"
    }
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    direction === 'left'
      ? container.scrollLeft -= scrollAmount
      : container.scrollLeft += scrollAmount;

    setTimeout(() => updateScrollButtons(), 300);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp);

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    container.style.cursor = 'grab';

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);

      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="project" className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2A3749] font-['DM_Sans']">PROJECT</h2>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide p-8"
            style={{ scrollBehavior: 'smooth' }}
            onScroll={updateScrollButtons}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-80 bg-[#A8C5D9] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col"
              >
                <div className="h-48 bg-black relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col h-full p-6 text-gray-800">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 font-['DM_Sans']">{project.name}</h3>
                    <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium font-['DM_Sans']">
                      {project.techStack}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed font-['DM_Sans'] text-white/90">
                    {project.description}
                  </p>

                  <div className="mt-auto flex gap-4 pt-4 items-end">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded"
                      >
                        <img src={gh} alt="GitHub" className="w-10 h-10" />
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:bg-[#32576c] px-3 py-3 rounded"
                      >
                        <img src={web} alt="Visit Site" className="w-8 h-8" />
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:bg-[#7258A5] px-3 py-3 rounded"
                      >
                        <img src={fig} alt="Figma" className="w-7 h-7" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
