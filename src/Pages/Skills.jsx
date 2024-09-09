import React from 'react';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import react from '../assets/icons/react.png';
import express from '../assets/icons/express.png';
import sql from '../assets/icons/sql.png';
import c from '../assets/icons/c.png';
import Cpp from '../assets/icons/Cpp.png';
import vscode from '../assets/icons/vscode.png';
import { SiMongodb, SiPostman } from 'react-icons/si';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMui } from 'react-icons/si';
import Tailwind from '../assets/icons/Tailwind.png';
import firebase from '../assets/icons/firebase.png';
import Python from '../assets/icons/python.png';
import insomnia from '../assets/icons/insomnia.jpeg';

const cardStyles = "bg-black text-white rounded-lg p-4 shadow-md w-full max-w-md transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90"; // Reduced padding and width
const numberStyles = "absolute -left-12 text-2xl font-bold flex items-center justify-center rounded-full w-8 h-8"; // Reduced font size and dimensions

const Skills = () => {
  return (
    <div className="container mx-auto p-4 font-sans text-center">
      <h1 className="text-2xl font-bold mb-8">Skills</h1>
      <div className="flex justify-center items-start">
        <div className="flex flex-col w-full max-w-5xl">
          
          {/* Frontend and Backend */}
          <div className="flex items-start mb-8">
            <div className="relative flex flex-col items-center w-1/2 mx-4">
              <div className={cardStyles}>
                <div className={numberStyles} style={{ backgroundColor: '#FF5733', color: '#fff' }}>1</div>
                <h2 className="text-xl font-semibold mb-4">Frontend</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <img src={html} alt="HTML" className="w-12 h-12" />
                  <img src={css} alt="CSS" className="w-12 h-12" />
                  <img src={Tailwind} alt="Tailwind CSS" className="w-12 h-12" />
                  <img src={javascript} alt="JavaScript" className="w-12 h-12" />
                  <img src={react} alt="React" className="w-12 h-12" />
                  <SiMui size={48} color="#0077FF" />
                </div>
              </div>
            </div>
            <div className="border-l-4 border-gray-300 h-40 mx-4"></div> {/* Reduced margin */}
            <div className="relative flex flex-col items-center w-1/2 mx-4">
              <div className={cardStyles}>
                <div className={numberStyles} style={{ backgroundColor: '#33FF57', color: '#fff' }}>2</div>
                <h2 className="text-xl font-semibold mb-4">Backend</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <img src={firebase} alt="Firebase" className="w-12 h-12" />
                  <FaNodeJs size={48} color="#349C21" />
                  <img src={express} alt="Express" className="w-12 h-12" />
                  <SiPostman size={48} color="#C66B0A" />
                  <img src={insomnia} alt="Insomnia" className="w-12 h-12 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Databases and Languages */}
          <div className="flex items-start mb-8">
            <div className="relative flex flex-col items-center w-1/2 mx-4">
              <div className={cardStyles}>
                <div className={numberStyles} style={{ backgroundColor: '#FF33A8', color: '#fff' }}>3</div>
                <h2 className="text-xl font-semibold mb-4">Databases</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <SiMongodb size={48} color="#349C21" />
                  <img src={sql} alt="SQL" className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="border-l-4 border-gray-300 h-40 mx-4"></div> {/* Reduced margin */}
            <div className="relative flex flex-col items-center w-1/2 mx-4">
              <div className={cardStyles}>
                <div className={numberStyles} style={{ backgroundColor: '#33A8FF', color: '#fff' }}>4</div>
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <img src={Cpp} alt="C++" className="w-12 h-12" />
                  <FaJava size={48} />
                  <IoLogoJavascript size={48} color="yellow" />
                  <img src={c} alt="C" className="w-12 h-12" />
                  <img src={Python} alt="Python" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div className="flex items-start mb-8">
            <div className="relative flex flex-col items-center w-1/2 mx-4">
              <div className={cardStyles}>
                <div className={numberStyles} style={{ backgroundColor: '#A833FF', color: '#fff' }}>5</div>
                <h2 className="text-xl font-semibold mb-4">Tools</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <FaGitAlt size={48} color="orange" />
                  <FaGithub size={48} />
                  <img src={vscode} alt="VS Code" className="w-12 h-12" />
                </div>
              </div>
            </div>
            <div className="border-l-4 border-gray-300 h-40 mx-4"></div> {/* Reduced margin */}
            <div className="flex flex-col items-center w-1/2 mx-4">
              {/* Placeholder for any additional section if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
