import React from 'react';
import { LOOKBOOK_HEROES } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { ArrowUpRight } from 'lucide-react';

export const Lookbook = () => {
  const { openQuickView, PRODUCTS } = useCart();

  return (
    <section
      id="lookbook"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="section-label">13 // EDITORIAL ARCHIVE</span>
          <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
            Lookbook Volume 01
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-muted)',
              display: 'block',
              marginTop: '0.25rem',
            }}
          >
            PHOTOGRAPHED IN PARIS & DHAKA // 2027
          </span>
        </div>

        {/* Vertical Magazine Reel Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {LOOKBOOK_HEROES.map((look, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={look.edition}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                }}
              >
                {/* Image Column */}
                <div
                  style={{
                    order: isReversed ? 2 : 1,
                    height: '560px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-elevated)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                  className="editorial-media-wrapper"
                >
                  <img
                    src={look.image}
                    alt={look.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Narrative Column */}
                <div
                  style={{
                    order: isReversed ? 1 : 2,
                    padding: 'clamp(1rem, 3vw, 3rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      color: 'var(--color-gold-muted)',
                    }}
                  >
                    {look.edition}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                      color: 'var(--color-navy-deep)',
                      marginTop: '0.5rem',
                      lineHeight: 1.1,
                    }}
                  >
                    {look.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: '1.5rem 0',
                    }}
                  >
                    "{look.quote}"
                  </p>

                  <a
                    href="#trending"
                    className="btn-couture-outline"
                    style={{ alignSelf: 'flex-start', padding: '0.75rem 1.6rem' }}
                  >
                    <span>Inspect Silhouette</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
