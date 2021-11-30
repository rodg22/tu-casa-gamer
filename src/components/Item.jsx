import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Item({id, title, price, pictureUrl, stock}) {
  
  return (
    <Card className="card-item" sx={{ maxWidth: 345, minWidth: 300, marginBottom: 5}}>
      <Link to={`/item/${id}`} style={{textDecoration: "none", color: "#262626"}}>
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
      </Link>
    </Card>
  );
}
