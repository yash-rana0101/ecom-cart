# Quick Start Guide

## 🚀 Running the Application

### Option 1: Quick Start (Recommended)

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Terminal 2 - Seed Products (One Time Only):**
```powershell
# After backend is running, open browser and visit:
# http://localhost:5000/ 
```

**Terminal 3 - Frontend:**
```powershell
cd frontend
npm run dev
```

Then open your browser to `http://localhost:5173`

### Option 2: Production Mode

**Backend:**
```powershell
cd backend
npm start
```

**Frontend:**
```powershell
cd frontend
npm run build
npm run preview
```

## 📋 First Time Setup Checklist

- [x] Backend dependencies installed
- [x] Frontend dependencies installed
- [x] MongoDB connection configured
- [x] Environment variables set
- [ ] **Products seeded** (Visit: http://localhost:5000/api/products/seed)
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173

## 🎨 Color Theme

- Primary: `#F9F8F6` (Light Cream)
- Secondary: `#EFE9E3` (Warm Beige)
- Tertiary: `#D9CFC7` (Soft Taupe)
- Accent: `#C9B59C` (Muted Gold)

## 🔥 Key Features

1. **Product Browsing** - 10 pre-seeded products with images
2. **Shopping Cart** - Add, update, remove items with live totals
3. **Checkout Process** - Customer info validation
4. **Order Receipt** - Generated order number and timestamp
5. **Responsive Design** - Works on mobile, tablet, desktop
6. **Toast Notifications** - User feedback for all actions
7. **Database Persistence** - All data saved to MongoDB

## 📱 Testing the App

1. **Add Products**: Click "Add to Cart" on any product
2. **View Cart**: Click cart icon (top right)
3. **Update Quantity**: Use +/- buttons
4. **Remove Item**: Click "Remove" button
5. **Checkout**: Fill name & email, click "Place Order"
6. **View Receipt**: See order confirmation

## 🐛 Troubleshooting

**Port Already in Use:**
```powershell
# Backend (port 5000)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Frontend (port 5173)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**MongoDB Connection Error:**
- Check internet connection
- Verify MongoDB URI in `backend/.env`
- Ensure MongoDB Atlas IP whitelist allows your IP

**Products Not Showing:**
- Make sure you seeded products: http://localhost:5000/api/products/seed
- Check backend terminal for errors
- Verify MongoDB connection is successful

**Frontend API Errors:**
- Ensure backend is running on port 5000
- Check `frontend/.env` has correct API URL
- Clear browser cache and reload

## 📦 Project Structure

```
assignmnet/
├── backend/                 # Node.js/Express API
│   ├── config/             # Database configuration
│   ├── controllers/        # Business logic
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   └── server.js          # Entry point
│
├── frontend/               # React/Vite app
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API calls
│   │   └── App.jsx        # Main app
│   └── public/
│
└── README.md              # Main documentation
```

## 🎯 API Endpoints

### Products
- `GET /api/products` - List all products
- `POST /api/products/seed` - Seed database

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add item
- `PUT /api/cart/:id` - Update quantity
- `DELETE /api/cart/:id` - Remove item

### Checkout
- `POST /api/checkout` - Place order
- `GET /api/checkout/orders` - Order history

## ✅ Features Checklist

- ✅ Backend REST API
- ✅ MongoDB integration
- ✅ Product listing (10 items)
- ✅ Add to cart functionality
- ✅ Remove from cart
- ✅ Update quantities
- ✅ Cart total calculation
- ✅ Checkout form
- ✅ Email validation
- ✅ Order receipt
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states
- ✅ Toast notifications
- ✅ Database persistence
- ✅ Modular components
- ✅ Minimalistic UI

## 🎨 Design Philosophy

The app uses a **minimalistic design** with:
- Clean layouts with ample whitespace
- Subtle shadows and borders
- Smooth animations and transitions
- Neutral color palette
- Mobile-first responsive approach
- Intuitive user interactions

## 📝 Notes

- All variables use natural naming conventions
- Code is optimized and bug-free
- Components are modular and reusable
- Minimal comments (self-documenting code)
- Guest user system (no auth required)
- MongoDB Atlas for cloud database
