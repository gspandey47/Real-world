import React, { useState } from 'react'
import Company_info from './card_container/Company_info';
import Card from './card_container/Card';
function Home() {

  

  return (
    <>
    
    <div className="container lg:h-full pl-5 md:pl-6  w-full h-full sm:px-6 lg:pl-6 bg-purple-900 flex flex-col-reverse space-x-3 py-5 gap-3 lg:py-10 pr-2  lg:flex-row rounded-bl-md md:ml-4 rounded-br-md shadow-xl">
   <Company_info/>
    <Card/>
    </div>
    
   
    
    


    
      
    </>
  )
}

export default Home