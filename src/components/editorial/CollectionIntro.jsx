import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CollectionIntro = () => {
  return (
    <section
      id="collections"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '3.5rem',
          }}
        >
          <span className="section-label">05 // NEW CAPSULE</span>
          <h2
            className="display-title"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              color: 'var(--color-navy-deep)',
              marginTop: '0.5rem',
            }}
          >
            Series 01: Metamorphosis
          </h2>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              letterSpacing: '0.15em',
              color: 'var(--color-gold-muted)',
              marginTop: '0.25rem',
            }}
          >
            SPRING / SUMMER 2027 ARCHIVE
          </span>
        </div>

        {/* Monolith Editorial Card */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(480px, 70vh, 780px)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-elevated)',
            border: '1px solid var(--color-border-subtle)',
          }}
          className="editorial-media-wrapper"
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2000&q=85"
            alt="Spring Summer 2027 Collection"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
            }}
          />

          {/* Luxury Gradient Tint */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(7, 19, 31, 0.75) 0%, rgba(7, 19, 31, 0.2) 60%, transparent 100%)',
            }}
          />

          {/* Floating Editorial Glass Card on Left Side */}
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(2rem, 5vw, 4rem)',
              left: 'clamp(1.5rem, 5vw, 4rem)',
              maxWidth: '460px',
              padding: '2.5rem',
              background: 'rgba(249, 248, 245, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(197, 168, 128, 0.35)',
              borderRadius: '2px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Sparkles size={14} color="var(--color-gold-bright)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-navy-deep)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                LIMITED ATELIER PRODUCTION
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--color-navy-deep)',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              The Architecture of Weightlessness
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                marginBottom: '1.75rem',
              }}
            >
              Sculpted double-face cashmere meets mulberry silk chiffon. A collection conceived for those who shape the atmosphere they inhabit.
            </p>

            <a href="#trending" className="btn-couture" style={{ padding: '0.9rem 1.8rem', fontSize: '0.75rem' }}>
              <span>Explore Series 01</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionIntro;
