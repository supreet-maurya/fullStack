// "use client"
import { Menu, MenuItem, styled } from '@mui/material';
import React, { useContext } from 'react';
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import UserContext from '../../context/UserContext';
import login from './login.svg'
import logoutLogo from './logout.svg'
// const Component = styled(Menu)`
//     margin-top: 5px;
// `;

const Profile = () => {
    const { setUserAccount , UserAccount, Open, setOpen } = useContext(UserContext);

    const handleClick = (event) => {
        // console.log(event.currentTarget);
        // console.log(Open);
        event.stopPropagation();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () =>{
        setOpen(false);
        setUserAccount('');
    }

    return (
        <>
            <div className='min-w-24 gap-2 cursor-pointer relative hover:border hover:bg-gray-400 py-2 px-3 rounded-full flex justify-center'>
                <img src={login} alt="" />
                <span onClick={handleClick} >{UserAccount}</span>
                <div onClick={logout} className= {Open ? 'flex items-center gap-2 absolute top-12 border p-2 rounded-sm' : 'hidden'}>
                    <img className = 'w-4 h-4'src={logoutLogo} alt="" />
                    <span>Logout</span>
                </div>

            </div>
        </>
    );
};

export default Profile;
