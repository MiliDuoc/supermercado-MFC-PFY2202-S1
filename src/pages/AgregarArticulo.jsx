import { useState } from "react"
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import { useInventario } from "../context/InventarioContext"

const inicial = {
  nombre: "",
  marca: "",
  tipo: "",
  stock: ""
}

function AgregarArticulo() {
  const { agregarArticulo } = useInventario()
  const [formulario, setFormulario] = useState(inicial)
  const [mensaje, setMensaje] = useState("")

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value
    })
    setMensaje("")
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (
      !formulario.nombre.trim() ||
      !formulario.marca.trim() ||
      !formulario.tipo ||
      formulario.stock === ""
    ) {
      setMensaje("Completa todos los campos.")
      return
    }

    agregarArticulo(formulario)
    setFormulario(inicial)
    setMensaje("Artículo agregado correctamente.")
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Agregar artículo
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Ingresa un nuevo producto al inventario.
      </Typography>

      <Paper
        component="form"
        onSubmit={manejarEnvio}
        sx={{ p: 3, maxWidth: 650, display: "grid", gap: 2 }}
      >
        <TextField
          label="Nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />

        <TextField
          label="Marca"
          name="marca"
          value={formulario.marca}
          onChange={manejarCambio}
          required
        />

        <TextField
          select
          label="Tipo de producto"
          name="tipo"
          value={formulario.tipo}
          onChange={manejarCambio}
          required
        >
          <MenuItem value="Abarrotes">Abarrotes</MenuItem>
          <MenuItem value="Lácteos">Lácteos</MenuItem>
          <MenuItem value="Panadería">Panadería</MenuItem>
          <MenuItem value="Limpieza">Limpieza</MenuItem>
          <MenuItem value="Frutas y verduras">Frutas y verduras</MenuItem>
          <MenuItem value="Bebidas">Bebidas</MenuItem>
        </TextField>

        <TextField
          label="Stock"
          name="stock"
          type="number"
          value={formulario.stock}
          onChange={manejarCambio}
          inputProps={{ min: 0 }}
          required
        />

        <Button type="submit" variant="contained" color="success">
          Agregar al inventario
        </Button>

        {mensaje && (
          <Alert
            severity={
              mensaje.includes("correctamente")
                ? "success"
                : "error"
            }
          >
            {mensaje}
          </Alert>
        )}
      </Paper>
    </Box>
  )
}

export default AgregarArticulo
