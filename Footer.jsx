import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-6 shadow-inner">
      <div className="max-w-6xl mx-auto text-center text-gray-700">
        &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
