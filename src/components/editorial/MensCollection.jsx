import React from 'react';
import { PRODUCTS } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { Eye, ShoppingBag, Layers } from 'lucide-react';

export const MensCollection = () => {
  const { openQuickView, addToCart, formatPrice } = useCart();
  const blazer = PRODUCTS[1]; // Architectural Obsidian Blazer
  const trousers = PRODUCTS[4]; // Monolith Relaxed Trousers

  return (
    <section
      id="mens"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span className="section-label">08 // MEN'S ARCHIVE</span>
            <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
              Architectural Structure
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', maxWidth: '480px' }}>
              Deconstructed Savile Row tailoring, relaxed high-waisted wool trousers, and raw silk overshirts.
            </p>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--color-navy-deep)',
            }}
          >
            BESPOKE &bull; MADE TO ORDER
          </span>
        </div>

        {/* Dual Asymmetric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Piece 1: Blazer */}
          <div
            style={{
              background: 'var(--color-canvas-primary)',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-medium)',
            }}
          >
            <div style={{ height: '420px', overflow: 'hidden' }} className="editorial-media-wrapper">
              <img
                src={blazer.image}
                alt={blazer.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="couture-badge">{blazer.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                  {blazer.sku}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy-deep)' }}>
                {blazer.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                {blazer.subtitle}
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-navy-deep)', margin: '1rem 0' }}>
                {formatPrice(blazer.priceBDT)}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => addToCart(blazer, '40R')}
                  className="btn-couture"
                  style={{ flex: 1, padding: '0.8rem 1rem', fontSize: '0.75rem' }}
                >
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => openQuickView(blazer)}
                  className="btn-couture-outline"
                  style={{ padding: '0.8rem 1rem' }}
                >
                  <Eye size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Piece 2: Trousers */}
          <div
            style={{
              background: 'var(--color-canvas-primary)',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-medium)',
            }}
          >
            <div style={{ height: '420px', overflow: 'hidden' }} className="editorial-media-wrapper">
              <img
                src={trousers.image}
                alt={trousers.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="couture-badge">{trousers.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                  {trousers.sku}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-navy-deep)' }}>
                {trousers.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                {trousers.subtitle}
              </p>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-navy-deep)', margin: '1rem 0' }}>
                {formatPrice(trousers.priceBDT)}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => addToCart(trousers, '32')}
                  className="btn-couture"
                  style={{ flex: 1, padding: '0.8rem 1rem', fontSize: '0.75rem' }}
                >
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={() => openQuickView(trousers)}
                  className="btn-couture-outline"
                  style={{ padding: '0.8rem 1rem' }}
                >
                  <Eye size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MensCollection;
