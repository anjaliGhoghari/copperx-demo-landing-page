import React from 'react'
import logo from '../../assets/images/logo.png';

function header() {
  return (
    <>
      <header className="sticky z-10 top-0 w-full border-b border-black/12 bg-white">
        <div className='container border-x border-black/12 m-auto '>
          <div className='flex justify-between items-center p-6' >
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
        </div>

      </header>

    </>
  )
}

export default header