import { useState } from "react";
// import { createContext } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [UserAccount, setUserAccount] = useState('')
    const [Open , setOpen] = useState(false);

    return (
        <UserContext.Provider value = {{
            UserAccount,
            setUserAccount,
            Open,
            setOpen
        }}>

            {children}

        </UserContext.Provider>
    )
}

export default UserContextProvider