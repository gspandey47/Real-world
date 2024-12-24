import React from 'react'
// import Navbar from './Navbar'

function Header() {
  return (
    <div className=' flex h-12 w-full rounded-t-sm border border-purple-700 bg-purple-700'>
        {/* <button><img src="./src/assets/react.svg" alt="" /></button> */}
        <a href="" className='py-3 px-3 flex items-center gap-2'>
        <img src="./src/assets/pet.jpeg" alt="" className='h-[40px] w-[40px] rounded-full'/>
            <span className='text-white'>EMPLOYEE MANAGEMENT SYSTEM</span>
        </a>
        
    </div>
  )
}

export default Header