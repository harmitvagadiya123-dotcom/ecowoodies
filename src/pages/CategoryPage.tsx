import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData, defaultProducts } from '../data/productsData';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();

  const sidebarCategories = [
    { title: "Stools", path: "stools" },
    { title: "Bamboo Furniture", path: "bamboo-furniture" },
    { title: "Baby Doll Strollers", path: "baby-doll-strollers" },
    { title: "Bamboo Amplifiers", path: "bamboo-amplifiers" },
    { title: "Bamboo Dining Sets", path: "bamboo-dining-sets" },
    { title: "Handcrafted Baskets", path: "handcrafted-baskets" },
    { title: "Minimalist Chairs", path: "minimalist-chairs" },
    { title: "Hanging Chairs", path: "hanging-chairs" },
    { title: "Kids Chairs", path: "kids-chairs" },
    { title: "Lighting", path: "lighting" },
    { title: "Lounge Chairs", path: "lounge-chairs" },
    { title: "Newborn Photography", path: "newborn-photography" },
    { title: "Pet Beds", path: "pet-beds" },
    { title: "Rocking Chairs", path: "rocking-chairs" },
    { title: "Bamboo Shelves", path: "bamboo-shelves" },
    { title: "Sofa Sets", path: "sofa-sets" },
    { title: "Storage Boxes", path: "storage-boxes" },
    { title: "Tables", path: "tables" },
    { title: "Serving Trays", path: "serving-trays" }
  ];

  const currentCategoryId = categoryId ? categoryId.toLowerCase().trim() : '';
  const products = productsData[currentCategoryId] || defaultProducts;

  return (
    <div className="category-page-container">
      {/* Sidebar */}
      <div className="category-sidebar">
        <h3>Product Categories</h3>
        <ul className="sidebar-list">
          {sidebarCategories.map((cat, idx) => {
            const isActive = currentCategoryId === cat.path;
            return (
              <li key={idx}>
                <Link 
                  to={`/products/${cat.path}`} 
                  className={`sidebar-item-link ${isActive ? 'active' : ''}`}
                >
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="category-main-content">
        <div className="category-header">
          <h2 style={{ textTransform: 'capitalize' }}>
            {categoryId ? categoryId.replace(/-/g, ' ') : 'All Products'}
          </h2>
          <span className="category-header-info">
            {products.length} products found
          </span>
        </div>

        <div className="category-products-grid">
          {products.map(product => (
            <div key={product.id} className="category-product-card">
              <div className="category-product-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="category-product-info">
                <h4 className="category-product-title" title={product.title}>
                  {product.title}
                </h4>
                <div className="category-product-price">
                  {product.price}
                </div>
                <div className="category-product-min-order">
                  Min. Order: {product.minOrder}
                </div>
                <button className="category-chat-btn">
                  Chat now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

