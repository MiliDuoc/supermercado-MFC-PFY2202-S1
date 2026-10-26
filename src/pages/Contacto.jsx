import { useState } from "react"

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)

  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario({
      ...formulario,
      [name]: value,
    })
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    setEnviado(true)

    setFormulario({
      nombre: "",
      correo: "",
      mensaje: "",
    })
  }

  return (
    <section>
      <div className="titulo-seccion">
        <div>
          <p className="etiqueta">Atención al cliente</p>
          <h2>Contáctanos</h2>
          <p>
            Envíanos tus consultas y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>
      </div>

      <div className="contacto-contenedor">
        <form
          className="formulario-contacto"
          onSubmit={manejarEnvio}
        >
          <div className="campo">
            <label htmlFor="nombre">
              Nombre
            </label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="correo">
              Correo electrónico
            </label>

            <input
              id="correo"
              name="correo"
              type="email"
              value={formulario.correo}
              onChange={manejarCambio}
              placeholder="correo@ejemplo.cl"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder="Escribe tu consulta"
              required
            />
          </div>

          <button
            type="submit"
            className="boton-principal"
          >
            Enviar mensaje
          </button>

          {enviado && (
            <p className="mensaje-exito">
              Tu mensaje fue enviado correctamente.
            </p>
          )}
        </form>

        <aside className="datos-contacto">
          <h3>Información de contacto</h3>

          <p>
            <strong>Teléfono:</strong> +56 57 222 0000
          </p>

          <p>
            <strong>Correo:</strong> contacto@supermercadomfc.cl
          </p>

          <p>
            <strong>Horario:</strong> Lunes a viernes, 09:00 a 18:00
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Contacto