import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Splitwise Clone', description: 'A microservices-based expense sharing app.' },
    { name: 'Banking System', description: 'A Spring Boot-based microservice project for banking operations.' },
    { name: 'Personal Nutritionist App', description: 'A project aimed at personalized nutrition advice.' }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
