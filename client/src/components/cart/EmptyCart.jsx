
import React from 'react'
import emptyCart from './emptyCart.png'

const EmptyCart = () => {
  return (
    <div className='bg-gray-300 h-[90vh] w-[100vw] flex justify-center'>
        <img className='mt-5 w-[50vw] h-[65vh]' src={emptyCart} alt="lke" />
    </div>
  )
}

export default EmptyCart
