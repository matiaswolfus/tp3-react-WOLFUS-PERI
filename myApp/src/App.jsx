import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from './components/Listado'

function App() {
  const nombres = ['Martin', 'Roman', 'Diego'];
  const otrosNombres = ['Zoe', 'Manu', 'Lucho', 'Nao'];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Hola Gente de 5IB!!</h1>
        </div>
        <div>
          <Listado nombres={nombres}/>
          <Listado nombres={otrosNombres}/>
        </div>
      </section>
    </>
  )
}

export default App
