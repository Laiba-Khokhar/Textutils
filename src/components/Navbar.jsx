import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div className='flex justify-between bg-purple-400 h-[80px] text-white '>
        <h1 className='font-extrabold text-4xl p-5'>Textutils</h1>
        <div className=' flex justify-center gap-3 items-center'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <input type="checkbox" onClick={props.handleToggle} className="toggle toggle-primary mt-5 mx-4" defaultChecked />
    </div>
  )
}

export default Navbar