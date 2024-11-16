// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';  // Updated import
// import api from '../api';

// const CarForm = ({ isEdit = false }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [tags, setTags] = useState('');
//     const [images, setImages] = useState([]);
//     const { id } = useParams();
//     const navigate = useNavigate();  // Updated hook

//     useEffect(() => {
//         if (isEdit && id) {
//             const fetchCar = async () => {
//                 try {
//                     const response = await api.get(`/cars/${id}`);
//                     const { title, description, tags, images } = response.data;
//                     setTitle(title);
//                     setDescription(description);
//                     setTags(tags.join(', '));
//                     setImages(images);
//                 } catch (error) {
//                     console.error('Error fetching car data:', error);
//                 }
//             };
//             fetchCar();
//         }
//     }, [id, isEdit]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const carData = {
//             title,
//             description,
//             tags: tags.split(',').map((tag) => tag.trim()),
//             images,
//         };

//         try {
//             if (isEdit) {
//                 await api.put(`/cars/${id}`, carData);
//             } else {
//                 await api.post('/cars', carData);
//             }
//             navigate('/cars');  // Updated navigate
//         } catch (error) {
//             console.error('Error saving car:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Form fields here */}
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default CarForm;

import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const AddCarPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const carData = {
            title,
            description,
            tags: tags.split(',').map(tag => tag.trim()),
            images
        };

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('tags', tags);
            images.forEach((image, idx) => formData.append('images', image));

            await api.post('/cars', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            navigate('/');
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <div className="form-container">
            <h2>Add a New Car</h2>
            <form onSubmit={handleSubmit} className="car-form">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tags (comma separated)</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Car Images</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="btn">Add Car</button>
            </form>
        </div>
    );
};

export default AddCarPage;
