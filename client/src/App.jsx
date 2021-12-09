import React from 'react';
import './style.css';
import {Banner} from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}
import {NavBar} from './components/index'; //importa do index da pasta componentes, é só colocar o nome do seu ai ex {Footer, NavBar}
import {Footer} from './components/index';
import {Impact} from './components/index';
import {Contact} from './components/index';
import {Members} from './components/index';


const App = () => {
  return (
    <div className="App">
      {/*<NavBar/>*/}
      {/*<Banner/>*/}
      {/* <Impact/> */}
      <Members />
      {/* <Contact /> */}
      {/* <Footer /> */}


    </div>
)
  }

export default App;
