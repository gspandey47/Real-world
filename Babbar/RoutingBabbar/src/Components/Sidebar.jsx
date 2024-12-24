// Import React and Tailwind CSS
import React, { useState } from 'react';

const Sidebar = () => {
  // State to control sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex mt-8 h-screen w-32">
      {/* Sidebar */}
      <div
        className={`
          fixed flex flex-row-reverse mt-12 top-0 left-0 h-full lg:w-48 border border-black bg-purple-600 text-white transition-transform transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-32'}
          w-36 shadow-lg
        `}>
       
       <button 
            className="bg-purple-800 p-2 w-10 h-10 rounded-full focus:outline-none hover:bg-purple-900
            "onClick={toggleSidebar}
          >
            {/* Icon */}
            {isOpen ? (
              <span>&#10005;</span> // Close Icon
            ) : (
              <span>&#9776;</span> // Hamburger Icon
            )}
          </button> 
        
        <nav className="mt-4 p-4 border border-red-900 w-32">
          <ul>
            <li className="p-4 hover:bg-purple-500 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-purple-500 cursor-pointer">About</li>
            <li className="p-4 hover:bg-purple-500 cursor-pointer">Services</li>
            <li className="p-4 hover:bg-purple-500 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>

      
    </div>
  );
};

export default Sidebar;
