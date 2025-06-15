import React from 'react';
import '../styles/Hero.css';
import headshot from '../assets/Professional Headshot.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-image">
            <img src={headshot} alt="Hunter Shierman" />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Hunter Shierman</span></h1>
            <h2>Analytics Engineer</h2>
            <p>Currently working at Scotiabank building and maintaining data pipelines</p>
            <div className="cta-buttons">
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/hunterShierman" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/hunter-shierman-5a79892b1/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 