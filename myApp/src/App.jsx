import { useState } from 'react'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario/Index'

function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...citas, cita])
  }

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id))
  }

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