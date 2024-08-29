/* eslint-disable no-unused-vars */
// src/components/TemplateSelector.jsx
import React from 'react';
import { useResume } from '../Context/ResumeContext';

const TemplateSelector = () => {
  const { state, dispatch } = useResume();

  const handleTemplateChange = (template) => {
    dispatch({ type: 'CHANGE_TEMPLATE', payload: template });
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Template</h3>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${state.selectedTemplate === 'modern' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTemplateChange('modern')}
        >
          Modern
        </button>
        <button
          className={`px-4 py-2 rounded ${state.selectedTemplate === 'classic' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTemplateChange('classic')}
        >
          Classic
        </button>
        <button
          className={`px-4 py-2 rounded ${state.selectedTemplate === 'creative' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTemplateChange('creative')}
        >
          Creative
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;