import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen font-sans" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center px-3 py-5 max-w-3xl mx-auto">
          <div className="relative inline-block w-48 h-48">
            {/* Container for the animated gradient border */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background: 'linear-gradient(45deg, #f06, #f79, #a4c)',
                WebkitBackgroundClip: 'border-box',
                backgroundClip: 'border-box',
                borderRadius: '9999px',
                padding: '4px', // Adjusted padding for a thinner border
                boxSizing: 'border-box',
                animation: 'borderGradient 3s linear infinite'
              }}
            >
              <img 
                src="/profile/Anil2-image.png" // Updated path
                alt="Anil Rathod"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          {/* Welcome Text */}
          <div className="mb-4">
            <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">Hi, I'm Anil Rathod</h2>
          </div>
          <p className="text-2xl font-light mb-4 text-white">An aspiring software developer</p>
          <div className="border border-gray-400 p-6 rounded-lg inline-block relative">
            <blockquote className="text-xl italic relative">
              <p className="relative pl-10 pr-10">
                <span className="absolute left-0 text-4xl text-white" style={{ top: '0', transform: 'translateX(-50%) translateY(-50%)' }}>“</span>
                The only limit to our realization of tomorrow is our doubts of today.
                <span className="absolute right-0 text-4xl text-white" style={{ top: '0', transform: 'translateX(50%) translateY(-50%)' }}>”</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      {/* Inline Styles for Animation */}
      <style>
        {`
          @keyframes borderGradient {
            0% {
              background: linear-gradient(45deg, #f06, #f79, #a4c);
            }
            50% {
              background: linear-gradient(45deg, #f79, #a4c, #f06);
            }
            100% {
              background: linear-gradient(45deg, #a4c, #f06, #f79);
            }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
