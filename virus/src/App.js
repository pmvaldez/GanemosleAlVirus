import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from './components/Game';
import Home from './components/Home';
import LevelOne from './components/LevelOne';
import LevelOne1 from './components/LevelOne-1';
import LevelOne2 from './components/LevelOne-2';
import LevelOne3 from './components/LevelOne-3';
import LevelOne4 from './components/LevelOne4';
import LevelTwo from './components/LevelTwo';
import LevelThree from './components/LevelThree';
import ParaTutores from './components/ZonaTutores';
import Download from './components/Download';

function App() {
  return (
    <Router>
    <div>
        <Switch>
            <Route path="/levelOne">
              <LevelOne />
            </Route>
            <Route path="/levelOne-1">
              <LevelOne1 />
            </Route>  
            <Route path="/levelOne-2">
              <LevelOne2 />
            </Route>  
            <Route path="/levelOne-3">
              <LevelOne3 />
            </Route>  
            <Route path="/levelOne-4">
              <LevelOne4 />
            </Route>   
            <Route path="/levelTwo">
              <LevelTwo />
            </Route>  
            <Route path="/levelThree">
              <LevelThree />
            </Route>  
            <Route path="/Game">
              <Game />
            </Route>
            <Route path="/Tutores">
                <ParaTutores />
            </Route>
            <Route path="/Descargables">
                <Download />
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
