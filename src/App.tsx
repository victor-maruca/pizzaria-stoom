import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';

// Page imports
import Home from './Pages/Home/Home';
import SelecionarTamanho from './Pages/SelecionarTamanho/SelecionarTamanho';
import SelecionarMassa from './Pages/SelecionarMassa/SelecionarMassa';
import SelecionarSabor from './Pages/SelecionarSabor/SelecionarSabor';



function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Router>
        <Switch>
            <Route path="/tamanho">
              <SelecionarTamanho />
            </Route>
            <Route path="/sabor">
              <SelecionarSabor />
            </Route>
            <Route path="/massa">
              <SelecionarMassa />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
