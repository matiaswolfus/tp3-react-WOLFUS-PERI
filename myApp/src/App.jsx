import { useState, useEffect } from 'react'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario/Index'

function App() {
  const citasGuardadas = localStorage.getItem("citas") ? JSON.parse(localStorage.getItem('citas')) : []
  const [citas, setCitas] = useState(citasGuardadas)

  const agregarCita = (cita) => {
    setCitas([...citas, cita])
  }

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])


  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <Formulario agregarCita={agregarCita} />
        <Listado citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  )
}

export default App