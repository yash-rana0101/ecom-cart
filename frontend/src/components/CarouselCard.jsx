import { useState } from 'react';
import { addToCart } from '../services/api';

const CarouselCard = ({ product, onAddToCart, showToast, onProductClick }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    try {
      setLoading(true);
      await addToCart(product._id);
      onAddToCart();
      showToast(`${product.name} added to cart!`, 'success');
    } catch (error) {
      showToast(error.message || 'Failed to add to cart', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <div className="carousel-card" onClick={handleCardClick}>
      <div className="carousel-card-image">
        <img src={product.image} alt={product.name} />
        <div className="carousel-card-overlay">
          <div className="carousel-card-info">
            <h3 className="carousel-product-name">{product.name}</h3>
            <p className="carousel-product-price">${product.price.toFixed(2)}</p>
            <button
              className="carousel-add-btn"
              onClick={handleAddToCart}
              disabled={loading || product.stock === 0}
            >
              {loading ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
