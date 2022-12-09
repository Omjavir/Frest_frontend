import React from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../Reducer/Context';
// import products from './data.json'

const Product = () => {
    const { state } = CartState();
    const { products } = state;
    return (
        <div className='bg-emerald-200 pt-10 pb-10 text-blue-600 font-semibold border-b-blue-600 border-2 p-3 sm:p-14'>
            <div>
                <h2 className='font-mono font-bold sm:font-semibold text-2xl sm:text-6xl'>WHAT'S YOUR FLAVOUR</h2>
                <button className='font-bold text-base sm:text-2xl border-blue-600 border-2 px-2 py-1 rounded-3xl my-4'>Shop Now</button>
            </div>
            <div className='flex flex-col sm:flex-row'>
                {products.map(prod => {
                    return <Link to={`product/${prod.id}`}><div className='border-blue-400 border-2 w-[35vh] mx-10 my-2' key={prod.price}>
                        <img className='w-[35vh]' src={prod.src} alt="Image1" />
                        <h3 className='font-serif font-semibold sm:px-4 px-2 sm:my-2 my-1'>{prod.title}</h3>
                        <p className='font-serif font-semibold sm:px-4 px-2 sm:my-2 my-1'>${prod.price}</p>
                    </div></Link>
                })}

            </div>
        </div>
    )
}

export default Product 