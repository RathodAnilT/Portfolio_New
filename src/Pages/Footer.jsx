import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://github.com/RathodAnilT" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a 
          href="https://www.linkedin.com/in/anil-rathod-1a088819b/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a 
          href="https://www.instagram.com/anil1501_r/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="text-center mt-4">
  <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
  <p className="text-gray-400">Designed by <span className="font-bold text-white">Anil Rathod</span></p>
</div>

    </footer>
  );
}

export default Footer;
