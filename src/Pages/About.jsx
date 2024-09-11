import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { SiGeeksforgeeks, SiGithub, SiHackerrank, SiLeetcode, SiLinkedin, SiCodechef, SiCodeforces } from 'react-icons/si';

const About = () => {
  return (
    <section className="container mx-auto p-4 font-sans flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="relative mb-8 md:mb-0 md:mr-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-400 to-teal-300 rounded-2xl shadow-xl transform -translate-x-4 -translate-y-4"></div>
          <div className="relative z-10">
            <img 
              src="/profile/Anil2-image.png" 
              alt="Anil Rathod" 
              className="rounded-2xl shadow-lg border-4 border-gray-800 w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="md:w-4/5 flex flex-col">
          <div className="w-full max-w-3xl bg-gray-900 text-white rounded-2xl shadow-2xl p-8 border border-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>

            {/* Adding flex to center the "Who I Am" section */}
            <div className="flex justify-center my-4">
              <div className="text-center text-lg text-gray-400 border-2 border-blue-500 px-4 py-2 rounded-lg bg-gray-800">
                ----who i am----
              </div>
            </div>

            <p className="text-xl mb-4 text-justify">
              I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards. 
              I'm not comfortable with settling and always look for opportunities to improve. As a Tech Enthusiast, I am committed to developing 
              my tech stacks and building reliable and feasible projects to make everyday life easier. I'm also eager to collaborate on valuable 
              projects that address various vulnerabilities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <a
                href="/Anil_Resume_new.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 text-white text-lg font-semibold rounded-lg shadow-md hover:from-blue-600 hover:via-purple-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-4 md:mb-0"
              >
                <FaDownload className="mr-2" />
                Download My Resume
              </a>
              <div className="flex gap-4">
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
                <a href="https://codeforces.com/profile/Rathod_Anil" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
                  <SiCodeforces />
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
