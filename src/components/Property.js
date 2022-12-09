import React from 'react'

const Property = () => {
    return (
        <div className='bg-lime-200 pt-10 pb-10 text-blue-600 font-semibold border-b-blue-600 border-2 p-3 sm:p-14'>
            <h2 className='font-mono font-bold sm:font-semibold text-2xl sm:text-6xl'>WHY CHOOSE FREST ?</h2>
            <div className='flex flex-col sm:flex-row mt-4'>
                <div className='sm:w-[20vw] mx-4 border-b-blue-400 border-2 mt-3 p-3'>
                    <h2>1</h2>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-semibold font-serif my-1'>Quality Ingredients</h3>
                        <p className=' my-1'>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className='sm:w-[20vw] mx-4 border-b-blue-400 border-2 mt-3 p-3'>
                    <h2>2</h2>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-semibold font-serif my-1'>Low Sugar</h3>
                        <p className=' my-1'>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className='sm:w-[20vw] mx-4 border-b-blue-400 border-2 mt-3 p-3'>
                    <h2>3</h2>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-semibold font-serif my-1'>Premium Spirits</h3>
                        <p className=' my-1'>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
                <div className='sm:w-[20vw] mx-4 border-b-blue-400 border-2 mt-3 p-3'>
                    <h2>4</h2>
                    <div className='flex flex-col justify-center'>
                        <h3 className='font-semibold font-serif my-1'>Certified Organics</h3>
                        <p className=' my-1'>I'm a paragraph. Click here to add your own text and edit me.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property