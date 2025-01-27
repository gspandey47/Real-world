import { useState } from 'react'

import Navbar from './Components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Dynamic from './Components/Dynamic'
import Header from './Components/Header'
import Attendence from './Components/Attendence'
import Leave from './Components/Leave'
import Personal_Dtl from './Components/Personal_Dtl'
import Att_detail from './Components/Att_detail'
import Shift from './Components/Shift'
import Sidebar from './Components/Sidebar'
import View from './Components/View'
import Contact from './Components/View/Contact'
import Employeement from './Components/View/Employeement'
import Experience from './Components/View/Experience'
import Nominee from './Components/View/Nominee'
import Personal from './Components/View/Personal'
import Qualification from './Components/View/Qualification'
import Register from './Components/Page/Register'
import Login from './Components/Page/login'
import Job from './Components/Page/Job_register'

const router=createBrowserRouter([

  {
path:'/',
element:<><Navbar/><Home/></>

  },

  {
path:'/about',
element:<><Navbar/><About/></>

  },
  {
 path:'/dashboard',
 element:<><Navbar/><Dashboard/></>
    
  },
  {
 path:'/att',
 element:<><Navbar/><Attendence/></>
    
  },
  {
 path:'/leave',
 element:<><Navbar/><Leave/></>
    
  },
  {
 path:'/dtl',
 element:<><Navbar/><Personal_Dtl/></>
    
  },
  {
 path:'/Att_dtl',
 element:<><Navbar/><Att_detail/></>
    
  },
  {
 path:'/shift',
 element:<><Navbar/><Shift/></>
    
  },
  {
 path:'/view',
 element:<><Navbar/><View/></>
    
  },
  {
 path:'/Register',
 element:<><Navbar/><Register/></>
    
  },
  {
 path:'/Login',
 element:<><Navbar/><Login/></>
    
  },
  {
 path:'/Job_Registration',
 element:<><Navbar/><Job/></>
    
  },
  {
 path:'/contact',
 element:<><Contact/></>
    
  },
  {
 path:'/Employeement',
 element:<><Employeement/></>
    
  },
  {
 path:'/Exceperience',
 element:<><Experience/></>
    
  },
  
  {
 path:'/Nominee',
 element:<><Nominee/></>
    
  },
  {
 path:'/Personal',
 element:<><Personal/></>
    
  },
  {
 path:'/Qualification',
 element:<><Qualification/></>
    
  },
  {
 path:'/student/:id',
 element:<><Navbar/><Dynamic/></>
    
  }
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

    <div>

        <Header/>
        
        </div>
       <div className='flex h-full '>
       <RouterProvider router={router}/> 
      
    
      </div> 
    </>
  )
}

export default App
