/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ResumeContext = createContext();

const initialState = {
  personalInfo: {},
  education: [],
  experience: [],
  skills: [],
  awards: [],
  contactInformation: {},
  selectedTemplate: 'modern',
  savedTemplates: [],
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case 'UPDATE_EDUCATION':
      return { ...state, education: action.payload };
    case 'UPDATE_EXPERIENCE':
      return { ...state, experience: action.payload };
    case 'UPDATE_SKILLS':
      return { ...state, skills: action.payload };
    case 'UPDATE_AWARDS':
      return { ...state, awards: action.payload };
    case 'UPDATE_CONTACT_INFO':
      return { ...state, contactInformation: { ...state.contactInformation, ...action.payload } };
    case 'CHANGE_TEMPLATE':
      return { ...state, selectedTemplate: action.payload };
    case 'SAVE_TEMPLATE':
      return { ...state, savedTemplates: [...state.savedTemplates, action.payload] };
    case 'LOAD_TEMPLATE':
      return { ...action.payload, savedTemplates: state.savedTemplates };
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('resumeState');
    if (savedState) {
      dispatch({ type: 'LOAD_TEMPLATE', payload: JSON.parse(savedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resumeState', JSON.stringify(state));
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}