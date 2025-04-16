import React from 'react'
import logo from '../assets/Full.png';

function header() {
  return (
    <>
      <header>
        <div className='container flex justify-between items-center m-auto mt-6 '>
          <a href='#'><img className='w-[118px] cursor-pointer' src={logo} /></a>
          <div className='gray gap-4 flex cursor-pointer'>
            <a href=''>Product</a>
            <a href=''>Devlopment</a>
            <a href=''>About</a>
          </div>
          <button className='black-button' >Get Early Access</button>
        </div>
      </header>

    </>
  )
}

export default header