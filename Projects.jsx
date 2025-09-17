import React from 'react';

const Projects = () => {
  const projects = [
    { title: "Timesheet Management Tool", description: "Manual and Automation Testing project using JIRA and Agile Scrum." },
    { title: "ActiTIME Testing Project", description: "Workflow testing with Admin, Manager, and Test Engineer roles." },
  ];
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 border-b">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
