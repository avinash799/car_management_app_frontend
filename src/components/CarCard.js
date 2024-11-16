// import React from 'react';
// import { Link } from 'react-router-dom';

// const CarCard = ({ car }) => {
//     return (
//         <div className="car-card">
//             <img src={car.images[0]} alt={car.title} />
//             <h3>{car.title}</h3>
//             <p>{car.description}</p>
//             <Link to={`/cars/${car._id}`}>View Details</Link>
//         </div>
//     );
// };

// export default CarCard;

import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.images[0]} alt={car.title} className="car-image" />
            <div className="car-info">
                <h3>{car.title}</h3>
                <p>{car.description}</p>
                <p><strong>Tags:</strong> {car.tags.join(', ')}</p>
                <Link to={`/cars/${car._id}`} className="btn btn-info">View Details</Link>
            </div>
        </div>
    );
};

export default CarCard;
