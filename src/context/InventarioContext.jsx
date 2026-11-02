import { createContext, useContext, useState } from "react"
import { productosIniciales } from "../data/productosIniciales"

const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState(productosIniciales)

  const agregarArticulo = (articulo) => {
    setArticulos((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        ...articulo,
        stock: Number(articulo.stock)
      }
    ])
  }

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  )
}

export function useInventario() {
  return useContext(InventarioContext)
}
