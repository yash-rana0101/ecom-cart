/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import ReceiptModal from './components/ReceiptModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import Toast from './components/Toast';
import Login from './components/Login';
import Register from './components/Register';
import { getProducts, getCart } from './services/api';
import './App.css';

function AppContent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [loading, setLoading] = useState(true);

  const fetchInitialData = useCallback(async () => {
    try {
      setLoading(true);
      const [productsData, cartData] = await Promise.all([
        getProducts(),
        getCart()
      ]);
      setProducts(productsData);
      setCart(cartData);
    } catch (err) {
      showToast('Failed to load data. Please refresh the page.', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const refreshCart = async () => {
    try {
      const cartData = await getCart();
      setCart(cartData);
    } catch (err) {
      showToast('Failed to update cart', 'error');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  const handleCheckoutComplete = (receipt) => {
    setOrderReceipt(receipt);
    setShowCheckout(false);
    setShowCart(false);
    refreshCart();
    showToast('Order placed successfully!', 'success');
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const cartItemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <div className="app">
      <Header
        cartCount={cartItemCount}
        onCartClick={() => setShowCart(true)}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <main className="main-content">
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          <ProductGrid
            products={products}
            onAddToCart={refreshCart}
            showToast={showToast}
            onProductClick={setSelectedProduct}
          />
        )}
      </main>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={refreshCart}
          showToast={showToast}
        />
      )}

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
          onUpdate={refreshCart}
          showToast={showToast}
        />
      )}

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          onClose={() => setShowCheckout(false)}
          onComplete={handleCheckoutComplete}
          showToast={showToast}
        />
      )}

      {orderReceipt && (
        <ReceiptModal
          receipt={orderReceipt}
          onClose={() => setOrderReceipt(null)}
        />
      )}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={handleSwitchToRegister}
          showToast={showToast}
        />
      )}

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={handleSwitchToLogin}
          showToast={showToast}
        />
      )}

      {toast.show && (
        <Toast message={toast.message} type={toast.type} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
