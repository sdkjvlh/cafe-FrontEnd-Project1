// Product.jsx
import React from 'react';
import { Nav } from './Nav';
import { useCart } from './CartContext';
import './Product.css';

export const Product = () => {
  const { cartItems } = useCart();

  // Calculate the total price
  const totalPrice = cartItems.reduce((acc, item) => acc + parseInt(item.price.replace('₹', '')), 0);

  return (
    <>
       <div className="navbar-content">
              <div className="heading">
               <strong>Tea B</strong>
               <img src="bench.png"  />
               <strong>nch</strong>
              </div>
              <div className="nav">
        <Nav />
              </div>
            </div>

      <div className="car-content">
        <div className="cart-items" style={{ padding: '1rem' }}>
          <h2>Items in Cart</h2>

          {cartItems.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <div className="data">
              <ul>
              {cartItems.map((item, index) => (
                <li key={index}> <img src={item.img}/>
                  <strong>{item.title}</strong> <i>- {item.price}</i> 
                </li>
              ))}
            </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="total-price">
              <h3><b>Total:</b>  ₹{totalPrice}</h3>
            </div>
          )}
        </div>
      </div>

    </>
  );
};
