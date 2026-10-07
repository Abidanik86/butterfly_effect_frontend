import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag, Check, Shield } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    formatPrice,
    isWishlisted,
    toggleWishlist,
  } = useCart();

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes?.[0] || 'M');
      setSelectedColor(0);
      setActiveImage(quickViewProduct.image);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && quickViewProduct) {
        closeQuickView();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quickViewProduct, closeQuickView]);

  if (!quickViewProduct) return null;

  const isSaved = isWishlisted(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize);
    closeQuickView();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(7, 19, 31, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal Dialog */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          background: 'var(--color-canvas-primary)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          zIndex: 2,
          animation: 'modalFadeUp 0.35s var(--ease-couture) forwards',
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '50%',
            padding: '0.45rem',
            color: 'var(--color-navy-deep)',
            cursor: 'pointer',
          }}
          aria-label="Close Preview"
        >
          <X size={20} />
        </button>

        {/* Product Media Column */}
        <div
          style={{
            position: 'relative',
            background: 'var(--color-canvas-secondary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '380px',
          }}
        >
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <img
              src={activeImage || quickViewProduct.image}
              alt={quickViewProduct.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                maxHeight: '520px',
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>

          {/* Alternate Image Switcher */}
          {quickViewProduct.hoverImage && (
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: 'rgba(249, 248, 245, 0.9)',
                borderTop: '1px solid var(--color-border-subtle)',
              }}
            >
              <button
                onClick={() => setActiveImage(quickViewProduct.image)}
                style={{
                  width: '42px',
                  height: '52px',
                  border: activeImage === quickViewProduct.image ? '2px solid var(--color-navy-deep)' : '1px solid var(--color-border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <img src={quickViewProduct.image} alt="Look 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>

              <button
                onClick={() => setActiveImage(quickViewProduct.hoverImage)}
                style={{
                  width: '42px',
                  height: '52px',
                  border: activeImage === quickViewProduct.hoverImage ? '2px solid var(--color-navy-deep)' : '1px solid var(--color-border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <img src={quickViewProduct.hoverImage} alt="Look 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            </div>
          )}
        </div>

        {/* Product Information Column */}
        <div
          style={{
            padding: '2.5rem 2.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="couture-badge">{quickViewProduct.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-tertiary)' }}>
                {quickViewProduct.sku}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                lineHeight: 1.15,
                color: 'var(--color-navy-deep)',
                marginBottom: '0.35rem',
              }}
            >
              {quickViewProduct.title}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '1.25rem',
              }}
            >
              {quickViewProduct.subtitle}
            </p>

            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--color-navy-deep)',
                marginBottom: '1.5rem',
              }}
            >
              {formatPrice(quickViewProduct.priceBDT)}
            </div>

            {/* Color Swatches */}
            {quickViewProduct.colors && (
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '0.6rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Color: {quickViewProduct.colors[selectedColor]?.name}
                </span>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {quickViewProduct.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(idx)}
                      title={color.name}
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: color.hex,
                        border: '2px solid #fff',
                        outline: selectedColor === idx ? '2px solid var(--color-navy-deep)' : '1px solid rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s ease',
                        transform: selectedColor === idx ? 'scale(1.15)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Select Size
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--color-gold-muted)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Atelier Size Guide
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {quickViewProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.55rem 1.1rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      border: selectedSize === size ? '1px solid var(--color-navy-deep)' : '1px solid var(--color-border-subtle)',
                      background: selectedSize === size ? 'var(--color-navy-deep)' : 'transparent',
                      color: selectedSize === size ? 'var(--color-canvas-primary)' : 'var(--color-navy-deep)',
                      borderRadius: '2px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Craftsmanship */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
                marginBottom: '1rem',
              }}
            >
              {quickViewProduct.description}
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
              {quickViewProduct.details?.map((detail) => (
                <li
                  key={detail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  <Check size={13} color="var(--color-gold-muted)" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={handleAdd}
              className="btn-couture"
              style={{ flex: 1, padding: '1rem' }}
            >
              <ShoppingBag size={16} />
              <span>Add to Selection</span>
            </button>

            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              style={{
                padding: '1rem',
                border: '1px solid var(--color-border-medium)',
                borderRadius: '2px',
                color: isSaved ? 'var(--color-teal-ethereal)' : 'var(--color-navy-deep)',
                background: isSaved ? 'rgba(27, 106, 133, 0.08)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              title={isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default QuickViewModal;
