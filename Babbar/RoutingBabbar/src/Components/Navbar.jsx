import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
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


    <div className="flex mt-8 h-screen w-24">
      {/* Sidebar */}
      <div
        className={`
          fixed flex flex-col rounded-tr-lg w-20 mt-12 top-0 left-0  h-10 md:w-32 md:h-[480px]  lg:h-full lg:w-[108px] border  md:bg-purple-600 text-white 
          
           
        `}>
       
       <button 
            className="bg-purple-800 p-2 w-10 h-10 rounded-full hover:bg-purple-900
            "onClick={toggleSidebar}
          >
            {/* Icon */}
            {isOpen ? (
              <span>&#10005;</span> // Close Icon
            ) : (
              <span>&#9776;</span> // Hamburger Icon
            )}
          </button> 
        
        <nav className={` ${isOpen ? 'translate-x-0' : '-translate-x-32'} mt-4 
        h-[350px] transition-transform transform w-24 bg-neutral-700-to-r from-white-500 to-white-800 text-purple-500  font-bold`}>
        <ul className='flex gap-y-2 flex-col py-6'>
            <li className='text-sm'><NavLink to='/' className={({isActive})=>isActive?"Active":""}>Home</NavLink></li>
            <li className='text-sm'><NavLink to='/about' className={({isActive})=>isActive?"Active":""}>About</NavLink></li>

            <li className='text-sm'><NavLink to='/dashboard' className={({isActive})=>isActive?"Active":""}>Dashboard</NavLink></li>

            <li className='text-sm'><NavLink to='/leave' className={({isActive})=>isActive?"Active":""}>Leave</NavLink></li>

            <li className='text-sm'><NavLink to='/dtl' className={({isActive})=>isActive?"Active":""}>Personal Detail</NavLink></li>

            <li className='text-sm'><NavLink to='/att' className={({isActive})=>isActive?"Active":""}>Attendance</NavLink></li>

            <li className='text-sm'><NavLink to='/Att_dtl' className={({isActive})=>isActive?"Active":""}>Att_Dtl</NavLink></li>

            <li className='text-sm'><NavLink to='/shift' className={({isActive})=>isActive?"Active":""}>Shift</NavLink></li>

            <li className='text-sm'><NavLink to='/view' className={({isActive})=>isActive?"Active":""}>View</NavLink></li>
            <li className='text-sm'><NavLink to='/Register' className={({isActive})=>isActive?"Active":""}>Register</NavLink></li>
        </ul>
        </nav>
      </div>

      
    </div>


    </>
  )
}

export default Navbar