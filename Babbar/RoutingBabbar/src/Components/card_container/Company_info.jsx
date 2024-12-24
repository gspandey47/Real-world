import React from 'react'; 



const Company_info = () => { return (
<>
<div className="max-w-2xl bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-xl shadow-lg pr-2 pl-2 lg:m-3 lg:p-12 flex flex-row lg:flex-col">
      {/* Header Section */}
      <div className="flex flex-row-reverse  lg:flex-row ">
        {/* Logo Section */}
        <div className="flex-shrink-0 lg:w-32 lg:h-32 h-24 w-24 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Company Logo"
            className="lg:w-28  w-20 h-20 lg:h-28 rounded-full object-cover"
          />
        </div>

        {/* Info Section */}
        
          <div className="text-base lg:text-lg">
          <h1 className="text-lg lg:text-5xl font-extrabold mb-4">Company Name</h1>
          <p className="text-lg lg:text-2xl ">Pioneering innovation and excellence.</p>
            <p><span className="font-semibold">Founded:</span> 2010</p>
            <p><span className="font-semibold">Headquarters:</span> San Francisco, CA</p>
            <p><span className="font-semibold">Employees:</span> 500+</p>
            <p><span className="font-semibold">Contact:</span> info@company.com</p>
            <button className=" hidden text-center bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 transition-all duration-300"><a href="">

          Learn More
      </a>
        </button>
      <div className="  lg:mt-12 text-center   ">
      <button className=" text-center bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-100 transition-all duration-300"><a href="">

          Learn More
      </a>
        </button>
      </div>
          </div>
        </div>
        
      

      {/* Footer Section */}
    </div>



</>
); 
}; export default Company_info;
