import React from 'react'
const icon_name = [
    { name: 'Stripe', icon: 'stripe.png' },
    { name: 'Bitpay', icon: 'bitpay.png' },
    { name: 'Coinbase', icon: 'coinbase.png' },
    { name: 'Coinpayments', icon: 'coinpayments.png' },
    { name: 'Gocoin', icon: 'gocoin.png' },
    { name: 'Coinbase', icon: 'coinbase.png' },
    { name: 'Coinpayments', icon: 'coinpayments.png' },
    { name: 'Gocoin', icon: 'gocoin.png' },
    { name: 'Stripe', icon: 'stripe.png' },
    { name: 'Bitpay', icon: 'bitpay.png' },
];

function ComparisonGrid() {

    return (
        <>
            <section className=' w-full border-b border-black/12 bg-white'>
                <div className='container border-x border-black/12 m-auto '>
                    <div className='py-32'>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <h2 className='common-blue text-5xl font-financier'>Copperx VS. our competitors</h2>
                            <p className='gray mt-4'>See how Copperx stacks up one-on-one against the competition.</p>
                        </div>

                        <div className='flex flex-wrap justify-center items-center text-center mt-[72px]'>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center text-center'>
                                {icon_name.map((item, index) => (
                                    <div key={index} className='flex flex-col items-center justify-center hover:shadow-2xl hover:scale-100 transition-all duration-200 border rounded-xl px-[32px] py-[26px] font-semibold'
                                        >
                                        <img src={new URL(`../assets/images/${item.icon}`, import.meta.url).href} alt={item.name}
                                        />
                                        <p className='common-blue text-base mt-2'>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComparisonGrid

