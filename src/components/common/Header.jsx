import React from 'react'
import logo from '../../assets/images/logo.png';

function header() {
  return (
    <>
      <header>
        <div className='container flex justify-between items-center m-auto mt-6 '>
          <a href='#'><img className='w-[118px] cursor-pointer' src={logo} alt='logo' /></a>
          <nav>
          <ul className='gray gap-4 flex cursor-pointer'>
            <li>
            <a href=''>Product</a>
            </li>
            <li>
            <a href=''>Development</a>
            </li>
            <li>
            <a href=''>About</a>
            </li>
          </ul>
           
          </nav>
          <button className='black-button' >Get Early Access</button>
        </div>
      </header>

    </>
  )
}

export default header