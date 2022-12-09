import React from 'react'

const Hero = () => {
    return (
        <div className='bg-lime-200 text-blue-600 flex justify-center pt-32 sm:pt-56 pb-7 sm:pb-20'>
            <div className='p-2'>
                <h2 className='font-bold text-4xl sm:text-8xl'>KEEP IT FRESH</h2>
                <p className='text-xl sm:text-3xl my-3 sm:my-10'>Refreshing, Pre-Mixed Cocktails Made <br /> with Natural Ingredients</p>
                <button  className='font-bold text-xl sm:text-2xl border-blue-600 border-2 px-2 py-1 rounded-3xl'>Shop Now</button>
            </div>
        </div>
    )
}

export default Hero