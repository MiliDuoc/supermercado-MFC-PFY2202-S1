import { NavLink } from "react-router-dom"
import { Box, Button, Paper } from "@mui/material"
import { RUTAS } from "../constants/rutas"

const opciones = [
  ["Inicio", RUTAS.INICIO],
  ["Agregar", RUTAS.AGREGAR],
  ["Inventario", RUTAS.INVENTARIO],
  ["Tiendas", RUTAS.TIENDAS],
  ["Contacto", RUTAS.CONTACTO]
]

function MenuInferior() {
  return (
    <Paper
      component="nav"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 1,
        zIndex: 1000
      }}
      elevation={8}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1
        }}
      >
        {opciones.map(([texto, ruta]) => (
          <NavLink
            key={ruta}
            to={ruta}
            end={ruta === "/"}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Button
                color="success"
                variant={isActive ? "contained" : "text"}
              >
                {texto}
              </Button>
            )}
          </NavLink>
        ))}
      </Box>
    </Paper>
  )
}

export default MenuInferior
