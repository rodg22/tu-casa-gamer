import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({title, description, price, pictureUrl}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pictureUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        US$ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
}
