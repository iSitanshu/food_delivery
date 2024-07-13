import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem , setCartItem] = useState({});

    const addToCart = (itemId) => { //if the user first time add some thing then this statement will be executed
        if(!cartItem[itemId]){ //if not available add in cart
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{ //if already present in the cart, increase the number
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => { //decrease the value in cart by 1
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;