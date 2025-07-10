import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext';

export const Nav = () => {
    const { cartItems } = useCart();
  return (
    <>
    <div className="nav-container">
        <ul>
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/About" >About</NavLink></li>
            <li><NavLink to="/Product" >
                    Add Cart {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </NavLink></li>
        </ul>
    </div>
    </>
  )
}
