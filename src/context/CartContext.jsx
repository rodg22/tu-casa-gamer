import { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
  return cart.some((cartItem) => cartItem.id === item.id);
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      let totalQuantity = item.quantity
      const newCartItem = cart.map(cartItem => cartItem.id === item.id ?
        { ...cartItem, quantity: totalQuantity += cartItem.quantity }
        :
        cartItem)
      setCart(newCartItem);
    } else {
      const newCartItem = [...cart, item];
      setCart(newCartItem);
    }
  }

  const removeItem = (itemId) => {
    const deleteItem = cart.filter((item) => item.id !== itemId)
    setCart(deleteItem);
  }

  const clear = () => setCart([]);

  const countItems = () => {
    if (cart.length > 0) {
      let totalItems = 0;
      cart.map((item) => (totalItems += item.quantity));
      return totalItems;
    }
  };

  const cartTotal = () => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };

  const CartContextValues = {
    cart,
    setCart,
    addItem,
    removeItem,
    clear,
    countItems,
    cartTotal,
  };

  return (<CartContext.Provider value={CartContextValues}>
            {children}
          </CartContext.Provider>);
};