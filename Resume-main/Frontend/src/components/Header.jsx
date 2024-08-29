/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { useResume } from '../Context/ResumeContext';

const Header = ({ previewRef }) => {
  const { state, dispatch } = useResume();
  const [showSavedTemplates, setShowSavedTemplates] = useState(false);

  const exportPDF = async () => {
    if (previewRef.current) {
      const canvas = await toPng(previewRef.current, { quality: 0.95 });
      const pdf = new jsPDF();
      pdf.addImage(canvas, 'JPEG', 0, 0, 210, 297); // A4 size
      pdf.save('resume.pdf');
    }
  };

  const saveCurrentTemplate = () => {
    const templateName = prompt("Enter a name for this template:");
    if (templateName) {
      const templateToSave = {
        name: templateName,
        data: { ...state, savedTemplates: undefined }  // Exclude savedTemplates to avoid circular reference
      };
      dispatch({ type: 'SAVE_TEMPLATE', payload: templateToSave });
    }
  };

  const loadTemplate = (template) => {
    dispatch({ type: 'LOAD_TEMPLATE', payload: template.data });
    setShowSavedTemplates(false);
  };

  return (
    <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Resumo Resume Builder</h1>
      <div className="flex space-x-4">
        <button 
          onClick={saveCurrentTemplate}
          className="bg-white text-purple-700 py-2 px-4 rounded hover:bg-purple-100 transition duration-300"
        >
          Save Template
        </button>
        <button 
          onClick={() => setShowSavedTemplates(!showSavedTemplates)}
          className="bg-white text-purple-700 py-2 px-4 rounded hover:bg-purple-100 transition duration-300"
        >
          Saved Templates
        </button>
        <button 
          onClick={exportPDF}
          className="bg-white text-purple-700 py-2 px-4 rounded hover:bg-purple-100 transition duration-300"
        >
          Export PDF
        </button>
      </div>
      {showSavedTemplates && (
        <div className="absolute top-16 right-4 bg-white text-purple-700 p-4 rounded shadow-lg">
          <h3 className="font-bold mb-2">Saved Templates</h3>
          {state.savedTemplates.map((template, index) => (
            <button 
              key={index} 
              onClick={() => loadTemplate(template)}
              className="block w-full text-left py-2 px-4 hover:bg-purple-100"
            >
              {template.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;