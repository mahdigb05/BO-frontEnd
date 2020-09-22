import React,{createContext, useState} from 'react'

export const UtilisateurContext = createContext();

const UtilisateurContextProvider = (props) => {

    const [currentUser,setCurrentUser] = useState('')
    const [userRole, setUserRole] = useState('')
    

    return(
        <UtilisateurContext.Provider value = {{currentUser, setCurrentUser, userRole, setUserRole}}>
            {props.children}
        </UtilisateurContext.Provider>
    )
}

export default UtilisateurContextProvider;