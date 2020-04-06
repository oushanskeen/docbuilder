import React from 'react';
//import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <main>
        <Switch>
            <Route exact path="/docbuilder/home" 
                component={Home} />          
        </Switch>
    </main>
  );
}

export default App;
