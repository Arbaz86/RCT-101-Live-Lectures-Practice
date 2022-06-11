import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { Wishlist } from './Wishlist'

export const Navbar = () => {

    const { isAuthorized, login, logout } = useContext(AuthContext)
    const { buy } = useContext(CartContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>Navbar
            <button onClick={() => { isAuthorized ? logout() : login("A", "P") }}>{isAuthorized ? 'logout' : 'Login'}</button>
            <button onClick={buy}>Buy</button>
            <button onClick={toggleTheme}>Make {theme === "light" ? "dark" : "light"}</button>
            <Wishlist />
        </div >
    )
}
