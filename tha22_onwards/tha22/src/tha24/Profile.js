import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './Main2';
import Nav from './Nav';

function Profile(){

    const logger = useContext(UserContext);

    return(
        <div>
             {logger.loggedin?"":<Redirect to="/home"/>}
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;