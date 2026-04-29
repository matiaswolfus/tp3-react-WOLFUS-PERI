import { useState } from "react"

function Formulario({ agregarCita }) {
  const mandar = (e) => {
    e.preventDefault()
    const formulario = e.target

    agregarCita({
      id: Date.now(),
      mascota: formulario.mascota.value,
      propietario: formulario.propietario.value,
      fecha: formulario.fecha.value,
      hora: formulario.hora.value,
      sintomas: formulario.sintomas.value,
    })

    formulario.reset()
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={mandar}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </div>
  )
}

export default Formulario
