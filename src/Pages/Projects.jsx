import React, { useState } from 'react';
import { FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import Modal from '../components/Modal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideoUrl('');
  };

  const projects = [
    {
      title: 'MERN Blog',
      description: 'This MERN stack blog website offers a robust platform for creating, managing, and interacting with blog posts.',
      imageUrl: '/images/Blog.png',
      videoUrl: '',
      projectLink: 'https://github.com/RathodAnilT/mern',
    },
    {
      title: 'MovieSphere',
      description: 'The movie app uses The Movie Database (TMDB) API to display Hindi and Hollywood movies, featuring details, posters, ratings, overviews, trailers, search, and pagination.',
      imageUrl: '/images/movie.png',
      videoUrl: '/videos/video2.mp4',
      projectLink: 'https://movieorbitbyanil.netlify.app/',
    },
    {
      title: 'WeatherApp',
      description: 'Discover my weather app—real-time updates crafted with HTML, CSS, and JavaScript.',
      imageUrl: '/images/WeatherApp.png',
      videoUrl: '/videos/video3.mp4',
      projectLink: 'https://github.com/RathodAnilT/weatherForecastApp',
    },
    {
      title: 'NetflixClone',
      description: 'This project is a static website created as a clone of Netflix. It is developed using only HTML and CSS, serving as a learning exercise to practice web design and front-end development skills.',
      imageUrl: '/images/netflix.png',
      videoUrl: '/videos/video3.mp4',
      projectLink: 'https://github.com/RathodAnilT/NetflixClone',
    },
    {
      title: 'NetflixGPT',
      description: 'This is my ongoing project. Stay tuned for updates!',
      imageUrl: '/images/netflix.png',
      videoUrl: '/videos/video3.mp4',
      projectLink: 'https://project-link3.com',
    },
    {
      title: 'For More Projects Please Explore My Github Repository👇',
      description: '',
      imageUrl: '/images/hand.png',
      videoUrl: '/videos/video3.mp4',
      projectLink: 'https://github.com/RathodAnilT?tab=repositories',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-opacity-80 transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex flex-col"
            style={{ width: '240px', height: '320px' }} // Consistent dimensions
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow bg-black text-white">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="flex-grow text-sm">{project.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() => openModal(project.videoUrl)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaPlay className="text-xl" />
                </button>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={closeModal} videoUrl={currentVideoUrl} />
    </section>
  );
}

export default Projects;
