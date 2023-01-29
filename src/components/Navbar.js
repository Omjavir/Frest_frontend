import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiFlowerPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { CartState } from '../Reducer/Context';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)
    const { state } = CartState();
    const { cart } = state;

    return (
        <div className='w-screen h-[80px] z-10 bg-lime-200 border-b-blue-600 border-2 text-blue-600 fixed'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link to={'/'}><h1 className='text-3xl text-blue-700 font-bold mr-4 sm:text-4xl flex'><GiFlowerPot /><span className='mx-2'>FREST</span></h1></Link>
                    <ul className='hidden md:flex cursor-pointer'>
                        <li className='mx-6'>Shop</li>
                        <li className='mx-6'>Subscriptions</li>
                        <li className='mx-6'>Mixology</li>
                        <li className='mx-6'>About</li>
                        <li className='mx-6'>Find Us</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>
                        Sign In
                    </button>
                    <Link to={'/cart'}> <button className='px-8 py-3'>Cart ({cart.length})</button></Link>
                </div>
                <div className='md:hidden mr-4 flex' onClick={handleClick}>
                    <Link to={'/cart'}><button className='mr-4'>Cart ({cart.length})</button></Link>
                    <p>
                        {!nav ? <AiOutlineMenu className='w-8 mt-1' /> : <AiOutlineClose className='w-8 mt-1' />}
                    </p>
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-lime-100 w-full px-8 cursor-pointer'}>
                <li className='border-b-2 border-lime-300 w-full my-6' onClick={handleClose}>Shop</li>
                <li className='border-b-2 border-lime-300 w-full my-6' onClick={handleClose}>Subscriptions</li>
                <li className='border-b-2 border-lime-300 w-full my-6' onClick={handleClose}>Mixology</li>
                <li className='border-b-2 border-lime-300 w-full my-6' onClick={handleClose}>About</li>
                <li className='border-b-2 border-lime-300 w-full my-6' onClick={handleClose}>Find Us</li>

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 p-3'>Sign In</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;