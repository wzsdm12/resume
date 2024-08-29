/* eslint-disable no-unused-vars */
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const Education = () => {
  const { state, dispatch } = useResume();

  const handleChange = (index, e) => {
    const newEducation = [...state.education];
    newEducation[index] = { ...newEducation[index], [e.target.name]: e.target.value };
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: newEducation
    });
  };

  const addEducation = () => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: [...state.education, { school: '', degree: '', fieldOfStudy: '', graduationYear: '' }]
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-purple-700 text-2xl mb-4">Education</h2>
      {state.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => handleChange(index, e)}
            placeholder="School"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            placeholder="Degree"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="fieldOfStudy"
            value={edu.fieldOfStudy}
            onChange={(e) => handleChange(index, e)}
            placeholder="Field of Study"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="graduationYear"
            value={edu.graduationYear}
            onChange={(e) => handleChange(index, e)}
            placeholder="Graduation Year"
          />
        </div>
      ))}
      <button onClick={addEducation} className="bg-purple-700 text-white py-2 px-4 rounded">
        Add Education
      </button>
    </div>
  );
};

export default Education;