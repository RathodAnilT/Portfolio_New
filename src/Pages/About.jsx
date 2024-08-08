import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { SiGeeksforgeeks, SiGithub, SiHackerrank, SiLeetcode, SiLinkedin, SiCodechef } from 'react-icons/si';

const About = () => {
  return (
    <section className="container mx-auto p-4 font-sans">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="relative mb-8 md:mb-0 md:mr-8"> {/* Adjust spacing here */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-400 to-teal-300 rounded-2xl shadow-xl transform -translate-x-4 -translate-y-4"></div>
          <div className="relative z-10">
            <img 
              src="/profile/Anil2-image.png" // Updated path
              alt="Anil Rathod" 
              className="rounded-2xl shadow-lg border-4 border-gray-800 w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="md:w-4/5 flex flex-col md:flex-row items-center justify-between"> {/* Adjusted to support profile icons */}
          <div className="w-full max-w-3xl bg-gray-900 text-white rounded-2xl shadow-2xl p-8 border border-gray-700 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
            <p className="text-xl mb-4 text-center">Hi, I'm Anil, a software engineer passionate about creating impactful solutions. Currently completing my final year in Computer Engineering, I aspire to innovate and excel as a Software Developer (SDE) and full-stack engineer, with a keen interest in AI/ML.</p>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
              <a
                href="/Anil_Resume_new.pdf" // Path to the resume in the public directory
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:from-blue-600 hover:via-purple-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4 md:mb-0"
              >
                <FaDownload className="mr-2" />
                Download My Resume
              </a>
              <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                <a href="https://www.linkedin.com/in/anil-rathod-1a088819b/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiLinkedin />
                </a>
                <a href="https://github.com/RathodAnilT" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiGithub />
                </a>
                <a href="https://leetcode.com/u/Anil_Rathod/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiLeetcode />
                </a>
                <a href="https://www.geeksforgeeks.org/user/anilrathl9tb/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiGeeksforgeeks />
                </a>
                <a href="https://www.codechef.com/users/anilrathod1501" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiCodechef />
                </a>
                <a href="https://www.hackerrank.com/profile/anilrathod1501" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiHackerrank />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
