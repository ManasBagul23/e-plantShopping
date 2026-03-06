import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantCategories = {
  "Indoor Plants": [
    { id: 1, name: "Snake Plant", price: 15, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 2, name: "Peace Lily", price: 18, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 3, name: "Spider Plant", price: 12, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 4, name: "ZZ Plant", price: 20, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 5, name: "Pothos", price: 10, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 6, name: "Areca Palm", price: 25, image: "https://i.imgur.com/2nCt3Sbl.jpg" }
  ],

  "Medicinal Plants": [
    { id: 7, name: "Aloe Vera", price: 10, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 8, name: "Tulsi", price: 8, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 9, name: "Neem", price: 12, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 10, name: "Ashwagandha", price: 14, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 11, name: "Mint", price: 7, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 12, name: "Curry Leaf", price: 9, image: "https://i.imgur.com/2nCt3Sbl.jpg" }
  ],

  "Aromatic Plants": [
    { id: 13, name: "Lavender", price: 15, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 14, name: "Rosemary", price: 13, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 15, name: "Basil", price: 9, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 16, name: "Lemongrass", price: 8, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 17, name: "Thyme", price: 11, image: "https://i.imgur.com/2nCt3Sbl.jpg" },
    { id: 18, name: "Chamomile", price: 10, image: "https://i.imgur.com/2nCt3Sbl.jpg" }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedToCart, setAddedToCart] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.id]: true });
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            Cart 🛒 ({totalItems})
          </Link>
        </div>
      </nav>

      <h1>Our Plants</h1>

      {Object.keys(plantCategories).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">

            {plantCategories[category].map((plant) => (
              <div key={plant.id} className="plant-card">

                <img src={plant.image} alt={plant.name} width="150" />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={addedToCart[plant.id]}
                  onClick={() => handleAdd(plant)}
                >
                  {addedToCart[plant.id] ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
