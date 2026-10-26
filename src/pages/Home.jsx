const productos = [
  {
    id: 1,
    nombre: "Arroz 1 kg",
    categoria: "Abarrotes",
    stock: 24,
    estado: "Disponible",
  },
  {
    id: 2,
    nombre: "Leche 1 L",
    categoria: "Lácteos",
    stock: 15,
    estado: "Disponible",
  },
  {
    id: 3,
    nombre: "Pan de molde",
    categoria: "Panadería",
    stock: 7,
    estado: "Stock bajo",
  },
  {
    id: 4,
    nombre: "Aceite vegetal 1 L",
    categoria: "Abarrotes",
    stock: 18,
    estado: "Disponible",
  },
  {
    id: 5,
    nombre: "Detergente 1 L",
    categoria: "Limpieza",
    stock: 4,
    estado: "Stock bajo",
  },
  {
    id: 6,
    nombre: "Manzanas 1 kg",
    categoria: "Frutas y verduras",
    stock: 30,
    estado: "Disponible",
  },
]

function Home() {
  return (
    <section>
      <div className="titulo-seccion">
        <div>
          <p className="etiqueta">Panel principal</p>
          <h2>Inventario del supermercado</h2>
          <p>
            Revisa los productos disponibles y su estado de stock.
          </p>
        </div>
      </div>

      <div className="resumen-inventario">
        <article className="tarjeta-resumen">
          <span>Productos registrados</span>
          <strong>{productos.length}</strong>
        </article>

        <article className="tarjeta-resumen">
          <span>Con stock disponible</span>
          <strong>
            {
              productos.filter(
                (producto) => producto.estado === "Disponible"
              ).length
            }
          </strong>
        </article>

        <article className="tarjeta-resumen">
          <span>Con stock bajo</span>
          <strong>
            {
              productos.filter(
                (producto) => producto.estado === "Stock bajo"
              ).length
            }
          </strong>
        </article>
      </div>

      <div className="tabla-contenedor">
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{producto.stock}</td>
                <td>
                  <span
                    className={
                      producto.estado === "Disponible"
                        ? "estado disponible"
                        : "estado bajo"
                    }
                  >
                    {producto.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home