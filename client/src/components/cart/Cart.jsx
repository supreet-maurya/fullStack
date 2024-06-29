import { useSelector } from "react-redux"
import CartItems from "./CartItems";
import Subtotal from "./Subtotal";
import EmptyCart from "./EmptyCart";

const Cart = () =>{
    const { cartItems } = useSelector(state => state.cart );
    return (
        <>
            {
                
                (cartItems.length > 0)  ?


                <div className="  flex mx-40 p-5 gap-4">

                    <div className=" left w-[60%] bg-gray-200">
                        <h2 className="bg-gray-300 p-4 text-2xl">Cart Items</h2>

                        {
                            cartItems.map(item => (
                                <>
                                <CartItems item = {item} />
                                <hr className="border-t-1 border-gray-400 my-2" />
                                </>
                            ))
                            
                        }
                        {/* <hr></hr> */}

                        <div  className=" right-0 w-full bg-gray-300">
                            <button className="ml-[86%] bg-gray-400 font-bold  p-2 rounded-md m-2">Buy Now</button>
                        </div>

                    </div>

                    <div className="right bg-gray-200 w-[30%]">
                        <Subtotal cartItems={cartItems}/>
                    </div>

                </div>

                :

                <div>
                    <EmptyCart/>
                </div>

            }
        
        </>
    )
}

export default Cart