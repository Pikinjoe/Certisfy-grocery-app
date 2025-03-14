import React from 'react'
import { NavLink } from 'react-router-dom'
import MarketStall from '../assets/MarketStall.png'


const ProductDetails = () => {
    return (
        <div className='h-screen relative bg-green-50'>
          <div className='h-[40%] w-full mb-4 sm:h-screen'> 
            <img src={MarketStall} alt="A happy shopper" className='h-full w-full object-cover object-center rounded-b-full sm:rounded-b-none ' />
          </div>
          
          <div>
            <div></div>
            
          </div>
        </div>
      )
}

export default ProductDetails
