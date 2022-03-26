import React, {useState} from 'react'
import './App.css';

import Intervalo from './components/Intervalo'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'
import Media from './components/Media'

function App() {
  //const [min, setMin] = useState(10)
  //const [max, setMax] = useState(100)
  return (
    <div className="App">
      <h1>Projeto-Redux</h1>

      <div className='linha'>
        {/* <Intervalo min={min} max={max}
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo> */}
        <Intervalo></Intervalo>
      </div>

      <div className='linha'>
        {/* <Media min={min} max={max}/>
        <Soma min={min} max={max}/>
        <Sorteio min={min} max={max}/> */}
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>

    </div>
  );
}

export default App;
