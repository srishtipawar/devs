import React from 'react';
import {createContext,useState} from 'react';


const UserContext = createContext(null);
export default UserContext;


export function Main2({children}){
    

    // const [fname,Setfname] = useState("");
    // const [lname,Setlname] = useState("");
    const [login, setLogin] = useState(false);
    const [load, setLoad] = useState(false);
    const logger={
        loggedin:login,
        loading: load,
        toggle : () =>{
            setLogin(!login)
            
        }
    }
    
  
    return(

        <UserContext.Provider value={logger}>
            {children}
        </UserContext.Provider>

       
        
    )
}




