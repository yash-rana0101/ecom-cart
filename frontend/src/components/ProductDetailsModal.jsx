import { useState } from 'react';
import { addToCart } from '../services/api';

const ProductDetailsModal = ({ product, onClose, onAddToCart, showToast }) => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      await addToCart(product._id, quantity);
      onAddToCart();
      showToast(`${quantity} × ${product.name} added to cart!`, 'success');
      onClose();
    } catch (error) {
      showToast(error.message || 'Failed to add to cart', 'error');
    } finally {
      setLoading(false);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content product-details-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="product-details-content">
          <div className="product-details-left">
            <div className="product-main-image">
              <img src={product.image} alt={product.name} />
            </div>
            {product.rating && (
              <div className="product-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={index < Math.floor(product.rating.rate) ? '#FFD700' : '#E0E0E0'}
                      stroke="none"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="rating-text">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="product-details-right">
            <span className="product-category-badge">{product.category}</span>
            <h2 className="product-details-title">{product.name}</h2>
            <p className="product-details-price">${product.price.toFixed(2)}</p>

            <div className="product-stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">✓ In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">✗ Out of Stock</span>
              )}
            </div>

            <div className="product-details-description">
              <h3>Product Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-details-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-display">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="add-to-cart-btn-large"
                onClick={handleAddToCart}
                disabled={loading || product.stock === 0}
              >
                {loading ? 'Adding to Cart...' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">SKU:</span>
                <span className="meta-value">#{product._id.slice(-8).toUpperCase()}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
