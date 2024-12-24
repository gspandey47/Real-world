import React from 'react'

function Simple_card({name="BeautifuDestination",description=" Lorem ipsum dolor sit amet,Lorem ipsum dolor", click}) {
  return (
    <>
    
    <div className="flex items-center justify-center h-[290px] bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg md:w-[270px] ">
      <div className="max-w-md lg:w-full  lg:bg-white   rounded-lg shadow-md overflow-hidden transform transition  hover:scale-105 hover:shadow-lg">
        <img
          className="lg:w-32 lg:h-32 h-12 w-12 rounded-full border mx-auto border-black object-cover"
          src="https://via.placeholder.com/400x200"
          alt=""
        />
        <div className="lg:p-6 md:p-2">
          <h6 className="lg:text-xl text-sm lg:font-semibold text-gray-800">{name}</h6>
          

          <div className="lg:mt-4  md:mt-4 flex flex-col justify-center content-center">
            <p className="text-gray-700 text-sm py-2">
             {description}
              
            </p>
        

          
            <button className="lg:w-full w-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white lg:py-2 lg:px-4 rounded-lg shadow-md hover:opacity-90 transition"onClick={click}>              Explore 
            </button>
          </div>
        </div>
      </div>
    </div>
 


    </>
  )
}

export default Simple_card