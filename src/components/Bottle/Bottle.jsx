import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {

    const handleImageError = (e) => {
        e.target.src = bottle.alt_photo_url || 'https://placehold.co/600x400?text=Image+Unavailable';
    };
    return (
       <div className={`bottle-card ${!bottle.in_stock ? 'out-of-stock' : ''}`}>
      {/* Thermal Badges */}
      <div className="thermal-badge">
        {bottle.thermal_specs.hot_safe && <span>🔥 Hot</span>}
        {bottle.thermal_specs.cold_safe && <span>❄️ Cold</span>}
      </div>

      <div className="image-container">
        <img 
          src={bottle.photo_url} 
          alt={bottle.product_name} 
          className="bottle-image"
          onError={handleImageError}
        />
      </div>

      <div className="bottle-info">
        <span className="category">{bottle.category}</span>
        <h3 className="product-name">{bottle.product_name}</h3>
        <p className="price">${bottle.price}</p>
        
        <ul className="feature-list">
          {bottle.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button onClick={()=>handleAddToCart(bottle)} className="buy-btn" disabled={!bottle.in_stock}>
          {bottle.in_stock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
    );
};

export default Bottle;