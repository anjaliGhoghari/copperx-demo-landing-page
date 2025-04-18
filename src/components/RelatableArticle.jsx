import React from 'react'
import upaerrow from '../assets/images/reshot-icon-arrow-diagonal-up-right-Y2ND6FM3RW.svg'
const RealatedArticlesList = [
    { image: 'RealatedArticlesCard-1.png', description: 'What are public and private keys in Crypto' },
    { image: 'RealatedArticlesCard-2.png', description: 'Introducing BNB Chain Support on Copperx' },
    { image: 'RealatedArticlesCard-3.png', description: 'What are public and private keys in Crypto' },
    { image: 'RealatedArticlesCard-4.png', description: 'What are public and private keys in Crypto' },

]
function RelatableArticle() {
    return (
        <>
            <section className=' w-full border-b border-black/12 bg-white'>
                <div className='container border-x border-black/12 m-auto '>
                    <div className='py-32 px-24'>
                        <div className='flex justify-between'>
                            <h2 className='common-blue text-5xl font-financier'>Related articles</h2>
                            <button className='white-button'>View all</button>
                        </div>
                        <div className='flex justify-center items-center text-center'>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 '>
                                {RealatedArticlesList.map((item, index) => (
                                    <div key={index} className='mt-10 max-w-[294px]'>
                                        <div><img src={new URL(`../assets/images/${item.image}`, import.meta.url).href} alt={item.image} /></div>
                                        <div className=' relative bg-[#F2F5FA] p-6 h-[200px]'>
                                            <p className=' common-blue font-financier text-2xl tracking-wide'>{item.description}</p>
                                            <a href=''><img className='absolute bottom-6 rounded-full p-2 bg-white hover:bg-blue-500 active:bg-blue-500' src={upaerrow} /></a>
                                        </div>
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

export default RelatableArticle