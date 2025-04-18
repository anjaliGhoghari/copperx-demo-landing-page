import React, { useState } from 'react'
import aerrowDown from '../assets/images/Arrow Down.svg'



function QuestionSection() {
    const [isopen, setIsopen] = useState(false);
    const toggleDropdown = () => {
        setIsopen(!isopen);
    };
    return (
        <>
            <section className=' w-full border-b border-black/12 bg-white'>
                <div className='container border-x border-black/12 m-auto '>
                    <div className='py-11'>
                        <div className='bg-[#E9EDF5] px-14 pb-12 '>
                            <div className='py-32'>
                                <p className=' text-base text-blue-800 font-semibold'>ANY QUESTION?</p>
                                <h2 className='cmoon-blue text-5xl'>Frequently asked questions</h2>

                            </div>
                            <div className=' flex justify-between pr-8 border-y border-black/15 py-8 common-blue'>
                                <h3 className=' text-2xl'>Is there any payment fee?</h3>
                                <img className='cursor-pointer'
                                   src={aerrowDown} />
                            </div>
                            <div className=' flex justify-between pr-8 border-y border-black/15 py-8 common-blue'>
                                <h3 className=' text-2xl'>Is this available for Developers?</h3>
                                <img className='cursor-pointer' src={aerrowDown} />
                            </div>
                            <div className=' flex justify-between pr-8 border-y border-black/15 py-8 common-blue'>
                                <h3 className=' text-2xl'>When it will be get out of beta?</h3>
                                <img className='cursor-pointer' src={aerrowDown} />
                            </div>
                            
                            <div className=' flex justify-between pr-8 border-y border-black/15 py-8 common-blue' onClick={toggleDropdown}>
                                <h3 className=' text-2xl'>Any plan to launch payment link on multiple network?</h3>
                                <img className={`cursor-pointer transform transition-transform duration-1000 ${isopen ? 'rotate-180' : ''
                                    }`} src={aerrowDown} />
                            </div>
                            {isopen && (
                                <div className=' px-8 py-4 bg-white text-black/50 text-2xl '>
                                Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuestionSection