import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsData = {
    indoorPlants: [
      {
        id: 1,
        name: 'Snake Plant',
        price: 25,
        image: 'https://images.unsplash.com/photo-1593482892540-59a2e8a5e5bf?w=300&h=300&fit=crop',
        description: 'Easy to care, air-purifying plant',
      },
      {
        id: 2,
        name: 'Pothos',
        price: 18,
        image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=300&h=300&fit=crop',
        description: 'Trailing vine perfect for shelves',
      },
      {
        id: 3,
        name: 'Peace Lily',
        price: 30,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e6de4?w=300&h=300&fit=crop',
        description: 'Beautiful white flowers',
      },
      {
        id: 4,
        name: 'Rubber Plant',
        price: 35,
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop',
        description: 'Glossy dark green leaves',
      },
      {
        id: 5,
        name: 'ZZ Plant',
        price: 28,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop',
        description: 'Drought tolerant and low light',
      },
      {
        id: 6,
        name: 'Monstera',
        price: 45,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop',
        description: 'Iconic split leaves',
      },
    ],
    aromaticPlants: [
      {
        id: 7,
        name: 'Lavender',
        price: 22,
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=300&h=300&fit=crop',
        description: 'Calming fragrance',
      },
      {
        id: 8,
        name: 'Rosemary',
        price: 15,
        image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300&h=300&fit=crop',
        description: 'Aromatic culinary herb',
      },
      {
        id: 9,
        name: 'Mint',
        price: 12,
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop',
        description: 'Fresh and cooling scent',
      },
      {
        id: 10,
        name: 'Jasmine',
        price: 32,
        image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=300&h=300&fit=crop',
        description: 'Sweet floral fragrance',
      },
      {
        id: 11,
        name: 'Lemon Balm',
        price: 14,
        image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=300&h=300&fit=crop',
        description: 'Citrusy lemony aroma',
      },
      {
        id: 12,
        name: 'Basil',
        price: 10,
        image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300&h=300&fit=crop',
        description: 'Classic Italian herb',
      },
    ],
    medicinalPlants: [
      {
        id: 13,
        name: 'Aloe Vera',
        price: 20,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300&h=300&fit=crop',
        description: 'Healing gel for skin',
      },
      {
        id: 14,
        name: 'Tulsi (Holy Basil)',
        price: 16,
        image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=300&h=300&fit=crop',
        description: 'Sacred medicinal herb',
      },
      {
        id: 15,
        name: 'Turmeric',
        price: 18,
        image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop',
        description: 'Anti-inflammatory properties',
      },
      {
        id: 16,
        name: 'Ginger',
        price: 15,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=300&fit=crop',
        description: 'Digestive aid and immunity',
      },
      {
        id: 17,
        name: 'Chamomile',
        price: 14,
        image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=300&h=300&fit=crop',
        description: 'Calming tea plant',
      },
      {
        id: 18,
        name: 'Ashwagandha',
        price: 24,
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=300&h=300&fit=crop',
        description: 'Adaptogenic stress relief',
      },
    ],
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const renderPlantCard = (plant) => (
    <div className="plant-card" key={plant.id}>
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-price">${plant.price}</p>
        <button
          className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
          onClick={() => handleAddToCart(plant)}
          disabled={isInCart(plant.id)}
        >
          {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="product-list">
      <h1 className="product-list-title">Our Plant Collection</h1>
      
      <section className="plant-category">
        <h2 className="category-title">🏠 Indoor Plants</h2>
        <p className="category-description">
          Perfect companions for your living spaces - low maintenance and air-purifying
        </p>
        <div className="plants-grid">
          {plantsData.indoorPlants.map(renderPlantCard)}
        </div>
      </section>

      <section className="plant-category">
        <h2 className="category-title">🌸 Aromatic Plants</h2>
        <p className="category-description">
          Fill your home with natural fragrances and use them in your cooking
        </p>
        <div className="plants-grid">
          {plantsData.aromaticPlants.map(renderPlantCard)}
        </div>
      </section>

      <section className="plant-category">
        <h2 className="category-title">💚 Medicinal Plants</h2>
        <p className="category-description">
          Nature's pharmacy at your fingertips - traditional healing plants
        </p>
        <div className="plants-grid">
          {plantsData.medicinalPlants.map(renderPlantCard)}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
