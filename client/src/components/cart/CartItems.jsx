

import React from 'react'
import { removeFromCart } from '../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const CartItems = ( {item} ) => {

  const dispatch = useDispatch();
  const removeitem = () => {
    // console.log(item.id);
    dispatch(removeFromCart(item.id));
  }

  return (

    <div className='m-5'>
        <div className='flex  gap-5'>
              <div className="  ">
                  <img className='w-48 h-40' src = {item.url} alt="product" />
              </div>
              <div className=" flex flex-col space-y-2">
                  <span className='font-semibold text-ellipsis'>{item.title.longTitle}</span>
                  <span className='text-gray-500'>Size : XL</span>
                  <span className='text-gray-500'>Seller : GG Brs</span>
                  <div className='space-x-2' > 
                    <span className='font-bold'> ₹{item.price.cost} </span> 
                    <strike> ₹{item.price.mrp} </strike>
                    <span className='text-green-700'>
                      {item.price.discount} Off
                    </span>
                  </div>
              </div>
        </div>

        <div className='flex justify-between'>
          <div className='ml-6 flex justify-center gap-6 m-2 items-center'>
                  <button className='flex items-center justify-center border border-black w-8 h-8 rounded-md p-2'>-</button>
                  <span>{item.quantity}</span>
                  <button className='flex items-center justify-center border border-black w-8 h-8 rounded-md p-2' > + </button>
          </div>

                <div>
                    <button onClick={() => removeitem() } className='p-2 font-semibold rounded-md bg-gray-400'>Remove</button>
                  </div>
        </div>

    </div>
  )
}

export default CartItems