import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate=useNavigate();
    const HandleClick=()=>{
        navigate('/contact');
    }
  return (<>
  <div className='border border-green-800 lg:w-[1100px] lg:mt-1 lg:ml-10 lg:h-full'>

    <div>About page</div>
    <button onClick={HandleClick}>Move To contact</button>
  </div>
  </>
  )
}

export default About