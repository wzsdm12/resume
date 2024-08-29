/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from './ModelBuilding';
import { Lumiflex } from 'uvcanvas';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

const HomePage = ({ setResumeStarted }) => {
    const navigate = useNavigate();

    const handleStartResume = () => {
        setResumeStarted(true);
        navigate('/resume-builder');
    };

    return (
        <div className="full-width-background" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <Lumiflex className="absolute inset-0 z-0" />
            <div className="overlay"></div>
            <div className="absolute top-right-buttons z-20">
                <button className="button-outline">
                    <SignedOut>
                        <SignInButton className="font-bold uppercase"/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </button>
            </div>
            <div className="canvas-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 10, 2]} intensity={1} />
                    <OrbitControls enableZoom={false} />
                    <Model
                        path="/buildingfile.glb"
                        scale={[0.5, 0.5, 0.5]}
                        rotation={[Math.PI / 9, Math.PI / 5, 0]}
                    />
                </Canvas>
            </div>
            <div className="text-container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Welcome to Your Resume Builder
                </h1>
                <p className="text-lg md:text-2xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                    Start building your professional resume in just a few clicks.
                </p>
                <button
                    onClick={handleStartResume}
                    className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-500 hover:to-purple-700 text-white py-3 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate__animated animate__pulse animate__infinite"
                >
                    Start Your Resume
                </button>
            </div>
        </div>
    );
};

export default HomePage;