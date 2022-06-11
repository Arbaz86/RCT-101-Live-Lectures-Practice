import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext"

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const { isAuthorized } = useContext(AuthContext);

    const handleCount = (value) => {
        setCount(count + value);
    }

    const buy = () => {
        if (isAuthorized) {
            console.log("can buy");
        }
        else {
            console.log("can't buy without loggin in");
        }
    }

    return <CartContext.Provider value={{ count, handleCount, buy }}>{children}</CartContext.Provider>
}