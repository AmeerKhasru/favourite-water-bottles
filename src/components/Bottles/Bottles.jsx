import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle) => { 
        setCart(prevCart => [...prevCart, bottle]);
        
    }

    return (
        <div className='product-grid'>
            {bottles.map((bottle) => (
                <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
                
    ))  }
        </div>
    );
};

export default Bottles;