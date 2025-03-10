import { Search, Home, BookOpen } from 'lucide-react'; // Import icons
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-64 h-screen fixed top-16 left-0 flex flex-col shadow-md">
      <div className="p-6 flex flex-col w-full">
        <h2 className="text-lg mb-4 font-semibold text-gray-700">MAIN MENU</h2>
        <ul className="space-y-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-2 p-2 rounded-lg ${
                  isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-300"
                }`
              }
            >
              <Home />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                `flex items-center gap-2 p-2 rounded-lg ${
                  isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-300"
                }`
              }
            >
              <BookOpen />
              <span>Courses</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
