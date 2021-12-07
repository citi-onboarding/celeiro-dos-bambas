import React from 'react';
import './style.css';
import {Footer, Contact} from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}


const App = () => {
  return (
    <div className="App">
      <Contact />
      {/* <Footer /> */}
    </div>
)
  }

export default App;
