import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Eye, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalRunway = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const { openQuickView, addToCart, formatPrice } = useCart();

  useEffect(() => {
    // Only pin on desktop / tablet landscape (>992px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 993px)', () => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xDistance = -(totalWidth - viewportWidth + 120);

      gsap.to(track, {
        x: xDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${Math.abs(xDistance)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
      className="horizontal-runway-section"
    >
      <div
        style={{
          paddingTop: '5rem',
          paddingBottom: '2rem',
        }}
        className="container-atelier"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-label">09 // HORIZONTAL RUNWAY</span>
            <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
              The Kinetic Archive
            </h2>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--color-text-secondary)',
            }}
          >
            SCROLL DOWN TO ADVANCE RUNWAY &rarr;
          </span>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '2.5rem',
          padding: '2rem clamp(1.5rem, 5vw, 4rem) 6rem',
          width: 'max-content',
        }}
        className="horizontal-track"
      >
        {PRODUCTS.slice(0, 6).map((product, idx) => (
          <div
            key={product.id}
            style={{
              width: '380px',
              flexShrink: 0,
              background: 'var(--color-canvas-elevated)',
              borderRadius: '4px',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-medium)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'transform 0.4s var(--ease-couture)',
            }}
            className="horizontal-product-card"
          >
            {/* Header pill with index */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--color-border-subtle)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-gold-muted)',
                  fontWeight: 600,
                }}
              >
                0{idx + 1} // 06
              </span>
              <span className="couture-badge">{product.category}</span>
            </div>

            {/* Product Image */}
            <div
              style={{
                height: '420px',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--color-canvas-secondary)',
              }}
              className="editorial-media-wrapper"
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Product Content */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    color: 'var(--color-navy-deep)',
                    lineHeight: 1.2,
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.4rem',
                  }}
                >
                  {product.subtitle}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-navy-deep)',
                    marginBottom: '1rem',
                  }}
                >
                  {formatPrice(product.priceBDT)}
                </div>

                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <button
                    onClick={() => addToCart(product, product.sizes?.[0] || 'M')}
                    className="btn-couture"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.75rem' }}
                  >
                    <ShoppingBag size={14} />
                    <span>Quick Add</span>
                  </button>

                  <button
                    onClick={() => openQuickView(product)}
                    className="btn-couture-outline"
                    style={{ padding: '0.75rem 0.9rem' }}
                    title="Inspect Garment"
                  >
                    <Eye size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 992px) {
          .horizontal-runway-section {
            overflow-x: auto !important;
          }
          .horizontal-track {
            padding-bottom: 3rem !important;
          }
          .horizontal-product-card {
            width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalRunway;
