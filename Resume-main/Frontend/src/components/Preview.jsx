/* eslint-disable react/prop-types */
// src/components/Preview.jsx
import React, { useRef } from 'react';
import ModernTemplate from './templates/ModernTemplates';
import ClassicTemplate from './templates/ClassicTemplate';
import CreativeTemplate from './templates/CreativeTemplate';

const Preview = ({ resumeData, setPreviewRef }) => {
  const { selectedTemplate } = resumeData;
  const previewRef = useRef();

  // Set the ref in the parent component
  React.useEffect(() => {
    setPreviewRef(previewRef);
  }, [setPreviewRef]);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      case 'creative':
        return <CreativeTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="p-4 border-l border-gray-300 w-1/2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
      <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
      <div ref={previewRef}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;