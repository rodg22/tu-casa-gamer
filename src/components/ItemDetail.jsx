import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import swal from "sweetalert";

export default function ItemDetail({ item }) {
  const { pictureUrl, title, description, price, stock } = item;

  const [quantityToAdd, setQuantityToAdd] = useState();

  const { addItem, cart } = useCart();

  const onAdd = (quantity) => {
    if (cart.map((cartItem) => cartItem.quantity) + quantity > stock) {
      swal(
        "Ingresá una cantidad menor",
        `Los items en el carrito no deben superar el stock. Tenes ${cart.map(
          (cartItem) => cartItem.quantity
        )} ${title} en el carrito `,
        "warning"
      );
    } else {
      const newItem = {
        ...item,
        quantity: quantity,
      };
      addItem(newItem);
      setQuantityToAdd(quantity);
    }
  };

  return (
    <div className="item-detail">
      <div className="item-detail-container">
        <div className="item-detail-child1">
          {pictureUrl === undefined ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <CircularProgress sx={{}} />
            </Box>
          ) : (
            <img src={`${pictureUrl}`} alt={`${pictureUrl}`} />
          )}
        </div>
        <div className="item-detail-child2">
          <h2>{title}</h2>
          <h3>US$ {price}</h3>
          <div>
            {quantityToAdd === undefined ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              <div className="div-agregaste">
                <p>
                  Agregaste {quantityToAdd} {title} al carrito
                </p>
                <button className="boton-carrito">
                  <Link to="/cart">IR AL CARRITO</Link>
                </button>
                <button className="boton-volver">
                  <Link to="/">SEGUIR COMPRANDO</Link>
                </button>
              </div>
            )}
          </div>
          <p className="stock">Stock: {stock}</p>
        </div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
