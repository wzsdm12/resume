/* eslint-disable no-unused-vars */
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const PersonalInformation = () => {
  const { state, dispatch } = useResume();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [e.target.name]: e.target.value }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-purple-700 text-2xl mb-4">Personal Information</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">First name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="firstName"
            value={state.personalInfo.firstName || ''}
            onChange={handleChange}
            placeholder="First name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Last name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="lastName"
            value={state.personalInfo.lastName || ''}
            onChange={handleChange}
            placeholder="Last name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Profession</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="profession"
            value={state.personalInfo.profession || ''}
            onChange={handleChange}
            placeholder="Profession"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;