import React from 'react';
import './App.css';
import Main from './tha22/Main';
import Display from './tha23/Display';
import Nav from './tha24/Nav';
import Nav2 from './tha25/Nav2';
import {Main2} from './tha24/Main2';

import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
  <Router>
    <nav>
      <ul>
        <li>
        <Link to="/tha22">Tha22</Link>
        </li>
        <li>
        <Link to="/tha23">Tha23</Link>
        </li>
        <li>
        <Link to="/tha24">Tha24</Link>
        </li>
        <li>
        <Link to="/tha25">Tha25</Link>
        </li>
      </ul>
    
    
    </nav>
    <Switch>
    <Route exact path='/tha22'>
       <Main/>
      </Route>
      <Route exact path='/tha23'>
        <Display/>
      </Route>
      <Route exact path='/tha24'>
        <Nav/>
        <Main2/>
      </Route>
      <Route exact path='/tha25'>
        <Nav2/>
       
      </Route>
    </Switch>
      
    </Router>
    </div>
  );
}

export default App;
