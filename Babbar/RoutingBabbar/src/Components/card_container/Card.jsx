import React from 'react'
// import EmployeeIDCard from './EmployeeIDCard'
function Card() {
  return (
    <>
        
       <div className="max-w-4xl lg:h-44 lg:w-96 lg:my-4 lg:p-4 bg-white w-48  overflow-hidden rounded-xl shadow-lg ">
      <div className="flex  lg:flex-row flex-shrink-0 flex-col items-center">
        {/* Employee Image */}
        <div className="lg:w-32 lg:h-32 h-20 w-20 rounded-full border-4 border-purple-500 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Employee"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Employee Information */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">jhingalala</h2>
          <p className="text-gray-600">Software Engineer</p>
          <div className="mt-3 text-sm text-gray-600">
            <p><span className="font-semibold">Employee ID:</span> 987654</p>
            <p><span className="font-semibold">Email:</span>jhinga.tu@example.com</p>
            <p><span className="font-semibold">Phone:</span> 91984 567890</p>
          </div>
        </div>
      </div>
    </div>
    {/* <EmployeeIDCard/> */}
    

    </>
  )
}

export default Card