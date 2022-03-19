import React, {useState} from 'react'
import './App.css';
import Card from './components/Card'
import Intervalo from './components/Intervalo'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'
import Media from './components/Media'

function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Projeto-Redux</h1>

      <div className='linha'>
        <Intervalo min={min} max={max}></Intervalo>
      </div>

      <div className='linha'>
        <Media min={min} max={max}/>
        <Soma min={min} max={max}/>
        <Sorteio min={min} max={max}/>
      </div>

    </div>
  );
}

export default App;
