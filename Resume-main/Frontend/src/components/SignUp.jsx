// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Lumiflex } from 'uvcanvas';
// import Card from './Card';
// import './Card.css';

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/api/auth/register', formData);
//             console.log(res.data);
//             navigate('/');
//         } catch (error) {
//             console.error(error.response.data);
//         }
//     };

//     useEffect(() => {
//         const checkWebGLSupport = () => {
//             const canvas = document.createElement('canvas');
//             const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//             if (!gl) {
//                 console.error('WebGL is not supported');
//                 return false;
//             }
//             return true;
//         };

//         if (!checkWebGLSupport()) {
//             alert('WebGL is not supported by your browser.');
//         }
//     }, []);

//     return (
//         <div className="full-width-background" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
//             <Lumiflex className="absolute inset-0 z-0" />
//             <div className="overlay"></div>
//             <Card>
//                 <h2>Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
//                     <button type="submit">Sign Up</button>
//                     <button type="button" onClick={() => navigate('/')}>Back to Home</button>
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default SignUp;
