import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Cart } from './Cart'

export const Product = () => {

    const { isAuthorized } = useContext(AuthContext);

    return (
        <div>Product: {isAuthorized ? "LoggedIn" : "Loggedout"}
            <Cart />
        </div>
    )
}
