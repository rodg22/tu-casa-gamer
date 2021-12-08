import ItemCount from './ItemCount';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import {useCart} from '../context/CartContext';

export default function ItemDetail({item}) {
    const { pictureUrl, title, description, price, stock } = item;

    const [quantityToAdd, setQuantityToAdd] = useState();

    const { addItem } = useCart();

    const onAdd = (quantity) => {
      const newItem = {
        ...item,
        quantity: quantity
      };
      addItem(newItem);
      setQuantityToAdd(quantity);
    };

    return (
      <div className="item-detail">
        <div className="item-detail-container">
          <div className="item-detail-child1">
            <img src={`${pictureUrl}`} alt={`${pictureUrl}`} />
          </div>
          <div className="item-detail-child2">
            <h2>{title}</h2>
            <h3>US$ {price}</h3>
            <div>
              {quantityToAdd === undefined ?
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                :
                <div className="div-agregaste">
                  <p>Agregaste {quantityToAdd} {title} al carrito</p>
                  <Link to="/cart">
                    <button className="boton-carrito">Ir al carrito</button>
                  </Link>
                  <Link to="/">
                    <button className="boton-volver">Seguir comprando</button>
                  </Link>
                </div>
              }
            </div>
            <p className="stock">Stock: {stock}</p>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    );
};
