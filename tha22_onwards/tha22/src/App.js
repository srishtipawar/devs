import React from 'react';
import './App.css';
import Main from './tha22/Main';
import Display from './tha23/Display';

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
      </ul>
    
    
    </nav>
    <Switch>
    <Route exact path='/tha22'>
        <Main/>
      </Route>
      <Route exact path='/tha23'>
        <Display/>
      </Route>
    </Switch>
      
    </Router>
    </div>
  );
}

export default App;
