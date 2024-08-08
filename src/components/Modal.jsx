// src/components/Modal.js

import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';


const Modal = ({ show, onClose, videoUrl }) => {
  if (!show) return null;

  const openInNewWindow = () => {
    window.open(videoUrl, '_blank');
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl p-6 relative rounded-lg">
        <div className="absolute top-4 right-4 flex space-x-4 z-10">
          <button 
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes className="text-2xl" />
          </button>
          <button 
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
            onClick={openInNewWindow}
            aria-label="Open in new window"
          >
            <FaExternalLinkAlt className="text-2xl" />
          </button>
        </div>
        <div className="relative pt-6 pb-9/16">
          <video controls className="w-full h-full rounded-lg">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
