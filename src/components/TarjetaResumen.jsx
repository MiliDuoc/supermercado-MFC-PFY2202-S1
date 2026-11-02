import { Card, CardContent, Typography } from "@mui/material"

function TarjetaResumen({ etiqueta, valor }) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography color="text.secondary">
          {etiqueta}
        </Typography>

        <Typography
          variant="h4"
          color="success.dark"
          fontWeight="bold"
        >
          {valor}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TarjetaResumen
