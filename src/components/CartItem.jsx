import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {

    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }

  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (

        cartItems.map((item) => (

          <div key={item.id} className="cart-item">

            <img src={item.image} alt={item.name} width="120" />

            <div className="cart-details">

              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Total Price: ${item.price * item.quantity}</p>

              <div className="quantity-controls">

                <button onClick={() => decreaseQuantity(item)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item)}>+</button>

              </div>

              <button
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>

            </div>

          </div>

        ))

      )}

      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <button onClick={handleCheckout}>
        Checkout
      </button>

      <br />
      <br />

      <Link to="/plants">
        <button>
          Continue Shopping
        </button>
      </Link>

    </div>
  );
};

export default CartItem;
