import React, { useState } from 'react'
import { toast } from 'react-toastify';
const Body = () => {
  const [text, setText]=useState('');

  const handleOnChange=(e)=>{
    setText(e.target.value) ;
  }
  const handleLoClick=()=>{
    setText(text.toLowerCase())
  }
  const handleUpClick=()=>{
    setText(text.toUpperCase())
  }
  const handleClear=()=>{
    setText('');
  
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    toast("Copyed Successfully")
  }
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-6'>
        <textarea className="textarea w-[600px] textarea-primary" value={text} onChange={handleOnChange}  placeholder='Enter Text' ></textarea>
        <div className='flex mt-5 gap-4'>
          <button className="btn btn-outline btn-primary" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-outline btn-primary" onClick={handleLoClick}>Lowercase</button>
          <button className="btn btn-outline btn-primary" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-outline btn-primary" onClick={handleClear}>Clear Text</button>


        </div>
        </div>
    </div>
  )
}

export default Body

