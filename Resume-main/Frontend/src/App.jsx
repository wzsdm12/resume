import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PersonalInformation from './components/PersonalInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactInformation from './components/ContactInformation';
import AwardCertification from './components/AwardCertification';
import HomePage from './components/HomePage';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';
import { useResume } from './Context/ResumeContext';
import './App.css';

function App() {
    const sections = ['Personal Information', 'Education', 'Experience', 'Contact Information', 'Award/Certification'];
    const [currentSection, setCurrentSection] = useState(0);
    const [resumeStarted, setResumeStarted] = useState(false);
    const [previewRef, setPreviewRef] = useState(null);
    const { state } = useResume();

    const nextSection = () => {
        if (currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };

    const prevSection = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };

    const renderSection = () => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    {currentSection === 0 && <PersonalInformation />}
                    {currentSection === 1 && <Education />}
                    {currentSection === 2 && <Experience />}
                    {currentSection === 3 && <ContactInformation />}
                    {currentSection === 4 && <AwardCertification />}
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage setResumeStarted={setResumeStarted} />} />
                <Route
                    path="/resume-builder"
                    element={
                        resumeStarted ? (
                            <>
                                <Header previewRef={previewRef} />
                                <div className="flex">
                                    <Sidebar sections={sections} currentSection={currentSection} setCurrentSection={setCurrentSection} />
                                    <div className="flex-grow p-4">
                                        <TemplateSelector />
                                        {renderSection()}
                                        <div className="flex justify-between mt-4">
                                            <motion.button
                                                onClick={prevSection}
                                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                                                disabled={currentSection === 0}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Previous
                                            </motion.button>
                                            <motion.button
                                                onClick={nextSection}
                                                className="bg-purple-700 text-white py-2 px-4 rounded"
                                                disabled={currentSection === sections.length - 1}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Next
                                            </motion.button>
                                        </div>
                                    </div>
                                    <Preview resumeData={state} setPreviewRef={setPreviewRef} />
                                </div>
                            </>
                        ) : (
                            <HomePage setResumeStarted={setResumeStarted} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;