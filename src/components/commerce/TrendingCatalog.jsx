import React, { useState } from 'react';
import { PRODUCTS } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

export const TrendingCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { openQuickView, addToCart, formatPrice, isWishlisted, toggleWishlist } = useCart();

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'womens', label: "Women's" },
    { id: 'mens', label: "Men's" },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Objects & Bags' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="trending"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          <span className="section-label">11 // CURATED SELECTION</span>
          <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
            Trending in the Atelier
          </h2>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.4rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  border:
                    selectedCategory === cat.id
                      ? '1px solid var(--color-navy-deep)'
                      : '1px solid var(--color-border-subtle)',
                  background:
                    selectedCategory === cat.id
                      ? 'var(--color-navy-deep)'
                      : 'transparent',
                  color:
                    selectedCategory === cat.id
                      ? 'var(--color-canvas-primary)'
                      : 'var(--color-navy-deep)',
                  transition: 'all 0.3s var(--ease-couture)',
                  cursor: 'pointer',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.5rem 1.75rem',
          }}
        >
          {filteredProducts.map((product) => {
            const saved = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
                className="catalog-product-card"
              >
                {/* Media Container with Image Crossfade */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '135%', // 3:4 aspect ratio
                    overflow: 'hidden',
                    borderRadius: '2px',
                    background: 'var(--color-canvas-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                  className="product-image-container"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-couture), opacity 0.5s ease',
                    }}
                    className="primary-img"
                  />

                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.title} look`}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.6s ease',
                      }}
                      className="hover-img"
                    />
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      right: '0.85rem',
                      zIndex: 3,
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--color-border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: saved ? 'var(--color-teal-ethereal)' : 'var(--color-navy-deep)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                    }}
                    title={saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
                  >
                    <Heart size={15} fill={saved ? 'currentColor' : 'none'} />
                  </button>

                  {/* Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.85rem',
                      left: '0.85rem',
                      zIndex: 3,
                    }}
                  >
                    <span className="couture-badge">{product.tag}</span>
                  </div>

                  {/* Hover Quick Action Drawer */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 'auto 0 0 0',
                      padding: '1rem',
                      background: 'linear-gradient(0deg, rgba(7, 19, 31, 0.75) 0%, transparent 100%)',
                      display: 'flex',
                      gap: '0.5rem',
                      opacity: 0,
                      transform: 'translateY(10px)',
                      transition: 'all 0.3s ease',
                      zIndex: 4,
                    }}
                    className="card-quick-actions"
                  >
                    <button
                      onClick={() => addToCart(product, product.sizes?.[0] || 'M')}
                      className="btn-couture"
                      style={{ flex: 1, padding: '0.65rem', fontSize: '0.7rem' }}
                    >
                      <ShoppingBag size={13} />
                      <span>Add to Bag</span>
                    </button>
                    <button
                      onClick={() => openQuickView(product)}
                      className="btn-couture-outline"
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: 'rgba(255, 255, 255, 0.9)',
                      }}
                      title="Quick View"
                    >
                      <Eye size={15} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: 'var(--color-navy-deep)',
                        lineHeight: 1.25,
                      }}
                    >
                      {product.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {product.subtitle}
                  </p>

                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--color-navy-deep)',
                      marginTop: '0.6rem',
                    }}
                  >
                    {formatPrice(product.priceBDT)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .product-image-container:hover .primary-img {
          transform: scale(1.05);
        }
        .product-image-container:hover .hover-img {
          opacity: 1 !important;
          transform: scale(1.05);
        }
        .product-image-container:hover .card-quick-actions {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default TrendingCatalog;
