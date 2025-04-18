import React from 'react'
import Hero from '../assets/images/Hero.png';

function HeroSection() {
    return (
        <>
        <div className=' w-full border-b border-black/12 bg-white transition-all '> 
            <div className=' container border-x border-black/12  m-auto bg-cover bg-center bg-no-repeat w-full h-[75vh]' style={{ backgroundImage: `url(${Hero})` }}>
                <div className='flex flex-col text-center items-center' >
                    <h2 className='gray font-semibold mt-28'>COMPARISONS</h2>
                    <h1 className='common-blue mt-2 text-7xl font-financier max-w-[916px]' >How does Copperx <span className=' text-[#4C63ED]'>compare </span>to the competition?</h1>
                    <p className='gray mt-4 text-lg max-w-[660px] '>Experience a seamless payment process and boost sales in your e-commerce store by accepting digital currencies. Discover the benefits of secure</p>
                    <div className='mt-8 flex gap-3 '>
                        <button className='black-button'>Get Started</button>
                        <button className='white-button'>View Demo</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HeroSection