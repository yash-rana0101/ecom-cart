import ProductCarousel from './ProductCarousel';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart, showToast, onProductClick }) => {
  // Featured products for carousel (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="product-grid-container">
      {/* Carousel Section */}
      <ProductCarousel
        products={featuredProducts}
        onAddToCart={onAddToCart}
        showToast={showToast}
        onProductClick={onProductClick}
      />

      {/* All Products Grid Section */}
      <div className="all-products-section">
        <h2 className="section-title">All Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={onAddToCart}
              showToast={showToast}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
