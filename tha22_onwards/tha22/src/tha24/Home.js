import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import UserContext from './Main2';

function Home(){
    // const fname = useContext(FirstName);
    // const lname = useContext(LastName);
    const logger = useContext(UserContext);
    const toggleuser = ()=>{
        logger.toggle();
    }
    
  
        return(
           
            <div>
               <h2>{logger.loggedin?
                    "Welcome User!":
                    "You need to log in"}</h2>

                <button onClick={toggleuser}>{logger.loggedin?"Logout":"Login"}</button>
            </div>
        )
    
}

export default Home;