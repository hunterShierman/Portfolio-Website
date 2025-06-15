import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/project1.jpg',
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: '/project2.jpg',
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays forecast data using external APIs.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
      image: '/project3.jpg',
      liveLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project3'
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