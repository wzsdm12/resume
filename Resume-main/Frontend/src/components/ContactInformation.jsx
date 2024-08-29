/* eslint-disable no-unused-vars */
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const ContactInformation = () => {
  const { state, dispatch } = useResume();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_CONTACT_INFO',
      payload: { [e.target.name]: e.target.value }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-purple-700 text-2xl mb-4">Contact Information</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            value={state.contactInformation.email || ''}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="phone"
            value={state.contactInformation.phone || ''}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="address"
            value={state.contactInformation.address || ''}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;