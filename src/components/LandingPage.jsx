import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="landing-icon">
            <FaLeaf />
          </div>
          <h1 className="landing-title">Paradise Nursery</h1>
          <p className="landing-subtitle">
            Bring Nature Home - Discover Our Beautiful Collection of Plants
          </p>
          <p className="landing-description">
            Transform your space into a green paradise with our handpicked selection 
            of indoor, aromatic, and medicinal plants. Each plant is nurtured with 
            love and care to ensure it thrives in your home.
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
