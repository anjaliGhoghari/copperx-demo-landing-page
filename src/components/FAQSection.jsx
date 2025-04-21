import { useState } from 'react'
import aerrowDown from '../assets/images/Arrow Down.svg'
const FAQList = [
    {
        question: 'Is there any payment fee?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.'
    },
    {
        question: 'Is this available for Developers?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.  a small payment fee may apply depending on your payment method.'
    },
    {
        question: 'When it will be get out of beta?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes, a small payment fee may apply depending on your payment method.a small payment fee may apply depending on your payment method.'
    },
    {
        question: 'Any plan to launch payment link on multiple network?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes,a small payment fee may apply depending on your payment method. a small payment fee may apply depending on your payment method.'
    },
    {
        question: 'Any plan to launch payment link on multiple network?',
        answer: 'Yes, a small payment fee may apply depending on your payment method.Yes,a small payment fee may apply depending on your payment method. a small payment fee may apply depending on your payment method.'
    },
]



function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null);
    const ToggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? 'null' : index);
    }
    return (
        <>
            <section className=' w-full border-b border-black/12 bg-white'>
                <div className='container border-x border-black/12 m-auto '>
                    <div className='py-11'>
                        <div className='bg-[#E9EDF5] border  px-14 pb-12 '>
                            <div className='py-32'>
                                <p className=' text-base text-blue-800 font-semibold'>ANY QUESTION?</p>
                                <h2 className='cmoon-blue text-5xl'>Frequently asked questions</h2>
                            </div>
                            {/* on click */}
                            <div className='border-b border-black/15'>
                            {FAQList.map((item, index) => (
                                <div className='common-blue' key={index} onClick={() => ToggleFAQ(index)}>
                                    <div className='flex border-t border-black/15  py-8 justify-between pr-8'>
                                    <h3 className=' text-2xl'>{item.question}</h3>
                                        <img
                                            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            src={aerrowDown}
                                            alt='Toggle Answer'
                                        />
                                    </div>
                                    <div className={` items-center text-start text-xl text-gray-500 overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100 mt-[-20px] ' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className='pb-4'>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                            {/* on hover  */}
                            {/* {FAQList.map((item, index) => (
                                <div className=' group common-blue' key={index}>
                                    <div className='flex border-y border-black/15  py-8 justify-between pr-8'><h3 className=' text-2xl'>{item.question}</h3>
                                        <img
                                            className='transition-transform duration-300  group-hover:rotate-180'
                                            src={aerrowDown}
                                            alt='Toggle Answer'
                                        />
                                    </div>
                                    <div className='items-center text-start gray text-xl overflow-hidden transition-all duration-500 max-h-0 opacity-0  group-hover:max-h-96 group-hover:opacity-100 group-hover:p-4'>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQSection