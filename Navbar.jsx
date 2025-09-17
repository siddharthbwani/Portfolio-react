import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
