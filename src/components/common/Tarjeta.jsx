import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


const Tarjeta = ({ character }) => {

  const { image, name, status } = character

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Tarjeta