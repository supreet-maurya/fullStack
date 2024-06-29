import logo from './Ajio-Logo.svg';
import loginLogo from './login.svg'
import cartSvg from './cart.svg'
import sellerSvg from './seller.svg'
import LoginDialog from '../login/loginDialog';
import { useState , useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import Profile from './Profile';
import { Link } from 'react-router-dom'
import { List ,styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { ListItem } from '@mui/material';

const ListWrapper = styled(List)`
    position:absolute;
    background:#FFFFFF;
    margin-left:15px;
`

const Header = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.getProducts);
    useEffect(()=>{
        dispatch(getProducts());
    } , [dispatch])

    const [text , setText] = useState('');
    const getText = (text) => {
        setText(text);
    }

    const [openLoginDialog, setopenLoginDialog] = useState(false);

    const openLoginDialog_func = ()=>{
        setopenLoginDialog(true);
    }


    const { UserAccount } = useContext(UserContext);
    
    return (

        <div className="w-full px-2 h-20 fixed top-0 flex justify-between items-center z-50 bg-white shadow-md">
            <Link to = '/'>
            <img className = 'w-20 h-20 md:w-36 md:h-20' src = {logo} alt="" />
            </Link>

            <div className='relative'>
            
                <div className='mx-4 border gap-2 w-[110px] md:w-[200px]  xl:w-[700px] px-2 py-1 border-[#A9A9A9] flex items-center rounded-md bg-white'>
            
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1770_1836)"><path d="M19.7695 18.6698L16.0096 14.9098C17.3296 13.3298 18.1296 11.2999 18.1296 9.07989C18.1296 4.05995 14.0697 0 9.05978 0C4.0599 0 0 4.05995 0 9.07989C0 14.0998 4.0599 18.1598 9.05978 18.1598C11.2897 18.1598 13.3297 17.3498 14.9096 16.0098L18.6695 19.7698C18.9695 20.0698 19.4695 20.0698 19.7695 19.7698C20.0795 19.4698 20.0795 18.9698 19.7695 18.6698ZM9.05978 16.5998C4.91988 16.5998 1.54996 13.2298 1.54996 9.07989C1.54996 4.92994 4.91988 1.55998 9.05978 1.55998C13.1997 1.55998 16.5696 4.92994 16.5696 9.07989C16.5696 13.2298 13.1997 16.5998 9.05978 16.5998Z" fill="#8B8BA3"></path></g><defs><clipPath id="clip0_1770_1836"><rect width="19.9995" height="19.9998" fill="white"></rect></clipPath></defs></svg>
                    <input value = {text} onChange={(e) => getText(e.target.value)} placeholder = "Search" className='focus:outline-none focus:ring-0 focus:border-transparent h-10 w-[90px] md:w-[200px] xl:w-[700px] rounded-md'></input>
    
                </div>  

                {
                    text && 

                    <ListWrapper>
                        {
                            // <div className='bg-red-600'> Hello </div>
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>{
                                return <ListItem>
                                    <Link to = {`/product/${product.id}`} onClick={() => setText('')}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            })
                        }
                    </ListWrapper>
                }

            </div>


            <div className='flex md:gap-5'>

                {
                    UserAccount ?
                    // true? 
                        <Profile />
                    :
                    
                    <div onClick={() => openLoginDialog_func()} className='hover:border hover:bg-gray-400 py-2 px-3 rounded-full flex items-center gap-2  cursor-pointer'>
                        <img className = '' src={loginLogo} alt="" />
                        <button >Login</button>
                    </div>

                }

                <Link to = "/cart">
                <div className='hover:border hover:bg-gray-400 py-2 px-3 rounded-full flex items-center gap-2 cursor-pointer'>
                    <img src = {cartSvg} alt="" />
                    <button className='hidden sm:block'>Cart</button>
                </div>
                </Link>
                

                <div className='hover:border hover:bg-gray-400 py-2 px-3 rounded-full flex items-center gap-2 cursor-pointer'>
                    <img src={sellerSvg} alt="" />
                    <button className='hidden sm:block'>Become a Seller</button>
                </div>

                <LoginDialog openLoginDialog = {openLoginDialog} setopenLoginDialog = {setopenLoginDialog} />
                
                
            </div>


        </div>

    )
}

export default Header