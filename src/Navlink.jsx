import React from 'react'
import { IoGrid } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navlink = () => {
  return (
    <div className='bg-primary sticky top-0 w-full z-50'>
        <div className='flex mx-4 justify-between items-center p-4 sm:w-4/6 sm:mx-auto'>
            <IoGrid className='size-6 text-white' />
            <h2 className='text-white font-semibold'>Certisfy</h2>
            <div className='flex relative'>
                <FaShoppingCart className='size-6 text-white' />
                <span className='absolute text-white -right-1 -top-4'>4</span>
            </div>
        </div>
       
       
    </div>
  )
}

export default Navlink
