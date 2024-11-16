// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// import api from '../api';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate hook

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await api.post('/auth/login', { email, password });
//             localStorage.setItem('token', response.data.token);

//             // Use navigate instead of history.push
//             navigate('/'); // Redirect to the home page after successful login
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
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
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// // export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
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
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

