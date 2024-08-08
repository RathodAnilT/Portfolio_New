// src/pages/Experience.js

import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "ReactJs Developer-Intern",
      company: "CodSoft Pvt. Ltd.",
      years: "25 Dec 2023 to 25 Jan 2024",
      desc: [
        "Created an E-Commerce platform with functionalities for electronics products, clothes, mobiles, and more.",
        "Delivered static web applications to fulfill client requirements, consistently meeting project deadlines while ensuring high-quality code and user-friendly designs.",
      ],
      bgColor: "bg-blue-800",
      borderColor: "border-blue-600",
      numberColor: "bg-blue-600"
    },
    {
      title: "Software Engineer - Intern",
      company: "Oasis Infobyte",
      years: "5 Feb 2024",
      desc: [
        "Managed the project keeping up with deadlines and scrutinizing project possibilities to deliver the best end results.",
        "Worked on Frontend development part using frontend framework and libraries.",
      ],
      bgColor: "bg-green-800",
      borderColor: "border-green-600",
      numberColor: "bg-green-600"
    },
    {
      title: "Web Development - Intern",
      company: "TechnoHacks EduTech",
      years: "14 Jan 2024",
      desc: [
        "I developed a portfolio website to showcase my projects and skills.",
        "I created a weather app that provides real-time weather updates and forecasts.",
        "I built a telemedicine e-commerce website to facilitate online medical consultations and services."
      ],
      bgColor: "bg-purple-800",
      borderColor: "border-purple-600",
      numberColor: "bg-purple-600"
    },
  ];

  return (
    <section className="container mx-auto p-6 font-sans bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Experiences</h1>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        
        {experiences.map((experience, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="order-1 w-5/12">
              <div className={`shadow-lg rounded-lg p-6 ${experience.bgColor} border ${experience.borderColor}`}>
                <h3 className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
                <h4 className="text-xl font-medium text-gray-400 mb-2">{experience.company}</h4>
                <p className="text-gray-500 mb-4">{experience.years}</p>
                <ul className="list-disc list-inside pl-4 text-gray-300">
                  {experience.desc.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`z-20 flex items-center order-1 ${experience.numberColor} shadow-xl w-8 h-8 rounded-full`}>
              <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
            </div>
            <div className="order-1 w-5/12"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
