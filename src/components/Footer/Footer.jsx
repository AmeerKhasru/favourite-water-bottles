import React from 'react';
// import { Link } from 'react-router-dom'; // removed – not installed
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/shop">Shop</a>
        <a href="/collections">Collections</a>
        <a href="/about">About</a>
        <a href="/guide">Bottle Guide</a>
      </div>
      <p>© 2026 Favourite Water Bottles</p>
    </footer>
  );
}

export default Footer;