import React from 'react';
import './App.css';
import { Navbar, Introduction, Knowables, Buildables, Contact } from './Components'
import { useState } from 'react';

function App() {
  const [screenSize, setScreenSize] = useState(900);

  return (

    <div className="App">
       <Navbar />
       <hr/>
       <Introduction />
       <Knowables />
       <Buildables />
       <Contact />

        <hr />
       <div className='footer container'>
          <div className='row'>
          <div className='half column'>
          Copyright © 2022 - Cigomba.tech
          </div>
          <div className='half column'>
            
          </div>
          </div>
       </div>
    </div>
  );
}

export default App;
