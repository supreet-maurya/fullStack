
import cartLogo from './cart_button.svg'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const ActionItem = ( { product } ) =>{
    // console.log(product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = product;
    const [ quantity , setquantity ] = useState(1);
    
    const addItemToCart = () => {
        dispatch(addToCart( id , quantity )) ;
        navigate('/cart')
    }

    const buyNow = () => {
        let response = payUsingPaytm({amount : 1000 , email : 'ss@gmail.com'})
        let information = {
            action : 'https://securegw-stage.paytm.in/order/process',
            params : response
        }
        post(information);
    }

    return (
        <div className="flex flex-col mb-4 justify-center sm:min-w-96 space-y-4">

            <img className = 'w-100 md:h-96' src={product.url} alt="" />
            <div className="flex justify-center space-x-2">
                <button onClick={() => addItemToCart() } className="p-3 w-[48%] flex items-center justify-center gap-2 bg-blue-500 rounded-md"><img className='invert' src={cartLogo} alt="" />Add to Cart</button>
                <button onClick={() => buyNow()} className="p-3 w-[48%] bg-blue-500 rounded-md"><FlashOnIcon ></FlashOnIcon> Buy Now</button>
            </div>
        </div>
    )
}

export default ActionItem