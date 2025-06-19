import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/Aboutme";
import HeroSection from "../components/HeroSection";
import Gallerybento from "../components/Gallerybento";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#A8C5D9]">
        <Navbar />
        <HeroSection />
        <About />
        <Gallerybento />
        <ProjectSection />
        <ContactSection />
        <Footer />
    </div>
  );
};

export default Home;