import React from 'react';

const Skills = () => {
  const skills = ["Manual Testing", "Automation (Selenium)", "API Testing (Postman)", "Java", "SQL", "Agile/Scrum"];
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 border-b">
      <h2 className="text-3xl font-bold mb-6">Skills / Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow rounded p-4 text-center">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
