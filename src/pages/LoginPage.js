
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Assuming you are using React Router
import api from '../api';  // Importing the API instance

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // API call to login
            const response = await api.post('/auth/login', { email, password });

            // Assuming the backend returns a token
            localStorage.setItem('token', response.data.token);

            // Redirecting to home page (or any other page)
            navigate('/');
        } catch (error) {
            // Log the error to inspect it
            console.error('Login error:', error);

            // More detailed error handling based on the response
            if (error.response) {
                // Server responded with a non-2xx status code
                alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
            } else if (error.request) {
                // Request was made but no response was received
                alert('No response from server. Please try again later.');
            } else {
                // Something else went wrong
                alert('Error: ' + error.message);
            }
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;