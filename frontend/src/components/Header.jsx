import { useAuth } from '../hooks/useAuth';

const Header = ({ cartCount, onCartClick, onLoginClick, onRegisterClick }) => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Shopping Cart</h1>
        </div>

        <div className="header-actions">
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-greeting">Hello, {user?.name?.split(' ')[0]}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <button className="login-btn" onClick={onLoginClick}>
                Login
              </button>
              <button className="register-btn" onClick={onRegisterClick}>
                Register
              </button>
            </div>
          )}

          <button className="cart-button" onClick={onCartClick} aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 2L7.5 6M17 2l1.5 4M3 6h18M4 6l1 14h14l1-14M10 10v4M14 10v4" />
            </svg>
            <span className="cart-text">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
