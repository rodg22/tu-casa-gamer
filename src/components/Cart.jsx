import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const { cart, removeItem, clear, cartTotal } = useCart();

    return cart.length > 0 ? (
        <div>
            <div className="item-cart-header">
                <span>Producto</span>
                <span>Subtotal</span>
            </div>
            {cart.map((item) => (
                <div key={item.title} className="item-cart-container">
                    <div className="item-cart-image"><img src={item.pictureUrl} alt={item.title} /></div>
                    <div className="item-cart-quantity">
                        <div>{item.title}</div>
                        <div>US$ {item.price}  X  {item.quantity}</div>
                    </div>
                    <div className="item-cart-price">US$ {(item.price)*(item.quantity)}</div>
                    <div className="item-cart-delete"><DeleteIcon onClick={() => removeItem(item.id)}/></div>
                </div>
            ))}
            <div className="item-cart-footer">
                <span>Total: US$ {cartTotal()}</span>
            </div>
            <button className="boton-finalizar">Finalizar compra</button>
            <button className="boton-vaciar" onClick={() => clear()}>Vaciar carrito</button>
        </div>
    )
    :
    (<div className="cart-vacio">
        <h1>AÚN NO AGREGASTE ITEMS AL CARRITO</h1>
        <div className="cart-vacio-home"><Link to="/">Volver a comprar</Link></div>
    </div>)
}

export default Cart;
      