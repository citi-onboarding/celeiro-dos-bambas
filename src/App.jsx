import React from 'react';
import './style.css';
import { Footer, Partiners } from './components/index'; /
import { Impact } from './components/index';
import { Contact} from './components/index';
import {Banner} from './components/index';
import {NavBar} from './components/index';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Impact />
      <Partiners/>
      <Contact />
      <Footer />
    </div>
)
  }

export default App;
