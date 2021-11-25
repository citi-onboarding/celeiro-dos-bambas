import React from 'react';
import { Logo } from '../src/assets'
import './style.css';

const App = () => {
  return (
    <div className="App">

      <img src={Logo} alt="" />
      <p>
        Made with
        {' '}
        <strong>&lt; &#x0002F; &gt;</strong>
        {' '}
        and
        {' '}
        <strong>&hearts;</strong>
        {' '}
        by CITi
      </p>
  </div>
)
  }

export default App;
