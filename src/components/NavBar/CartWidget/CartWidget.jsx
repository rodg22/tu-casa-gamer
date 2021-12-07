import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

const CartWidget = () => {

    return ( 
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
        >
            <Link to="/cart" style={{textDecoration: "none", color: "white"}}>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </Link>
        </IconButton>
    );
}

export default CartWidget;