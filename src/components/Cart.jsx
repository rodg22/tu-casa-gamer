import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

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
          <div className="item-cart-image">
            <img src={item.pictureUrl} alt={item.title} />
          </div>
          <div className="item-cart-quantity">
            <div>{item.title}</div>
            <div>
              US$ {item.price} X {item.quantity}
            </div>
          </div>
          <div className="item-cart-price">
            US$ {item.price * item.quantity}
          </div>
          <div className="item-cart-delete">
            <DeleteIcon onClick={() => removeItem(item.id)} />
          </div>
        </div>
      ))}
      <div className="item-cart-footer">
        <span>Total: US$ {cartTotal()}</span>
      </div>
      <div className="botones-cart">
        <button className="boton-volver">
          <Link to="/">SEGUIR COMPRANDO</Link>
        </button>
        <button className="boton-iniciar-compra">
          <Link to="/form">INICIAR COMPRA</Link>
        </button>
        <button className="boton-vaciar" onClick={() => clear()}>
          VACIAR CARRITO
        </button>
      </div>
    </div>
  ) : (
    <div className="cart-vacio">
      <h1>AÚN NO AGREGASTE ITEMS AL CARRITO</h1>
      <button className="cart-vacio-home">
        <Link to="/">Volver al catálogo</Link>
      </button>
    </div>
  );
};

export default Cart;
