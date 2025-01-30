import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import { FaLandMineOn } from 'react-icons/fa6';
import { RiAdminFill } from 'react-icons/ri';
import { MdOutlineAppRegistration } from 'react-icons/md';

function Header() {
  return (
    <div className='flex justify-between items-center h-12 w-full rounded-t-sm border border-purple-800 bg-purple-900 px-4'>  
      {/* Logo and Title */}
      <a href="/" className='flex items-center gap-2'>
        <img src="./src/assets/pet.jpeg" alt="Logo" className='h-[40px] w-[40px] rounded-full'/>
        <span className='text-white font-semibold text-lg'>EMPLOYEE MANAGEMENT SYSTEM</span>
      </a>

      {/* Right Side Links */}
      <div className="flex gap-4 text-white hover:text-gray-300 transition ">
        <NavLink to="/admin" className={({isActive})=>isActive?"Activeuper":""}>
          <div className="flex items-center">
                              <RiAdminFill className="inline-block mr-2 text-lg" />
                              <span>Admin</span>
                            </div>
        </NavLink>
        <NavLink to="/job_registration"className={({isActive})=>isActive?"Activeuper":""}>
          <div className="flex items-center">
                              <MdOutlineAppRegistration className="inline-block mr-2 text-lg" />
                              <span>Job Registration</span>
                            </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
