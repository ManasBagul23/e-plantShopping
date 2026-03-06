import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {

  const cartItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const increase = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decrease = (item) => {
    if (item.quantity > 1) {
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
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cartItems.map(item => (

        <div key={item.id} className="cart-item">

          <img src={item.image} width="100" />

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => decrease(item)}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => increase(item)}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>

      ))}

      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <button>Checkout (Coming Soon)</button>

      <button>Continue Shopping</button>

    </div>
  );
};

export default CartItem;
