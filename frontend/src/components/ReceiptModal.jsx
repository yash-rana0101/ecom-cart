const ReceiptModal = ({ receipt, onClose }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content receipt-modal" onClick={(e) => e.stopPropagation()}>
        <div className="receipt-header">
          <div className="success-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2>Order Successful!</h2>
          <p className="order-number">Order #{receipt.orderNumber}</p>
        </div>

        <div className="receipt-body">
          <div className="customer-info">
            <h3>Customer Details</h3>
            <p><strong>Name:</strong> {receipt.customerName}</p>
            <p><strong>Email:</strong> {receipt.customerEmail}</p>
            <p><strong>Date:</strong> {formatDate(receipt.timestamp)}</p>
          </div>

          <div className="receipt-items">
            <h3>Order Items</h3>
            {receipt.items.map((item, index) => (
              <div key={index} className="receipt-item">
                <div className="item-info">
                  <span className="item-name">{item.productName}</span>
                  <span className="item-quantity">x {item.quantity}</span>
                </div>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="receipt-total">
            <span>Total Amount:</span>
            <span className="total-amount">${receipt.totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="receipt-footer">
          <p className="thank-you">Thank you for your purchase!</p>
          <button className="close-receipt-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
