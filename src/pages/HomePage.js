import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For linking to other pages (like adding a car)
import api from '../api'; // Assuming you have an axios instance setup

const HomePage = () => {
    const [cars, setCars] = useState([]);

    // Fetch cars data when component mounts
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        fetchCars();
    }, []);

    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to the Car Management Application</h1>
                <Link to="/cars/create" className="btn btn-primary">Add a New Car</Link>
            </header>

            <section className="car-list">
                <h2>My Cars</h2>
                {cars.length === 0 ? (
                    <p>No cars found. Add a new car!</p>
                ) : (
                    <div className="car-cards">
                        {cars.map((car) => (
                            <div key={car._id} className="car-card">
                                <h3>{car.title}</h3>
                                <p>{car.description}</p>
                                <Link to={`/cars/${car._id}`} className="btn btn-link">View Details</Link>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;
