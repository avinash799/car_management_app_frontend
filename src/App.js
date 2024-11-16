import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CarForm from './components/CarForm';
import CarDetail from './components/CarDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<HomePage />} />
        <Route path="/cars/create" element={<CarForm />} />
        <Route path="/cars/edit/:id" element={<CarForm />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
