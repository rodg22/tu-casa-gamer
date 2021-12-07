import React from 'react';
import Grid from '@mui/material/Grid';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const { cart } = useCart();

    return cart.length > 0 ? (
        <div>
            <div className="item-cart-header">
                <span>Producto</span>
                <span>Subtotal</span>
            </div>
            {cart.map((item) => (
                <div className="item-cart-container">
                    <div className="item-cart-image"><img src={item.pictureUrl} alt={item.title} /></div>
                    <div className="item-cart-quantity">
                        <div>{item.title}</div>
                        <div>US$ {item.price}</div>
                        <div>{item.quantity}</div>
                    </div>
                    <div className="item-cart-price">US$ {(item.price)*(item.quantity)}</div>
                    <div className="item-cart-delete"><DeleteIcon /></div>
                </div>
            ))}
            <div className="item-cart-footer">
                <span>Total:</span>
            </div>
            <button className="boton-finalizar">Finalizar compra</button>
        </div>
    )
    :
    (<>
        <h1>AUN NO AGREGASTE ITEMS AL CARRITO</h1>
        <Link to="/">Volver a comprar</Link>
    </>)
}

export default Cart;
      