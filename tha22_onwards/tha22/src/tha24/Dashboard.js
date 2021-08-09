import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './Main2';

function Dashboard(){
    const logger = useContext(UserContext);
    return(
        <div>
             {logger.loggedin?"":<Redirect to="/home"/>}
            <h1>Dashboard</h1>
        </div>
    )
}
export default Dashboard;