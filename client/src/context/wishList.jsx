import { createContext, useContext, useEffect, useReducer } from 'react';

// create context
export const WishListContext = createContext();

const wishListReducer = (state, action) => {
    switch (action.type) {
      case "SET_WISHLIST": {
        return {
          wishList: action.payload,
        };
      }
      case "ADD_TO_WISHLIST": {
        const updatedWishList = [...state.wishList, action.payload];
        localStorage.setItem("userWishlist", JSON.stringify(updatedWishList));
        return {
          wishList: updatedWishList,
        };
      }
      case "REMOVE_FROM_WISHLIST": {
        const updatedWishList = state.wishList.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("userWishlist", JSON.stringify(updatedWishList));
        return {
          wishList: updatedWishList,
        };
      }
      case "CLEAR_WISHLIST": {
        localStorage.removeItem("userWishlist");
        return {
          wishList: [],
        };
      }
      default:
        return state;
    }
  };
   
export const WishListContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(wishListReducer, { wishList: [] });

    useEffect(() => {
        const storedWishList = JSON.parse(localStorage.getItem("userWishlist"));
        console.log(storedWishList);
        if (storedWishList) {
            dispatch({ type: "SET_WISHLIST", payload: storedWishList });
        }
    }, []);

    return (
        <WishListContext.Provider value={{ state, dispatch }}>
            {children}
        </WishListContext.Provider>
    )
}

export const useWishList = () => useContext(WishListContext);

