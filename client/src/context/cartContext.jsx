import { useContext, createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return {
        cart: action.payload,
      };
    }
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return {
        cart: updatedCart,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return {
        cart: updatedCart,
      };
    }
    case "CLEAR_CART": {
      localStorage.removeItem("userCart");
      return {
        cart: [],
      };
    }
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("userCart"));
    if (storedCart) {
      dispatch({ type: "SET_CART", payload: storedCart });
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
