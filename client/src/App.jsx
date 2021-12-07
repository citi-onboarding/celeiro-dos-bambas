import React from 'react';
import './style.css';
import { Footer, Partiners } from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}
import { Impact } from './components/index';
import { Contact} from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}


const App = () => {
  return (
    <div className="App">

      <Partiners/>
      <Contact />
      <Footer />
    </div>
)
  }

export default App;
