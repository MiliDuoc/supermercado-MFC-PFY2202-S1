import { Routes, Route } from "react-router-dom"
import MenuInferior from "./components/MenuInferior"
import Home from "./pages/Home"
import NuestrasTiendas from "./pages/NuestrasTiendas"
import Contacto from "./pages/Contacto"
import NoEncontrado from "./pages/NoEncontrado"

function App() {
  return (
    <div className="app">
      <header className="encabezado">
        <div>
          <p className="encabezado-subtitulo">
            Gestión de inventario
          </p>

          <h1>Supermercado MFC</h1>
        </div>
      </header>

      <main className="contenido-principal">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/tiendas"
            element={<NuestrasTiendas />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />

          <Route
            path="*"
            element={<NoEncontrado />}
          />
        </Routes>
      </main>

      <MenuInferior />
    </div>
  )
}

export default App