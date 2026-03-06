import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Coming Soon! 🌱 Our checkout feature is under development.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-cart-icon">
          <FaShoppingBag />
        </div>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any plants to your cart yet.</p>
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          <FaArrowLeft /> Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      <p className="cart-subtitle">Review your selected plants before checkout</p>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecrease(item.id)}
                >
                  <FaMinus />
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncrease(item.id)}
                >
                  <FaPlus />
                </button>
              </div>

              <div className="cart-item-total">
                <p className="item-total-label">Total</p>
                <p className="item-total-price">${item.totalPrice.toFixed(2)}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items ({cartItems.length})</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="cart-buttons">
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              <FaArrowLeft /> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
