import React from 'react'
import Contact from './Contact'
import Hero from './Hero'
import Natural from './Natural'
import Product from './Product'
import Property from './Property'
import Testimonials from './Testimonials'

const Main = () => {
    return (
        <div>
            <Hero />
            <Natural />
            <Property />
            <Product />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Main