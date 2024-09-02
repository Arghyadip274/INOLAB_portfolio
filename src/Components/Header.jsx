import React from 'react';
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-950  text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Gel Fuel Injector Project</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:italic">About</a></li>
            <li><a href="#team" className="hover:italic ">Team</a></li>
            <li><a href="#project-details" className="hover:italic">Project Details</a></li>
            <li><a href="#contact" className="hover:italic">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;