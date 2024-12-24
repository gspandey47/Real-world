import React from 'react'
import { useNavigate } from 'react-router-dom'
function Pre_btn() {
    const Navigater=useNavigate();
    const Contact_click=()=>{
        Navigater('/view');
    };
    
    
  return (
    <div>
          <button className="lg:w-[190px] w-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white lg:py-2 lg:px-4 rounded-lg shadow-md hover:opacity-90 transition"
          onClick={Contact_click}> Go to View Page
          </button>
    </div>
  )
}

export default Pre_btn