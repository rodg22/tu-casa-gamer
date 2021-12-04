import { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
    setCart([...cart, {key: item.quantity, item: item}]);
    console.log(`Agregaste ${item.quantity} ${item.title}`);
    };

  const CartContextValues = {
    cart,
    setCart,
    addItem,
  };

  return (<CartContext.Provider value={CartContextValues}>
            {children}
          </CartContext.Provider>);
};
  