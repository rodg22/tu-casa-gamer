import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export default function Item({id, title, description, price, pictureUrl, stock}) {
  
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, marginBottom: 5 }}>
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
        <Typography gutterBottom variant="h6" component="div">
        US$ {price}
        </Typography>
      </CardContent>
      <ItemCount
      stock={stock}
      initial={1}
      />
      <CardActions>
        <Link to={`/item/${id}`} style={{textDecoration: "none"}}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
