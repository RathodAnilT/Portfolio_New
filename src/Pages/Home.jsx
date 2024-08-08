import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <section id="home" className="-pt-20">
        <HeroSection />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="experience" className="py-16">
        <Experience />
      </section>
      <section id="skills" className="py-16">
        <Skills />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
