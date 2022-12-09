import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { cartReducer } from '../Reducer/Reducer'

const Cart = createContext();

const Context = ({ children }) => {
  
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []
  })

  const fetchProducts = async () => {
    const { data } = await axios.get('https://api.npoint.io/d5d0f4642b84e6af9e84')
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data
    })
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context