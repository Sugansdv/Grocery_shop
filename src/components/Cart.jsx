import React, { useContext } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import Address from './Address';
import { Helmet } from 'react-helmet';
import '../assets/css/Cart.css';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, removeItemCompletely } = useContext(CartContext);

  const handleIncrement = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      addToCart(item);
    }
  };

  const handleDecrement = (id) => {
    removeFromCart(id);
  };

  const handleRemoveItem = (id) => {
    removeItemCompletely(id);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const delivery = 0;
  const discount = 220;
  const total = subtotal - discount;
  const navigate = useNavigate();

  const handleCheckout = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
      alert('Please log in to proceed to checkout.');
      return;
    }
    navigate('/address');
  };

  const isLoggedIn = !!localStorage.getItem('loggedInUser');

  return (
    <>
      <Helmet>
        <title>Groceries Cart</title>
      </Helmet>

      <div className="py-5 step-nav mt-5">
        <h2 className="cart-title mt-5">Cart</h2>
        <div className="steps">
          <span className="step active">BAG</span>
          <span className="arrow">›</span>
          <span className="step">Address</span>
          <span className="arrow">›</span>
          <span className="step">Payment</span>
        </div>
      </div>

      <div className="cart-container mb-5">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img1" />
                <div className="cart-details">
                  <p className="cat">{item.category}</p>
                  <h3>{item.name.toUpperCase()}</h3>
                  <p>₹ {item.price}</p>
                </div>
                <div className="qty-control">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div>
                  <button
                    className="ms-5 ms-md-0 mt-md-5 remove-btn bg-warning"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <p>Subtotal <span>₹ {subtotal}</span></p>
            <p>Delivery Charges <span>₹ {delivery}</span></p>
            <p>Discount <span className="discount">- ₹ {discount}</span></p>
            <hr />
            <h3>TOTAL <span>₹ {total}</span></h3>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={!isLoggedIn}
              style={{ opacity: isLoggedIn ? 1 : 0.6, cursor: isLoggedIn ? 'pointer' : 'not-allowed' }}
            >
              CHECKOUT
            </button>

            <div className="secure mt-2">
              <i className="bi bi-lock-fill me-2"></i>100% Secure Payments
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
