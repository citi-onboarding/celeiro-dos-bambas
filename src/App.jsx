import React from 'react';
import './style.css';
import { Footer, Partiners } from './components/index';
import { Impact } from './components/index';
import { Contact} from './components/index';
import {Banner} from './components/index';
import {NavBar , Members} from './components/index';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Impact />
      <Members />
      <Partiners/>
      <Contact />
      <Footer />
    </div>
)
  }

export default App;
