import React from 'react'
import { useNavigate } from 'react-router-dom';
import Simple_card from './card_container/Simple_card'

function View() {
  
   const navigate=useNavigate();
      const Contact_click=()=>{
          navigate('/contact');
      };
      
      const Employeement=()=>{
          navigate('/Employeement');
      };
      const Exceperience_click=()=>{
          navigate('/Exceperience');
      };
      const Nominee_click=()=>{
          navigate('/Nominee');
      };
      const qualification_click=()=>{
          navigate('/Qualification');
      };
      const personal_click=()=>{
          navigate('/personal');
      };
  return (
    <>
    <div className='lg:bg-gradient-to-r from-purple-500 to-purple-800 lg:w-[1300px] lg:p-4 lg:ml-32 lg:mr-20 lg:mt-1 lg:h-full md:flex-col  md:w-[700px]   rounded-lg shadow-md  transform transition  hover:scale-95 hover:shadow-lg ml-2 mr-4 flex flex-row h-[620px] w-[290px] lg:flex-col pr-4'>

    <div className='flex lg:flex-row md:flex-row md:w-[600px] md:mx-auto lg:h-[400px] lg:gap-x-5  w-[150px] h-[250px] gap-y-4 md:gap-y-2 md:gap-x-2 flex-col lg:w-[1000px] lg:m-0 m-2 lg:p-4 rounded-xl'>


    <Simple_card name="contact" description="  your contact information this is usefull for company " click={Contact_click}/>
    <Simple_card name="Employement" description=' ptofile is here you can see your profile in the department' click={Employeement}/>
    <Simple_card name="Nominee" description='User Your Nominee section is Ready To Check Your Nominee ' click={Nominee_click}/>
   
    </div>

<div className='flex lg:flex-row md:flex-row border md:gap-x-2 md:mx-auto md:w-[600px] lg:h-[400px] lg:gap-x-5  w-[150px] flex-col lg:w-[1000px] lg:p-5 rounded-xl h-[250px] lg:m-0 m-2 gap-y-4'>

    <Simple_card name='Qualification' description=' This is Your qualification Goodluck For your career.'click={qualification_click}/>
    <Simple_card name='Exceperience' description=' Your Exceperince  this is more useful for your career' click={Exceperience_click}/>
    <Simple_card name='Personal Detail' description=' your Personal Detail this must necessary.' click={personal_click}/>
    
</div>
</div>
   
    </>
  )
}

export default View