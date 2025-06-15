import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in web development.
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p>
              With experience in both front-end and back-end development, I enjoy working with modern technologies
              and frameworks to build innovative solutions.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <h3>Education</h3>
              <p>Bachelor's in Computer Science & Minor in Spanish</p>
            </div>
            <div className="detail-item">
              <h3>Experience</h3>
              <p>Analytics Engineer at Scotiabank</p>
            </div>
            <div className="detail-item">
              <h3>Location</h3>
              <p>Toronto, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 