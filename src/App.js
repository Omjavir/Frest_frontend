import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import SingleProduct from './components/SingleProduct'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<SingleProduct />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App