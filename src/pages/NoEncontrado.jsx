import { Link } from "react-router-dom"

function NoEncontrado() {
  return (
    <section className="pagina-no-encontrada">
      <p className="etiqueta">Error 404</p>

      <h2>Página no encontrada</h2>

      <p>
        La dirección que intentaste visitar no existe.
      </p>

      <Link
        to="/"
        className="boton-principal enlace-boton"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NoEncontrado