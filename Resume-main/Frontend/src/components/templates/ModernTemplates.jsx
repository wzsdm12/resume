/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/templates/ModernTemplates.jsx
import React from 'react';

const ModernTemplate = ({ resumeData }) => {
  const { personalInfo, education, experience, contactInformation, awards } = resumeData;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <p className="text-xl text-gray-600">{personalInfo.profession}</p>
      </header>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Contact Information</h2>
        <p>Email: {contactInformation.email}</p>
        <p>Phone: {contactInformation.phone}</p>
        <p>Address: {contactInformation.address}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-lg font-medium">{edu.school}</h3>
            <p>{edu.degree} in {edu.fieldOfStudy}</p>
            <p>Graduated: {edu.graduationYear}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-lg font-medium">{exp.company} - {exp.position}</h3>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Awards and Certifications</h2>
        {awards.map((award, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-lg font-medium">{award.title}</h3>
            <p>{award.date}</p>
            <p>{award.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ModernTemplate;