import { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

class CartWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <IconButton
                size="large"
                aria-label="show 1 new items in cart"
                color="inherit"
                >
                <Badge badgeContent={1} color="error">
                <ShoppingCartIcon />
                </Badge>
            </IconButton> );
    }
}
 
export default CartWidget;