/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/templates/CreativeTemplate.jsx
import React from 'react';

const CreativeTemplate = ({ resumeData }) => {
  const { personalInfo, education, experience, contactInformation, awards } = resumeData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-purple-400 to-indigo-600 text-white rounded-lg shadow-lg">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <p className="text-2xl mt-2">{personalInfo.profession}</p>
      </header>
      
      <section className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
        <p>Email: {contactInformation.email}</p>
        <p>Phone: {contactInformation.phone}</p>
        <p>Address: {contactInformation.address}</p>
      </section>

      <section className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p>{edu.degree} in {edu.fieldOfStudy}</p>
            <p>Graduated: {edu.graduationYear}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 bg-white bg-opacity-20 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-semibold">{exp.company} - {exp.position}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white bg-opacity-20 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">Awards and Certifications</h2>
        {awards.map((award, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-xl font-semibold">{award.title}</h3>
            <p>{award.date}</p>
            <p>{award.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CreativeTemplate;