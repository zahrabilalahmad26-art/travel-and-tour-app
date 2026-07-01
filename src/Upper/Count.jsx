import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ count, setCount, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCount = () => useContext(CartContext);