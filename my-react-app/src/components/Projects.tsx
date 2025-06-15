import React from 'react';
import '../styles/Projects.css';
import bookNestImage from '../assets/bookNest.png';
import chatbotImage from '../assets/chatbot.png';
import gymWeb from '../assets/gymWeb.png';
const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Online Library Platform',
      description: 'A full-stack library platform that allows users to search for books and read them online.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Microsoft Azure', 'mySQL'],
      image: bookNestImage,
      liveLink: 'https://www.youtube.com/watch?v=SyOCbhsD6iU',
      githubLink: 'https://github.com/hunterShierman/BookNest'
    },
    {
      title: 'AI Language Tutor',
      description: 'An AI language tutor that uses natural language processing to help users learn a new language.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      image: chatbotImage,
      liveLink: 'https://www.youtube.com/watch?v=SjBt2FPR33M',
      githubLink: 'https://github.com/hunterShierman/translatorBot'
    },
    {
      title: 'Health and Fitness Platform',
      description: 'A fitness tracker website that allows users to track their workouts, progress, and nutrition.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      image: gymWeb,
      liveLink: 'https://huntershierman.github.io/fitness-website/home/test-home.html',
      githubLink: 'https://github.com/hunterShierman/fitness-website'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="primary-btn">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="secondary-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 