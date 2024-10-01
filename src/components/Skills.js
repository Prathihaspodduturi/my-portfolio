import React from 'react';

const Skills = () => {
  const skills = ['Java', 'React', 'Spring Boot', 'Docker', 'Python', 'AWS'];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
