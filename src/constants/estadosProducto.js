export const ESTADOS_PRODUCTO = {
  DISPONIBLE: "Disponible",
  STOCK_BAJO: "Stock bajo"
}

export const obtenerEstadoStock = (stock) =>
  stock < 10
    ? ESTADOS_PRODUCTO.STOCK_BAJO
    : ESTADOS_PRODUCTO.DISPONIBLE
