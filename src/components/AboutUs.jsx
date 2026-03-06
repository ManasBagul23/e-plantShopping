import React from 'react';
import { FaLeaf, FaSeedling, FaHeart, FaTruck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p className="about-tagline">Growing Dreams, One Plant at a Time</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-icon">
            <FaLeaf />
          </div>
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple mission: to bring the beauty 
            and benefits of plants into every home. What started as a small garden 
            in our backyard has blossomed into a thriving nursery dedicated to 
            providing the highest quality plants to plant enthusiasts everywhere.
          </p>
        </section>

        <section className="about-section">
          <div className="about-icon">
            <FaSeedling />
          </div>
          <h2>Our Mission</h2>
          <p>
            We believe that everyone deserves to experience the joy of nurturing 
            plants. Our mission is to make plant parenthood accessible, enjoyable, 
            and rewarding. We carefully select and nurture each plant to ensure 
            it arrives at your doorstep healthy and ready to thrive.
          </p>
        </section>

        <section className="about-section">
          <div className="about-icon">
            <FaHeart />
          </div>
          <h2>Why Choose Us</h2>
          <ul className="about-list">
            <li>Hand-selected, premium quality plants</li>
            <li>Expert care guides for every plant</li>
            <li>Sustainable and eco-friendly practices</li>
            <li>Wide variety of indoor, aromatic, and medicinal plants</li>
            <li>Dedicated customer support</li>
          </ul>
        </section>

        <section className="about-section">
          <div className="about-icon">
            <FaTruck />
          </div>
          <h2>Our Promise</h2>
          <p>
            Every plant that leaves Paradise Nursery is guaranteed to be healthy 
            and vibrant. We take extra care in packaging to ensure your green 
            companions arrive safely. If you're not completely satisfied, we'll 
            make it right.
          </p>
        </section>
      </div>

      <div className="about-footer">
        <p>
          Join our community of plant lovers and transform your space into a 
          green paradise!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
