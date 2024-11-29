import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {
  const [toggle,setToggle]=useState(null)
  const handleToggle= ()=>{
    setToggle(!toggle)
  }
  return (
    <BrowserRouter>
    <div className={`${toggle?'bg-purple-300':'bg-purple-400'} min-h-screen`}>
      <Navbar handleToggle={handleToggle}/>
      <Routes>  
    <Route path='/' element={<Body/>}/>
    <Route path='/about' element={<About/>}/>

      </Routes>
      <ToastContainer/>
    </div>
    </BrowserRouter>
  )
}

export default App
