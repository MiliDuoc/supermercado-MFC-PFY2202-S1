import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography
} from "@mui/material"
import { Route, Routes } from "react-router-dom"

import MenuInferior from "./components/MenuInferior"
import { RUTAS } from "./constants/rutas"

import Home from "./pages/Home"
import AgregarArticulo from "./pages/AgregarArticulo"
import Inventario from "./pages/Inventario"
import NuestrasTiendas from "./pages/NuestrasTiendas"
import Contacto from "./pages/Contacto"
import NoEncontrado from "./pages/NoEncontrado"

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        pb: 10
      }}
    >
      <AppBar position="static" color="success">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">
              GESTIÓN DE INVENTARIO
            </Typography>

            <Typography variant="h5" fontWeight="bold">
              Supermercado MFC
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path={RUTAS.INICIO} element={<Home />} />
          <Route path={RUTAS.AGREGAR} element={<AgregarArticulo />} />
          <Route path={RUTAS.INVENTARIO} element={<Inventario />} />
          <Route path={RUTAS.TIENDAS} element={<NuestrasTiendas />} />
          <Route path={RUTAS.CONTACTO} element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </Container>

      <MenuInferior />
    </Box>
  )
}

export default App
