// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// import api from '../api';

// const SignupPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate hook

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }

//         try {
//             const response = await api.post('/auth/signup', { email, password });
//             localStorage.setItem('token', response.data.token);
//             navigate('/'); // Redirect to home page after successful signup
//         } catch (error) {
//             console.error('Signup failed:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Confirm Password</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await api.post('/auth/signup', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;
