import React, { useState } from "react";
import { motion } from "framer-motion"; 

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "AWS Fundamentals",
      issuer: "Udemy",
      date: "13 Aug 2024",
      description: "This course covers AWS cloud services, including deploying, managing, and scaling applications. Learn essential AWS services like EC2, S3, and RDS for effective cloud solutions.",
      content: "/certificates/AWS.pdf",
      logo: "/logos/AWS.png"
    },
    {
      title: "MERN Stack Certification",
      issuer: "Udemy",
      date: "28 June 2024",
      description: "This course covers full-stack development with the MERN stack. Learn to build dynamic web applications, including user authentication (login/sign-out), admin features, blog and comment management, and CRUD operations.",
      content: "/certificates/Mern stack certificate.pdf",
      logo: "/logos/mern.png"
    },
    {
      title: "Postman API Fundamentals Student Expert Certification",
      issuer: "Postman",
      date: "11 Aug 2024",
      description: "This certification covers essential API testing and development using Postman. Learn to perform GET, POST, PUT, DELETE, and PATCH requests, handle responses, and automate tests effectively.",
      content: "/certificates/postman.pdf",
      logo: "/logos/postman.png"
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "13 Aug 2024",
      description: "Comprehensive bootcamp covering full-stack web development. Learn front-end technologies like HTML, CSS, and JavaScript, back-end development with Node.js, and database management. Includes hands-on projects and real-world examples.",
      content: "/certificates/Web development.pdf",
      logo: "/logos/web_development.jpg"
    },
    {
      title: "Complete Interview Preparation",
      issuer: "GeeksForGeeks",
      date: "27 Feb 2024",
      description: "In-depth preparation for technical interviews covering advanced topics in Data Structures and Algorithms (DSA), C++ programming, aptitude, reasoning, and computer fundamentals. Includes practical exercises and problem-solving techniques to excel in interviews.",
      content: "/certificates/Complete Interview Preparation_certification.pdf",
      logo: "/logos/gfg.jpg"
    },
    {
      title: "CSS",
      issuer: "HackerRank",
      date: "8 March 2023",
      description: "This certification focuses on CSS, covering fundamental and advanced styling techniques for creating responsive and visually appealing web designs. Learn about layout systems, positioning, and modern CSS features to enhance web interfaces.",
      content: "/certificates/css certificate_HackerRank.pdf",
      logo: "/logos/css.png"
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      date: "1 Nov 2023",
      description: "This certification focuses on CSS, covering fundamental and advanced styling techniques for creating responsive and visually appealing web designs. Learn about layout systems, positioning, and modern CSS features to enhance web interfaces.",
      content: "/certificates/sql_basic certificate_HackerRank.pdf",
      logo: "/logos/sql.png"
    },
    {
      title: "C++ Programming",
      issuer: "GeeksForGeeks",
      date: "12 Dec 2023",
      description: "This certification covers essential C++ programming concepts, from basic syntax to advanced features like object-oriented programming, data structures, algorithms, and memory management. Gain proficiency in writing efficient and scalable C++ code.",
      content: "/certificates/CPP_gfg.pdf",
      logo:  "/logos/gfg.jpg"
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="container mx-auto p-6 font-sans bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            className="relative flex flex-col bg-black border border-gray-700 cursor-pointer rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }} // Dynamic animation using Framer Motion
            onClick={() => openModal(cert)}
          >
            {/* Certificate Logo */}
            <div className="relative w-full h-40"> {/* Adjusted height */}
              <img 
                src={cert.logo} 
                alt={`${cert.title} logo`} 
                className="absolute top-0 left-0 w-full h-full object-cover" // Ensure image covers the container
              />
            </div>

            <div className="p-4 flex-1 bg-black">
              {/* Completion Badge */}
              <div className="absolute top-2 left-2 z-10 w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full shadow-md">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <h4 className="text-lg font-medium text-gray-400 mb-2">{cert.issuer}</h4>
              <p className="text-gray-500 mb-2">{cert.date}</p>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 relative max-w-lg w-full">
            <button 
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold hover:bg-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-black">{selectedCert.title}</h3>
            <iframe 
              src={selectedCert.content} 
              title={selectedCert.title} 
              className="w-full h-96" 
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;