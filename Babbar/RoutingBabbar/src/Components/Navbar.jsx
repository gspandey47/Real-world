import { useState } from "react";
import React from "react";
import "./Navbar.css";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaBriefcase,
  FaCog,
} from "react-icons/fa"; // Importing icons

import { NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <div className='border border-green-950'>
    <div className='border border-red-950'>
        
    </div>
    </div> */}

      <div className="flex mt-2 h-screen w-24">
        {/* Sidebar */}
        <div
          className={`
          fixed flex flex-col rounded-tr-lg w-24  mt-12 top-0 left-0  h-10 md:w-32 md:h-[480px]  lg:h-full lg:w-[127px] border lg:bg-gray-100  md:bg-purple-600 text-white 
          
           
        `}
        >
          <button
            className="bg-gray-50 text-gray-700 p-2 w-10 h-10 rounded-full hover:bg-purple-900
            "
            onClick={toggleSidebar}
          >
            {/* Icon */}
            {isOpen ? (
              <span>&#10005;</span> // Close Icon
            ) : (
              <span>&#9776;</span> // Hamburger Icon
            )}
          </button>

          <nav
            className={` ${isOpen ? "translate-x-0" : "-translate-x-32"} mt-2
        h-[350px] lg:h-[384px] transition-transform transform lg:w-[124px] bg-gray-50 text-gray-700`}
          >
            <ul className="flex lg:gap-y-4  gap-y-2 flex-col text-pretty px-4">
              <li className="text-sm">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-start">
                    <FaHome className="inline-block mr-2 text-lg" />
                    <span>Home</span>
                  </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  {" "}
                  <div className="flex items-center">
                    <FaUser className="inline-block mr-2 text-lg" />
                    <span>About</span>
                  </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/leave"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                    <FaCalendarAlt className="inline-block mr-2 text-lg" />
                    <span>Leave</span>
                  </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/shift"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                    {" "}
                    <FaBriefcase className="inline-block mr-2 text-lg" />{" "}
                    <span>Shift</span>{" "}
                  </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/view"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                     <FaCog className="inline-block mr-2 text-lg" />
                     <span>View</span>
                   </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                 <div className="flex items-center">
                     <FaHome className="inline-block mr-2 text-lg" />
                     <p >Dashboard</p>
                   </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/att"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                 <div className="flex items-center">
                     <FaCalendarAlt className="inline-block mr-2 text-lg" />
                     <span>Attendance</span>
                   </div>
                </NavLink>
              </li>

              {/* <li className='text-sm'><NavLink to='/dtl' className={({isActive})=>isActive?"Active":""}>Personal Detail</NavLink></li> */}

              <li className="text-sm">
                <NavLink
                  to="/Att_dtl"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                     <FaUser className="inline-block mr-2 text-lg" />
                     <span>Att_Dtl</span>
                   </div>
                </NavLink>
              </li>

              <li className="text-sm">
                <NavLink
                  to="/Register"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                     <FaUser className="inline-block mr-2 text-lg" />
                     <span>Register</span>
                   </div>
                </NavLink>
              </li>
              <li className="text-sm">
                <NavLink
                  to="/Login"
                  className={({ isActive }) => (isActive ? "Active" : "")}
                >
                  <div className="flex items-center">
                     <FaUser className="inline-block mr-2 text-lg" />
                     <span>Login</span>
                   </div>
                </NavLink>
              </li>

              {/* <li className='text-sm'><NavLink to='/Job_Registration' className={({isActive})=>isActive?"Active":""}>Job Registration</NavLink></li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;

