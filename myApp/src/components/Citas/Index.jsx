import { useState } from 'react'
import './Citas.css'
import Modal from '../modal'

function Citas({ citas, eliminarCita }) {
  const [citaAEliminar, setCitaAEliminar] = useState(null)

  return (
    <section>
      {citaAEliminar && (
        <Modal
          onConfirmar={() => {
            eliminarCita(citaAEliminar)
            setCitaAEliminar(null)
          }}
          onCancelar={() => setCitaAEliminar(null)}
        />
      )}
      {citas.map((cita) => (
        <div key={cita.id} className="cita">
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.propietario}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Sintomas: <span>{cita.sintomas}</span></p>
          <button
            className="button eliminar u-full-width"
            onClick={() => setCitaAEliminar(cita.id)}
          >
            Eliminar ×
          </button>
        </div>
      ))}
    </section>
  )
}

export default Citas