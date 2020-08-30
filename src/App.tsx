import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import { Pizza } from './MockBackend/models';

// Page imports
import Home from './Pages/Home/Home';
import SelecionarTamanho from './Pages/SelecionarTamanho/SelecionarTamanho';
import SelecionarMassa from './Pages/SelecionarMassa/SelecionarMassa';
import SelecionarSabor from './Pages/SelecionarSabor/SelecionarSabor';
import PizzaOfTheDay from './Pages/PizzaOfTheDay/PizzaOfTheDay';
import Confirmation from './Pages/Confirmation/Confirmation';
import { useState } from 'react';

export interface IProps {
  currentPizza?: Pizza,
  setCurrentPizza: React.Dispatch<React.SetStateAction<Pizza|undefined>>
}

function App() {
  const [ currentPizza, setCurrentPizza ] = useState<Pizza|undefined>(undefined);
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Router>
        <Switch>
            <Route path="/tamanho">
              <SelecionarTamanho currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
            </Route>
            <Route path="/sabor">
              <SelecionarSabor currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
            </Route>
            <Route path="/massa">
              <SelecionarMassa currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
            </Route>
            <Route path='/pizza-of-the-day'>
              <PizzaOfTheDay currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
            </Route>
            <Route path="/confirmation">
              <Confirmation currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
