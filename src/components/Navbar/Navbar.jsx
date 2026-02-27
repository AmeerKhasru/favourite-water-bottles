import React from 'react';
// import { Link } from 'react-router-dom'; // ← drop this if you’re not using it
import './Navbar.css';

function Navbar() {
  const cartCount = 3;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="brand">
            <span className="brand-highlight">Favourite</span> Water Bottles
          </a>
        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/guide">Bottle Guide</a></li>
          </ul>
        </div>

        <div className="navbar-right">
          <a href="/cart" className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;