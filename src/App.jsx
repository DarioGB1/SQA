import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Login from './Login/Login.jsx';
import Register from './Login/Register.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Router>
      <Navbar/>
      






    
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path='register' element={<Register/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
