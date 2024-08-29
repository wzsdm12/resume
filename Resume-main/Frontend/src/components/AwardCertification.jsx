/* eslint-disable no-unused-vars */
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const AwardCertification = () => {
  const { state, dispatch } = useResume();

  const handleChange = (index, e) => {
    const newAwards = [...state.awards];
    newAwards[index] = { ...newAwards[index], [e.target.name]: e.target.value };
    dispatch({
      type: 'UPDATE_AWARDS',
      payload: newAwards
    });
  };

  const addAward = () => {
    dispatch({
      type: 'UPDATE_AWARDS',
      payload: [...state.awards, { title: '', date: '', description: '' }]
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-purple-700 text-2xl mb-4">Awards and Certifications</h2>
      {state.awards.map((award, index) => (
        <div key={index} className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="text"
            name="title"
            value={award.title}
            onChange={(e) => handleChange(index, e)}
            placeholder="Title"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            type="date"
            name="date"
            value={award.date}
            onChange={(e) => handleChange(index, e)}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            name="description"
            value={award.description}
            onChange={(e) => handleChange(index, e)}
            placeholder="Description"
          ></textarea>
        </div>
      ))}
      <button onClick={addAward} className="bg-purple-700 text-white py-2 px-4 rounded">
        Add Award/Certification
      </button>
    </div>
  );
};

export default AwardCertification;