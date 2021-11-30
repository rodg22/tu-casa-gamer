import React, {useState} from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function ItemCount({stock, initial, onAdd}){
    
    const [contador, setContador] = useState(initial);

    
    const restar = () => {
        const qty = contador - 1;
        if(qty >= initial) {
            setContador(qty)
        }
    };

    const sumar = () => {
        const qty = contador + 1;
        if(qty <= stock) {
            setContador(qty)
        };
    };

    return(
        <>
            <CardActions>
                <Button onClick={restar} size="small">-</Button>
                <Typography size="small">{contador}</Typography>
                <Button onClick={sumar} size="small">+</Button>
            </CardActions>
            <CardActions>
                <Button onClick={() => onAdd(contador)} size="small">Agregar al carrito</Button>
            </CardActions>
        </>
    )
}
