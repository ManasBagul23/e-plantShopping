import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Indoor Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Indoor Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Indoor Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    id: 5,
    name: "Tulsi",
    price: 8,
    category: "Medicinal Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    id: 6,
    name: "Mint",
    price: 7,
    category: "Aromatic Plants",
    image: "https://i.imgur.com/2nCt3Sbl.jpg"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart({
      ...addedToCart,
      [plant.id]: true
    });
  };

  return (
    <div>
      <h1>Plants</h1>

      <div className="plant-grid">
        {plants.map((plant) => (
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
  );
};

export default ProductList;

