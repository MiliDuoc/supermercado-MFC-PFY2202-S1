const tiendas = [
  {
    id: 1,
    nombre: "Sucursal Centro",
    direccion: "Av. Principal 1250",
    ciudad: "Iquique",
    horario: "Lunes a domingo, 08:30 a 21:30",
  },
  {
    id: 2,
    nombre: "Sucursal Norte",
    direccion: "Av. Costanera 850",
    ciudad: "Iquique",
    horario: "Lunes a sábado, 09:00 a 21:00",
  },
  {
    id: 3,
    nombre: "Sucursal Sur",
    direccion: "Av. Los Cóndores 420",
    ciudad: "Alto Hospicio",
    horario: "Lunes a domingo, 09:00 a 20:30",
  },
]

function NuestrasTiendas() {
  return (
    <section>
      <div className="titulo-seccion">
        <div>
          <p className="etiqueta">Sucursales</p>
          <h2>Nuestras tiendas</h2>
          <p>
            Conoce nuestras sucursales y sus horarios de atención.
          </p>
        </div>
      </div>

      <div className="grid-tiendas">
        {tiendas.map((tienda) => (
          <article
            className="tarjeta-tienda"
            key={tienda.id}
          >
            <h3>{tienda.nombre}</h3>

            <p>
              <strong>Dirección:</strong>{" "}
              {tienda.direccion}
            </p>

            <p>
              <strong>Ciudad:</strong>{" "}
              {tienda.ciudad}
            </p>

            <p>
              <strong>Horario:</strong>{" "}
              {tienda.horario}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas