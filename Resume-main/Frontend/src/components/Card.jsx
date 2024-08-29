/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
    return (
        <div className="card-container">
            {children}
        </div>
    );
};

export default Card;
