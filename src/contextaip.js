import { createContext, useContext, useReducer } from "react";
import cartItems from "./data"
import Reducer from "./reducer";

const CartContext = createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
  };
const CartProvider = ({ children }) => {
    const [state , disp]= useReducer(Reducer,initialState);
    const clearCart=()=>{
        disp({type:'CLEAR_CART'});
    }
    const Removeid= id =>{
        disp({type:'REMOVE',payload:id});
    } 
    return(
        <CartContext.Provider value={{...state,clearCart,Removeid}}>{children}</CartContext.Provider>
    )
}
const useCartContext = ()=>{
    return useContext(CartContext);
}
export {CartProvider, useCartContext};
