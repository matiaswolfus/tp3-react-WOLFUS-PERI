import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario/Index'

function App() {
  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <Listado />
        <Formulario />
      </div>
    </div>
  )
}

export default App