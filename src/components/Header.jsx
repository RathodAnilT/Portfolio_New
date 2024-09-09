  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-scroll';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome, faUser, faProjectDiagram, faEnvelope, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';

  const Header = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const updateProgressBar = () => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / documentHeight) * 100;
        setScrollProgress(scrollPercent);
      };

      window.addEventListener('scroll', updateProgressBar);

      return () => {
        window.removeEventListener('scroll', updateProgressBar);
      };
    }, []);

    return (
      <header className="bg-gray-800 text-white p-4 font-sans sticky top-0 z-50 border-b-4 rounded-b-lg">
        {/* Progress bar on top of navbar */}
        <div
          style={{ width: `${scrollProgress}%`, height: '4px' }}
          className="fixed top-0 left-0 bg-green-500 z-50 transition-width duration-200"
        ></div>

        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative inline-block w-10 h-10 mr-3">
              <img
                src="/profile/Anil2-image.png"
                alt="Anil Rathod"
                className="w-full h-full rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-br from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
              ANIL RATHOD
            </div>
          </div>
          <div className="space-x-4 flex">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 border-2 border-yellow-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-700 border-2 border-pink-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faUser} className="mr-1" /> About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 border-2 border-blue-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faProjectDiagram} className="mr-1" /> Projects
            </Link>
            <Link
              to="certification"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 border-2 border-purple-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Certification
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 border-2 border-indigo-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faTools} className="mr-1" /> Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer hover:border-green-500"
              activeClass="bg-gradient-to-r from-pink-500 via-red-600 to-orange-700 border-2 border-orange-400 shadow-xl"
              spy={true}
              offset={-70}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
            </Link>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;
