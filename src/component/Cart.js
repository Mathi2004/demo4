import React, { useContext } from 'react';
import {CartContext} from '../CartContext'; // Replace './CartContext' with the correct path to your CartContext.js file

function Cart() {
  const { cartItems } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-products">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((product, index) => (
              <li key={index}>
                <img src={product.image} alt={product.name} />
                <span>
                  {product.name} - Rs{product.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Total: Rs{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Cart;
