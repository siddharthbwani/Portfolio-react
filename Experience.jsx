import React from 'react';

const Experience = () => {
  const experiences = [
    { role: "Software Test Engineer", company: "TestersHub", duration: "2025 - Present" },
    { role: "Intern", company: "Qspiders", duration: "2024 - 2025" },
  ];
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 border-b">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="max-w-3xl space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-gray-700">{exp.company} | {exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
