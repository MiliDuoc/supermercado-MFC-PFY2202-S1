import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material"
import { useInventario } from "../context/InventarioContext"
import {
  ESTADOS_PRODUCTO,
  obtenerEstadoStock
} from "../constants/estadosProducto"

function Inventario() {
  const { articulos } = useInventario()

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Inventario completo
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Artículos registrados: {articulos.length}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Producto</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Stock</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {articulos.map((articulo) => {
              const estado = obtenerEstadoStock(articulo.stock)

              return (
                <TableRow key={articulo.id}>
                  <TableCell>{articulo.nombre}</TableCell>
                  <TableCell>{articulo.marca}</TableCell>
                  <TableCell>{articulo.tipo}</TableCell>
                  <TableCell>{articulo.stock}</TableCell>
                  <TableCell>
                    <Chip
                      label={estado}
                      color={
                        estado === ESTADOS_PRODUCTO.DISPONIBLE
                          ? "success"
                          : "warning"
                      }
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Inventario
