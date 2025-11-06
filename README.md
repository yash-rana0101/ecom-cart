# Vibe Commerce - Full Stack E-Commerce Cart

A modern, minimalistic shopping cart application built with React, Node.js, Express, and MongoDB.

## Features

- 🛍️ Browse products with beautiful card layouts and carousel
- 🛒 Add/remove items to cart with quantity management
- ⚡ Real-time cart updates
- 🔐 JWT-based user authentication
- 📦 Checkout with complete shipping address
- 🧾 Order receipt generation
- 📱 Fully responsive design across all devices
- 🔔 Toast notifications for user feedback
- 🗄️ MongoDB database persistence
- 🎨 Product carousel with auto-scroll
- 🔍 Product details modal
- 🌐 Fake Store API integration with caching
- 📊 Colored API logging for debugging

## Project Screenshots

![Home Page](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417275/qaxvi6jgnniesesvy3vm.png)

![Product Grid](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417274/pqc8mhvcqhabq41re4zy.png)

![Shopping Cart](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417273/xhtzzlrxrknrzqvrme9s.png)

![Checkout Form](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417272/hnhuvd3pq2xymnakokvg.png)

![Order Receipt](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417272/ub1indmddrzypzyyfkel.png)

![Authentication](https://res.cloudinary.com/dtgiujxll/image/upload/v1762417270/urizi2jh9vhb09oslcul.png)


## Tech Stack

### Frontend
- React 19.1 with Vite
- Axios for API calls
- Context API for state management
- JWT authentication
- Custom CSS with minimalistic design
- Responsive UI components
- Product carousel with auto-scroll

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT authentication with bcrypt
- Fake Store API integration
- RESTful API architecture
- Colored logging middleware
- Error handling middleware
- CORS enabled

## Project Structure

```
assignmnet/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── checkoutController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── logger.js
│   ├── models/
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── checkoutRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   │   └── logger.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Cart.jsx
    │   │   ├── CartItem.jsx
    │   │   ├── CarouselCard.jsx
    │   │   ├── CheckoutModal.jsx
    │   │   ├── Header.jsx
    │   │   ├── Login.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductCarousel.jsx
    │   │   ├── ProductDetailsModal.jsx
    │   │   ├── ProductGrid.jsx
    │   │   ├── ReceiptModal.jsx
    │   │   ├── Register.jsx
    │   │   └── Toast.jsx
    │   ├── context/
    │   │   ├── authContext.js
    │   │   └── AuthContext.jsx
    │   ├── hooks/
    │   │   └── useAuth.js
    │   ├── services/
    │   │   └── api.js
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── vite.config.js
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
```
**Note:** Update the MongoDB URI and JWT secret with your own values.

4. Start the backend server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

**Note:** The application uses Fake Store API for products, so no seeding is required.

### Frontend Setup

1. Open a new terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. The environment variable is already configured in `.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  }
  ```
- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- `GET /api/auth/profile` - Get user profile (requires auth)
- `PUT /api/auth/profile` - Update user profile (requires auth)

### Products
- `GET /api/products` - Get all products (from Fake Store API with caching)
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
  ```json
  { "productId": "id", "quantity": 1 }
  ```
- `PUT /api/cart/:id` - Update cart item quantity
  ```json
  { "quantity": 2 }
  ```
- `DELETE /api/cart/:id` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

### Checkout
- `POST /api/checkout` - Process checkout
  ```json
  {
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "cartItems": [...]
  }
  ```
- `GET /api/checkout/orders` - Get order history

## Color Theme

The application uses a minimalistic color palette:
- Primary Background: `#F9F8F6`
- Secondary Background: `#EFE9E3`
- Tertiary Background: `#D9CFC7`
- Accent Color: `#C9B59C`

## Features Implemented

✅ **Authentication & User Management**
- JWT-based authentication with bcrypt password hashing
- User registration with full profile details
- Login/Logout functionality
- Protected routes with middleware
- User profile management

✅ **Product Management**
- Fake Store API integration with 5-minute caching
- Product carousel with auto-scroll and pause on hover
- Product details modal with quantity selector
- Responsive product grid layout
- Featured products section

✅ **Shopping Cart**
- Add/remove items with real-time updates
- Quantity management with +/- controls
- Cart persistence in MongoDB
- Support for both authenticated and guest users
- String-based product IDs for API compatibility

✅ **Checkout & Orders**
- Complete checkout form with shipping address
- Email validation
- Order number generation
- Order receipt with full details
- Order history for authenticated users

✅ **Backend Features**
- RESTful API with Express
- MongoDB integration with Mongoose
- Colored API logging with timestamps and response times
- Comprehensive error logging with stack traces
- Modular controller structure
- Request/response middleware

✅ **Frontend Features**
- React 19.1 with Vite for fast development
- Context API for authentication state
- Custom hooks (useAuth)
- Toast notifications for user feedback
- Responsive design (mobile-first)
- Loading states and error handling
- Minimalistic UI design  

## Usage

1. **Register/Login**: Create an account or login (optional - guest checkout available)
2. **Browse Products**: View featured products in the carousel and full catalog below
3. **Product Details**: Click on any product to view full details in a modal
4. **Add to Cart**: Click "Add to Cart" on any product or in the details modal
5. **View Cart**: Click the cart icon in the header to see your items
6. **Update Quantity**: Use +/- buttons in the cart to adjust quantities
7. **Remove Items**: Click "Remove" on any cart item
8. **Checkout**: Click "Proceed to Checkout" and fill in shipping details
9. **Complete Order**: Click "Place Order" to complete your purchase
10. **View Receipt**: See your order confirmation with order number and details

### Guest vs. Authenticated User

**Guest Users:**
- Can browse products and add items to cart
- Cart persists in the database with a guest ID
- Must fill out complete shipping information at checkout

**Authenticated Users:**
- All guest features plus:
- Saved profile information auto-fills checkout form
- Order history tracking
- Profile management
- Persistent cart across sessions

## Development Notes

- Frontend uses Vite for fast development and build
- Backend uses nodemon for auto-restart on file changes
- All API calls go through a centralized Axios instance with JWT interceptors
- Components are modular and reusable
- CSS uses CSS custom properties for easy theming
- Responsive breakpoints at 1024px, 768px, and 480px
- Authentication state managed with Context API
- Products fetched from Fake Store API with 5-minute cache
- String-based product IDs support both MongoDB and external API products
- Colored console logging for better debugging (method, URL, status, response time)
- Error logging with detailed stack traces in development mode

## Key Technical Decisions

### Why String Product IDs?
The application integrates with Fake Store API which uses numeric IDs (1, 2, 3), while MongoDB uses 24-character ObjectIds. Using string IDs in the Cart and Order models allows seamless support for both sources without casting errors.

### Fake Store API Integration
Products are fetched from `https://fakestoreapi.com/products` and cached in memory for 5 minutes to reduce API calls. If the API fails, the system falls back to the local MongoDB database.

### Guest User System
Cart functionality works without authentication by assigning a `guest-user` identifier, making the shopping experience frictionless while still enabling authenticated features for registered users.

### Manual Population
Since product IDs can be from external APIs, the cart controller manually populates product data instead of relying on Mongoose's populate() method, ensuring compatibility across all product sources.

## Build for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## License

MIT
