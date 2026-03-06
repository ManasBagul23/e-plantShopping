import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaLeaf, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaLeaf className="brand-icon" />
        <Link to="/" className="brand-name">Paradise Nursery</Link>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            <FaLeaf className="nav-icon" />
            Plants
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link cart-link">
            <FaShoppingCart className="nav-icon" />
            Cart
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
