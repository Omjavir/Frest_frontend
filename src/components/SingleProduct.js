import React from 'react'
import { useParams } from 'react-router-dom'
import { CartState } from '../Reducer/Context';
// import product from './data.json'


const SingleProduct = () => {
  const { id } = useParams();
  const { state, dispatch } = CartState();
  const { products } = state;
  return (
    <div className='bg-lime-200 pt-24 flex flex-col sm:flex-row pb-10 justify-center'>
      <div className='sm:w-[40vw] w-fullsm:p-14 p-10'><img className=' border-blue-500 border-2' src={products[id - 1].src} alt="ProductImage" /></div>
      <div className='w-full sm:w-[40vw] sm:p-14 px-10 font-mono font-semibold sm:font-semibold text-blue-500'>
        <h2 className='text-3xl'>{products[id - 1].title}</h2>
        <h3 className='text-3xl my-2'>${products[id - 1].price}</h3>
        <button className='my-2 border-blue-500 border-2 rounded-3xl px-6 text-3xl' onClick={() => dispatch({
          type: "ADD_TO_CART",
          payload: {
            id: products[id - 1].id,
            title: products[id - 1].title,
            image: products[id - 1].src,
            price: Number(products[id - 1].price),
            qty: 1
          }
        })}>Add to Cart</button> <br />
        <h3 className='text-xl'>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</h3>
      </div>
    </div>
  )
}

export default SingleProduct