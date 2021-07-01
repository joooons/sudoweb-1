import { useState } from 'react';
import Ribbon from './components/Ribbon';


import './App.css';

function App() {

  const [message, setMessage] = useState('Ribbon exists!')
  const [ribbonExists, setRibbonExists] = useState(true)

  return (
    <div >

      {(ribbonExists) ? <Ribbon message={message} click={() => setRibbonExists(false)} /> : null}

      Not ribbon.
    </div>
  );
}

export default App;
