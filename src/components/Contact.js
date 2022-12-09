import React from 'react'

const Contact = () => {
    return (
        <div className="p-2 bg-lime-200 px-2 sm:h-[20vh] h-[25vh]">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-3">
                        <h3 className='text-xl m-2 text-blue-500 font-semibold'> Subscribe for exclusive discounts and updates:</h3>
                        <div className="relative"> <input type="email" placeholder='Email' className="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer" name="" />
                            <button className="h-10 rounded border-blue-500 border-2 absolute top-2 text-sm right-2 px-3 text-blue-500 font-semibold">Subscribe Now</button> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact