import React from 'react';
import { PRODUCTS } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { Eye, ShoppingBag, Sparkles } from 'lucide-react';

export const WomensCollection = () => {
  const { openQuickView, addToCart, formatPrice } = useCart();
  const heroProduct = PRODUCTS[0]; // Signature Silk Gown

  return (
    <section
      id="womens"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">07 // WOMEN'S ATELIER</span>
          <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
            The Fluid Sanctuary
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', maxWidth: '480px' }}>
            Pure mulberry silks, sculpted backless evening wear, and ethereal accordion pleats.
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '620px',
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'var(--shadow-elevated)',
          }}
          className="editorial-media-wrapper"
        >
          <img
            src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=2000&q=85"
            alt="Women's Silk Collection"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(7, 19, 31, 0.6) 0%, transparent 60%)',
            }}
          />

          {/* Floating Product Highlight Card */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              marginLeft: 'clamp(1.5rem, 5vw, 4rem)',
              maxWidth: '420px',
              padding: '2.5rem',
              background: 'rgba(249, 248, 245, 0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(197, 168, 128, 0.4)',
              borderRadius: '2px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={13} color="var(--color-gold-bright)" />
              <span className="couture-badge">{heroProduct.tag}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.9rem',
                color: 'var(--color-navy-deep)',
                lineHeight: 1.2,
              }}
            >
              {heroProduct.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                marginTop: '0.5rem',
                lineHeight: 1.6,
              }}
            >
              {heroProduct.subtitle}
            </p>

            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: 'var(--color-navy-deep)',
                margin: '1.25rem 0',
              }}
            >
              {formatPrice(heroProduct.priceBDT)}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => addToCart(heroProduct, 'M')}
                className="btn-couture"
                style={{ flex: 1, padding: '0.85rem 1.25rem', fontSize: '0.75rem' }}
              >
                <ShoppingBag size={14} />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => openQuickView(heroProduct)}
                className="btn-couture-outline"
                style={{ padding: '0.85rem 1rem' }}
                title="Quick View"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomensCollection;
