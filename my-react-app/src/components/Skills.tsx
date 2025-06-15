import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'SQL', 'REST APIs']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'Agile']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 