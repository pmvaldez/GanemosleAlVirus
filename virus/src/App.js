import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
        <Switch>
            <Route path="/Game">
              <Game />
            </Route>
            <Route path="/admin">
                Ruta de administracion
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </div>
</Router>    
  );
}

export default App;
