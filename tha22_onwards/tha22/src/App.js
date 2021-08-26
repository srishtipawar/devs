import React from 'react';
import './App.css';
import Main from './tha22/Main';
import Display from './tha23/Display';
import Nav from './tha24/Nav';
import Nav2 from './tha25/Nav2';
import {Main2} from './tha24/Main2';
import Display2 from './tha26/Display';
import Addtodo from './tha27/Add';
import List from './tha27/List';
import Weather from './tha28/Weather';

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
        <li>
        <Link to="/tha26">Tha26</Link>
        </li>
        <li>
        <Link to="/tha27">Tha27</Link>
        </li>
        <li>
        <Link to="/tha28">Tha28</Link>
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
      <Route exact path='/tha26'>
        <Display2/>
       
      </Route>
      <Route exact path='/tha27'>
        <Addtodo/>
        <List/>
       
      </Route>
      <Route exact path='/tha28'>
        <Weather/>
       
      </Route>
    </Switch>
      
    </Router>
    </div>
  );
}

export default App;
