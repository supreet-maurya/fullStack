import { Dialog } from '@mui/material';
import { useState , useContext} from 'react';
import { authenticationSignUp , authenticationLogin} from '../../service/api';
import UserContext from '../../context/UserContext';

const accountInitialValues = {
    login:{
        view: 'login',
        heading:'Login',
        subHeading:' Get access to your orders Wishlist and Recommendations'
    },
    signup: {
        view:'signup',
        heading: 'Looks like you are new here',
        subHeading:'Sign Up with your email/mobile to get started'
    }
}

const signUpInitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginInitialValues = {
    emailPhone: '',
    password: ''
}

const LoginDialog = ({openLoginDialog , setopenLoginDialog}) =>{

    const [Account, setAccount] = useState(accountInitialValues.login)
    const [SignUp, setSignUp] = useState(signUpInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const { setUserAccount } = useContext(UserContext) ;
    const [error , setError] = useState(false);

    const toggleSignUp = () =>{
        if( Account.view === 'login') setAccount(accountInitialValues.signup);
        else setAccount(accountInitialValues.login);
    }

    const handleClose = () =>{
        // console.log(openLoginDialog);
        setopenLoginDialog(false);
        // console.log(openLoginDialog);
        setAccount(accountInitialValues.login);
        setError(false);
    }

    const onInputChange = (e) =>{
        setSignUp({...SignUp , [e.target.name]:e.target.value});
        // console.log(SignUp);
    }

    const signupUser = async () =>{
        let res = await authenticationSignUp(SignUp);
        if( !res ) return ;
        
        // console.log(openLoginDialog);
        handleClose();
        // console.log(openLoginDialog);

        setUserAccount(SignUp.firstname);
        // dispatch(change(SignUp.firstname));

    }

    const onValueChange = (e) =>{
        setLogin({...login , [e.target.name]: e.target.value});
    }
    
    const loginUser = async () =>{
        // {localStorage.setItem('login', login)}
        // console.log(login);
        // localStorage.setItem('Password', pwd);
        let res = await authenticationLogin(login);
        // console.log(res);

        // console.log(res.status);

        if( res.status === 200 ) {
            handleClose();
            // console.log(res.data.firstname)
            setUserAccount(res.data.firstname);
        }
        else {
            // console.log("no");
            setError(true);
        }

    }

    return (
        <Dialog open = {openLoginDialog} onClose = {handleClose} >
            <div className='flex'>
                <div className="left w-[40%] bg-gray-400 p-8 text-white flex flex-col gap-5 ">
                        <h2 className='text-2xl '>{Account.heading}</h2>
                        <span>
                            {Account.subHeading}
                        </span>
                </div>

                {
                    (Account.view === 'login') ? 
                        <div className="right p-6 flex flex-col gap-24 ">
                            <div className='flex flex-col gap-3'>
                                
                                <input type="text" className='h-10 focus:outline-none' onChange={(e) => onValueChange(e)} name = 'emailPhone' placeholder='Enter Email/Phone Number'/>
                                <input type="password" className='h-10 focus:outline-none' onChange={(e) => onValueChange(e)} name = 'password' placeholder='Enter Password'/>

                                {error && <div className="text-red-500 text-sm flex">Please enter valid Email/Phone or Password</div>}

                                <p className='text-[12px]'>By continuing, you agree to our <a className = 'text-blue-700'href="https://www.flipkart.com/">Terms of Use</a> and <a className = 'text-blue-700'href="https://www.flipkart.com/">Privacy Policy</a></p>
                                <button onClick = {() => loginUser() }className='bg-blue-500 h-10  text-[17px] rounded-sm'>Login</button>

                                <span className='flex justify-center'>OR</span>
                            
                                <button className='bg-blue-500 h-10 text-[17px] rounded-sm'>Request OTP</button>

                            </div>
                            <button className='flex text-[14px] justify-center' onClick ={() => toggleSignUp() } href="">New to Ajio? Create an Account</button>
                            
                        </div>

                    :
                        <div className="right p-6 flex flex-col gap-24 ">
                            <div className='flex flex-col gap-3'>
                                <input type="text" className='h-10 focus:outline-none'  onChange={(e) => onInputChange(e)} name = 'firstname' placeholder='Enter Firstname'/>
                                <input type="text" className='h-10 focus:outline-none'  onChange={(e) => onInputChange(e)} name = 'lastname'  placeholder='Enter Lastname'/>
                                <input type="text" className='h-10 focus:outline-none' onChange={(e) => onInputChange(e)} name = 'username' placeholder='Enter Username'/>
                                <input type="text" className='h-10 focus:outline-none'  onChange={(e) => onInputChange(e)} name = 'email' placeholder='Enter Email'/>
                                <input type="password" className='h-10 focus:outline-none'  onChange={(e) => onInputChange(e)} name = 'password' placeholder='Enter Password'/>
                                <input type="mobile" className='h-10 focus:outline-none'   onChange={(e) => onInputChange(e)} name = 'phone' placeholder='Enter Phone'/>
                                <p className='text-[12px]'>By continuing, you agree to our <a className = 'text-blue-700'href="https://www.flipkart.com/">Terms of Use</a> and <a className = 'text-blue-700'href="https://www.flipkart.com/">Privacy Policy</a></p>
                                
                                <button onClick = {() => signupUser() } className= 'bg-blue-500 h-10 text-[17px] rounded-sm' >Continue</button>
                                <button className='flex text-[14px] justify-center' onClick ={() => toggleSignUp() } href="">Already Registered? Login</button>
                            </div>
                        </div>
                }
            </div>
        </Dialog>
    )
}

export default LoginDialog