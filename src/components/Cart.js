import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../Reducer/Context';

const Cart = () => {
  const { state, dispatch } = CartState();
  const { cart } = state;
  const [total, setTotal] = useState(0)
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        qty, id
      }
    })
  }
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    })
  }
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    );
  }, [cart])
  return (
    <div className='bg-lime-200'>
      {cart.length > 0 ? (
        <div className=' flex flex-col sm:flex-row pt-24 pb-16 text-blue-500'>
          <div className='sm:w-[70vw] w-[100vw]'>
            <h3 className='p-10 border-b-blue-500 border-2 sm:text-4xl text-3xl font-bold font-serif flex'>My Cart</h3>
            {cart.map(cartItem => (
              <div className='flex justify-between p-4 sm:p-10 border-b-blue-500 border-2' key={cartItem.id}>
                <div className='flex justify-center items-center'>
                  <div className='bg-red-600 w-20 sm:w-40'><img src={cartItem.image} alt="CartItemImage" className='' /></div>
                  <div className='px-4 sm:text-4xl text-xl'><h3>{cartItem.title}</h3><p>{cartItem.price}</p></div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center'>
                  <div className="flex flex-row w-[20vw] my-2 sm:w-[7vw] h-10 sm:h-12 relative bg-transparent text-blue-500 border-blue-500 border-2 mt-1 sm:text-4xl text-xl">
                    <button data-action="decrement" className="h-full w-20 cursor-pointer">
                      <span className="m-auto font-semibold" onClick={() => changeQty(cartItem.id, cartItem.qty - 1)}>-</span>
                    </button>
                    <p type="number" className="text-center text-blue-500 w-full bg-transparent text-md  flex items-center sm:ml-4 ml-2">{cartItem.qty}</p>
                    <button className="h-full w-20 cursor-pointer">
                      <span className="m-auto font-semibold" onClick={() => changeQty(cartItem.id, cartItem.qty + 1)}>+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='sm:w-[30vw] w-[100vw] p-10'>
            <h3 className='p-5 border-b-blue-500 border-2 sm:text-4xl text-3xl font-bold font-serif'>Order Summary</h3>
            <div className='flex justify-between p-4 text-2xl font-mono'>
              <h2>Subtotal</h2>
              <h3>${total}</h3>
            </div>
            <h4 className='underline px-4 border-b-blue-500 border-2 font-mono'>Estimate Shipping</h4>
            <div className='flex justify-between p-4 text-2xl font-mono'>
              <h2>Total</h2>
              <h3>${total}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-lime-200 sm:pt-28 pt-20 text-blue-500'>
          <h1 className='font-bold sm:p-10 p-5 w-[100vw] border-b-blue-500 border-2 font-serif text-2xl sm:text-4xl'>My Cart</h1>
          <div className='flex justify-center flex-col items-center pt-28 pb-28'>
            <h2 className='font-bold px-10 w-[100vw] text-xl text-center font-mono sm:text-3xl'>YOUR CART IS EMPTY</h2>
            <Link to={'/'}><button className='font-bold text-xl sm:text-2xl w-28 sm:w-32 border-blue-600 border-2 px-2 py-1 rounded-3xl my-4'>Fill it Up</button></Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart


// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { CartState } from '../Reducer/Context';

// const Cart = () => {
//   const { state, dispatch } = CartState();
//   const { cart } = state;
//   const [total, setTotal] = useState(0)
//   const changeQty = (id, qty) => {
//     dispatch({
//       type: "CHANGE_QTY",
//       payload: {
//         qty, id
//       }
//     })
//   }
//   const clearCart = () => {
//     dispatch({
//       type: "CLEAR_CART",
//     })
//   }
//   useEffect(() => {
//     setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
//   }, [cart])
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '30px' }}>
//       {cart.length > 0 ?
//         (<div className='flex flex-wrap' style={{ width: '100%' }}>
//           {cart.map(carItem => (
//             <div class="max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-wrap">
//               <div>
//                 <img class="rounded-t-lg p-5" src={carItem.image} alt="" />
//               </div>
//               <div class="p-5">
//                 <p>
//                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{carItem.title}</h5>
//                 </p>
//                 <div style={{ marginTop: '7%' }}>
//                   <button onClick={() => changeQty(carItem.id, carItem.qty + 1)}>+</button>
//                   <span style={{ marginLeft: "10px", marginRight: '10px', fontSize: "20px" }}>{carItem.qty}</span>
//                   <button onClick={() => changeQty(carItem.id, carItem.qty - 1)}>-</button>
//                 </div>
//                 <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                   ₹ {Math.round(carItem.price)}/-
//                 </div>
//               </div>
//             </div>
//           ))}
//           <section class="text-gray-600 body-font">
//             <div class="container px-5 py-24 mx-auto">
//               <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
//                 <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Subtotal ₹{Math.round(total)}/-</h1>
//                 <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={() => clearCart()}>Clear Cart</button>
//               </div>
//             </div>
//           </section>
//         </div>
//         )
//         :
//         (<b style={{ width: '80%', fontSize: '30px', textAlign: 'center' }}>Cart is empty <br />
//           <Link to={'/'}> <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={() => clearCart()}>Fill Cart</button></Link>
//         </b>
//         )
//       }
//     </div>
//   )
// }

// export default Cart