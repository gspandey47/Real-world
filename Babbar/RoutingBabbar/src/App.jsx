import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Dynamic from './Components/Dynamic';
import Header from './Components/Header';
import Attendence from './Components/Attendence';
import Leave from './Components/Leave';
import Personal_Dtl from './Components/Personal_Dtl';
import Att_detail from './Components/Att_detail';
import Shift from './Components/Shift';
import View from './Components/View';
import Contact from './Components/View/Contact';
import Employeement from './Components/View/Employeement';
import Experience from './Components/View/Experience';
import Nominee from './Components/View/Nominee';
import Personal from './Components/View/Personal';
import Qualification from './Components/View/Qualification';
import Register from './Components/Page/Register';
import Login from './Components/Page/Login';
import Job from './Components/Page/Job_register';
import Admin from './Components/Admin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <div className="flex h-full">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />
          <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
          <Route path="/att" element={<><Navbar /><Attendence /></>} />
          <Route path="/leave" element={<><Navbar /><Leave /></>} />
          <Route path="/dtl" element={<><Navbar /><Personal_Dtl /></>} />
          <Route path="/Att_dtl" element={<><Navbar /><Att_detail /></>} />
          <Route path="/shift" element={<><Navbar /><Shift /></>} />
          <Route path="/view" element={<><Navbar /><View /></>} />
          <Route path="/Register" element={<><Navbar /><Register /></>} />
          <Route path="/Login" element={<><Navbar /><Login /></>} />
          <Route path="/Job_Registration" element={<><Navbar /><Job /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Employeement" element={<Employeement />} />
          <Route path="/Exceperience" element={<Experience />} />
          <Route path="/Nominee" element={<Nominee />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Qualification" element={<Qualification />} />
          <Route path="/student/:id" element={<><Navbar /><Dynamic /></>} />
          <Route path="/admin" element={<><Navbar /><Admin /></>} /> {/* Admin Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
