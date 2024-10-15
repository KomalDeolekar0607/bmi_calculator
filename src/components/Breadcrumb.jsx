import React from 'react';
import bgImage from '../assets/bg.png'; // Adjust the path as necessary

const Breadcrumb = () => {
    return (
        <div 
            className="breadcrumb-section" 
            style={{ 
                background: `url(${bgImage}) no-repeat center center`, 
            }}
        >
            <div className="breadcrumb-text">
                <h2>Calculator</h2>
                <div className="bt-option">
                    <a href="/">Home</a>
                    <span>/</span>
                    <a href="/bmi">BMI Calculator</a>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
