
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './Home2';

import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav2() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
        <Router>
      <AppBar position="static">
        <Toolbar>
        
        
         
               <Link to="/home2">Home2</Link>
              
             
            
        </Toolbar>
      </AppBar>    
    <Switch>
    
        <Route exact path='/home2'>
          <Home />
        </Route>
        
    

      </Switch>       
   
          
          </Router>
        
    </div>
  );
}

export default Nav2;
