/* eslint-disable no-unused-vars */
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const Experience = () => {
  const { state, dispatch } = useResume();

  const handleChange = (index, e) => {
    const newExperience = [...state.experience];
    newExperience[index] = { ...newExperience[index], [e.target.name]: e.target.value };
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      payload: newExperience
    });
  };

  const addExperience = () => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      payload: [...state.experience, { company: '', position: '', startDate: '', endDate: '', description: '' }]
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-purple-700 text-2xl mb-4">Experience</h2>
      {state.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="position"
            value={exp.position}
            onChange={(e) => handleChange(index, e)}
            placeholder="Position"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="startDate"
            value={exp.startDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="Start Date"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="endDate"
            value={exp.endDate}
            onChange={(e) => handleChange(index, e)}
            placeholder="End Date"
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            name="description"
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
          ></textarea>
        </div>
      ))}
      <button onClick={addExperience} className="bg-purple-700 text-white py-2 px-4 rounded">
        Add Experience
      </button>
    </div>
  );
};

export default Experience;