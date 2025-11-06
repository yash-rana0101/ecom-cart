import { useState } from 'react';
import CartItem from './CartItem';
import { removeFromCart, updateCartItem } from '../services/api';

const Cart = ({ cart, onClose, onCheckout, onUpdate, showToast }) => {
  const [updating, setUpdating] = useState(false);

  const handleRemoveItem = async (itemId) => {
    try {
      setUpdating(true);
      await removeFromCart(itemId);
      onUpdate();
      showToast('Item removed from cart', 'success');
    } catch (error) {
      showToast(error.message || 'Failed to remove item', 'error');
    } finally {
      setUpdating(false);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      setUpdating(true);
      await updateCartItem(itemId, newQuantity);
      onUpdate();
    } catch (error) {
      showToast(error.message || 'Failed to update quantity', 'error');
    } finally {
      setUpdating(false);
    }
  };

  const handleCheckout = () => {
    if (cart?.items?.length === 0) {
      showToast('Your cart is empty', 'error');
      return;
    }
    onCheckout();
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="cart-content">
          {!cart || cart.items.length === 0 ? (
            <div className="empty-cart">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 2L7.5 6M17 2l1.5 4M3 6h18M4 6l1 14h14l1-14" />
              </svg>
              <p>Your cart is empty</p>
              <button className="continue-shopping-btn" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.items.map(item => (
                  <CartItem
                    key={item._id}
                    item={item}
                    onRemove={() => handleRemoveItem(item._id)}
                    onUpdateQuantity={(qty) => handleUpdateQuantity(item._id, qty)}
                    disabled={updating}
                  />
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span className="total-label">Total:</span>
                  <span className="total-amount">${cart.totalAmount.toFixed(2)}</span>
                </div>
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  disabled={updating}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
