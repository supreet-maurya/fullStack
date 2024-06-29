import React from 'react'
import { useState , useEffect } from 'react'

const Subtotal = ({cartItems}) => {

    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)

    const totalAmount = () =>{
        let price = 0 , discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setprice(price);
        setdiscount(discount);
    }

    useEffect(() => {
        totalAmount();
    } , [cartItems])

  return (
    
    <div className='w-full '>
        <div className='text-2xl p-4 bg-gray-300'>Price Details </div>
        
        <div className='p-4 space-y-4'>
            <div className='flex justify-between text-[17px]'>Price ({cartItems?.length} item)  <span> ₹{price} </span> </div>
            <div className='flex justify-between text-[17px]'>Discount  <span> ₹{discount} </span> </div>
            <div className='flex justify-between text-[17px]'>Delivery Charges  <span> ₹100 </span> </div>
            
            <hr className="border-t-1 border-gray-400 my-2" />
            <div className='flex justify-between text-[17px]'>Savings  <span> ₹{discount - 100} </span> </div>
            <div className='flex justify-between text-[17px]'>Total Amount <span> ₹{price - discount + 100} </span> </div>
        </div>
    </div>
  )
}

export default Subtotal
