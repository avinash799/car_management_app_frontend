import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // Updated import
import api from '../api';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  // Updated hook

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await api.get(`/cars/${id}`);
                setCar(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching car:', error);
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    const handleDelete = async () => {
        try {
            await api.delete(`/cars/${id}`);
            navigate('/cars');  // Updated navigate
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    const handleEdit = () => {
        navigate(`/cars/edit/${id}`);  // Updated navigate
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{car.title}</h2>
            <img src={car.images[0]} alt={car.title} />
            <p>{car.description}</p>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default CarDetail;
