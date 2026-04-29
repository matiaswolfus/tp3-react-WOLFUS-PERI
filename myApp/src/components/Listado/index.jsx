import Citas from "../Citas/Index"

function Listado({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      <Citas citas={citas} eliminarCita={eliminarCita} />
    </div>
  )
}

export default Listado