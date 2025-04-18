import React from 'react'

function GetStartedSection() {
  return (
    <>
        <section className=' w-full border-b border-black/12 bg-white mb-12'>
        <div className='container border-x border-black/12 m-auto '>
        <div className='bg-black py-32 px-24 flex flex-col justify-start'>
            <h2 className='text-white font-financier text-5xl mb-3'>Let's get started</h2>
            <p className='text-[#8891A3] max-w-[480px] mb-8'>Get paid faster with Copperx Payments and Instantly create an account to start boosting your business, or contact us for a custom package tailored just for you.</p>
            <div className='flex gap-3' >
                <button className='blue-button'>Get started</button>
                <button className='white-button'>Get in Touch</button>
            </div>
        </div>
        </div>

        </section>
    </>
  )
}

export default GetStartedSection