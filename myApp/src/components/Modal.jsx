function Modal({ onConfirmar, onCancelar }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 999
    }}>
      <div style={{
        background: 'white', padding: '2rem',
        borderRadius: '1rem', textAlign: 'center'
      }}>
        <h3>¿Eliminás esta cita?</h3>
        <button className="button eliminar" onClick={onConfirmar}>Sí, eliminar</button>
        <button className="button" onClick={onCancelar} style={{ marginLeft: '1rem' }}>Cancelar</button>
      </div>
    </div>
  )
}

export default Modal