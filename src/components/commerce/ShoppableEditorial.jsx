import React, { useState } from 'react';
import { PRODUCTS } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Eye, X, Sparkles } from 'lucide-react';

export const ShoppableEditorial = () => {
  const { openQuickView, addToCart, formatPrice } = useCart();
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 0,
      x: '38%',
      y: '28%',
      product: PRODUCTS[2], // Chrysalis Cashmere Trench
      label: 'Cashmere Trench',
    },
    {
      id: 1,
      x: '52%',
      y: '50%',
      product: PRODUCTS[3], // Ethereal Wing-Pleat Blouse
      label: 'Wing-Pleat Blouse',
    },
    {
      id: 2,
      x: '62%',
      y: '68%',
      product: PRODUCTS[5], // Vortex Brass Monogram Clutch
      label: 'Vortex Brass Clutch',
    },
  ];

  const currentHotspot = hotspots[activeHotspot];

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">10 // SHOP THE RUNWAY LOOK</span>
          <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
            The Complete Ensemble
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0.5rem auto 0' }}>
            Tap the golden radar nodes to discover the individual pieces composing Look 04.
          </p>
        </div>

        {/* Interactive Shoppable Canvas */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            height: 'clamp(520px, 75vh, 820px)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-elevated)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=85"
            alt="Editorial Shoppable Model"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
            }}
          />

          {/* Vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 19, 31, 0.5) 100%)',
            }}
          />

          {/* Radar Hotspot Buttons */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{
                position: 'absolute',
                top: spot.y,
                left: spot.x,
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
              }}
            >
              <button
                onClick={() => setActiveHotspot(spot.id)}
                style={{
                  position: 'relative',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: activeHotspot === spot.id ? 'var(--color-gold-bright)' : 'rgba(249, 248, 245, 0.95)',
                  border: '2px solid var(--color-navy-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease',
                  transform: activeHotspot === spot.id ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={`Inspect ${spot.label}`}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: activeHotspot === spot.id ? '#fff' : 'var(--color-navy-deep)',
                  }}
                />
                {/* Radar pulse animation */}
                <span
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-gold-bright)',
                    animation: 'radarPulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                  }}
                />
              </button>
            </div>
          ))}

          {/* Floating Product Drawer for Selected Hotspot */}
          {currentHotspot && (
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                maxWidth: '380px',
                background: 'rgba(249, 248, 245, 0.94)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                borderRadius: '4px',
                padding: '1.5rem',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.3)',
                zIndex: 10,
                animation: 'popIn 0.3s var(--ease-couture) forwards',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div
                  style={{
                    width: '70px',
                    height: '90px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: 'var(--color-canvas-secondary)',
                  }}
                >
                  <img
                    src={currentHotspot.product.image}
                    alt={currentHotspot.product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <span className="couture-badge" style={{ fontSize: '0.625rem', padding: '0.2rem 0.5rem' }}>
                    {currentHotspot.product.tag}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: 'var(--color-navy-deep)',
                      marginTop: '0.3rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {currentHotspot.product.title}
                  </h4>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      color: 'var(--color-navy-deep)',
                      margin: '0.4rem 0',
                    }}
                  >
                    {formatPrice(currentHotspot.product.priceBDT)}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button
                  onClick={() => addToCart(currentHotspot.product, 'M')}
                  className="btn-couture"
                  style={{ flex: 1, padding: '0.7rem 1rem', fontSize: '0.75rem' }}
                >
                  <ShoppingBag size={14} />
                  <span>Add Piece</span>
                </button>
                <button
                  onClick={() => openQuickView(currentHotspot.product)}
                  className="btn-couture-outline"
                  style={{ padding: '0.7rem' }}
                  title="Quick View"
                >
                  <Eye size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes radarPulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) {
          .shoppable-card {
            inset: auto 1rem 1rem 1rem !important;
            max-width: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ShoppableEditorial;
