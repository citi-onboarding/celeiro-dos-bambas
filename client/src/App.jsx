import React from 'react';
import './style.css';
import {Footer} from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}
import {NavBar} from './components/index';

const App = () => {
  return (
    <div className="App">



      <NavBar/>
  </div>
)
  }

export default App;
