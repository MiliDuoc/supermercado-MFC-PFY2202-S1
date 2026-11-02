import { Box, Typography } from "@mui/material"
import TarjetaResumen from "../components/TarjetaResumen"
import { useInventario } from "../context/InventarioContext"

function Home() {
  const { articulos } = useInventario()

  const disponibles = articulos.filter(
    (articulo) => articulo.stock >= 10
  ).length

  const bajos = articulos.filter(
    (articulo) => articulo.stock < 10
  ).length

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestión de inventario
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Resumen actualizado del supermercado.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)"
          },
          gap: 2
        }}
      >
        <TarjetaResumen
          etiqueta="Productos registrados"
          valor={articulos.length}
        />

        <TarjetaResumen
          etiqueta="Con stock disponible"
          valor={disponibles}
        />

        <TarjetaResumen
          etiqueta="Con stock bajo"
          valor={bajos}
        />
      </Box>
    </Box>
  )
}

export default Home
