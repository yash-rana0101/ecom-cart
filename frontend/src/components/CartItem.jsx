const CartItem = ({ item, onRemove, onUpdateQuantity, disabled }) => {
  const product = item.productId;
  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{product.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            disabled={disabled || item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            disabled={disabled}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-actions">
        <p className="cart-item-subtotal">${subtotal.toFixed(2)}</p>
        <button
          className="remove-btn"
          onClick={onRemove}
          disabled={disabled}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
