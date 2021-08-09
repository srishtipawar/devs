
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './Home';
import {Main2} from './Main2';
import About from './About';
import Profile from './Profile';
import Dashboard from './Dashboard';
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

function Nav() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
        <Router>
      <AppBar position="static">
        <Toolbar>
        
        
         
               <Link to="/home">Home</Link>
              <Link to="/profile">Profile</Link>
               <Link to="/about">About</Link>
               <Link to="/dash">Dashboard</Link>
             
            
        </Toolbar>
      </AppBar>    
    <Switch>
      <Main2>
        <Route exact path='/home'>
          <Home/>
        </Route>
        
        <Route exact path='/profile'>
          <Profile/>
        </Route>

        <Route exact path='/about'>
          <About/>
        </Route>

        <Route exact path='/dash'>
          <Dashboard/>
        </Route>
        
      </Main2>
      </Switch>       
   
          
          </Router>
        
    </div>
  );
}

export default Nav;
