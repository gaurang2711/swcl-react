import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'; // Create a 404.css

function NotFound() {
    return (
        <div className="error-container">
            <div className="error-code">404</div>
            <div className="error-message">Oops! The page you're looking for could not be found.</div>
            <Link to="/" className="back-home">Go back to Home</Link>
        </div>
    );
}

export default NotFound;