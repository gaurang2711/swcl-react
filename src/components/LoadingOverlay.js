import React from 'react';
import './LoadingOverlay.css'; // Create a LoadingOverlay.css

function LoadingOverlay() {
    return (
        <div className="loading-overlay">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    );
}

export default LoadingOverlay;