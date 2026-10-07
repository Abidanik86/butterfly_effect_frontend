import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DualRunway = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dual speed parallax
      gsap.to(leftColRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(rightColRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">06 // DUAL PERSPECTIVES</span>
          <h2 className="display-title" style={{ marginTop: '0.5rem', color: 'var(--color-navy-deep)' }}>
            Form Meets Velocity
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column — Micro Detail & Seam Craft (Slower) */}
          <div ref={leftColRef} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div
              style={{
                height: '460px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
              }}
              className="editorial-media-wrapper"
            >
              <img
                src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85"
                alt="Velvet Texture Close-Up"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold-muted)',
                }}
              >
                PERSPECTIVE A // MACRO DRAPE
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: 'var(--color-navy-deep)',
                  marginTop: '0.4rem',
                }}
              >
                Liquid Silk Under Light
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  marginTop: '0.6rem',
                  lineHeight: 1.7,
                }}
              >
                Dyed in deep obsidian and submerged peacock teal, our textiles capture ambient shadows and reflect them with subtle optical luminescence.
              </p>
            </div>
          </div>

          {/* Right Column — Full Silhouette Runway (Faster) */}
          <div
            ref={rightColRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              marginTop: 'clamp(0px, 4vw, 4rem)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold-muted)',
                }}
              >
                PERSPECTIVE B // KINETIC MOVEMENT
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: 'var(--color-navy-deep)',
                  marginTop: '0.4rem',
                }}
              >
                The Runway in Motion
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  marginTop: '0.6rem',
                  lineHeight: 1.7,
                }}
              >
                Every garment is draped directly onto live moving forms rather than static mannequins, ensuring the cut expands gracefully with the wearer's gait.
              </p>
            </div>

            <div
              style={{
                height: '540px',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-medium)',
              }}
              className="editorial-media-wrapper"
            >
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                alt="Runway Full Silhouette"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualRunway;
