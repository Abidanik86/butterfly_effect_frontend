import React from 'react';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-dark)',
        color: 'var(--color-canvas-primary)',
        overflow: 'hidden',
        textAlign: 'center',
        paddingBottom: '8rem',
      }}
    >
      <div className="container-editorial">
        {/* Floating Ascending Butterfly Emblem */}
        <div style={{ marginBottom: '2.5rem' }}>
          <ButterflyLogo size={140} glow={true} />
        </div>

        {/* Monolithic Climax Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              letterSpacing: '0.3em',
              color: 'var(--color-gold-muted)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            THE TRANSFORMATION AWAITS
          </span>

          <h2
            className="display-mega"
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
              color: 'var(--color-canvas-primary)',
              lineHeight: 0.95,
            }}
          >
            Ready to Create
          </h2>

          <h2
            className="display-mega editorial-italic text-gold-gradient"
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 7.5rem)',
              lineHeight: 0.95,
            }}
          >
            Your Effect?
          </h2>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#trending"
            className="btn-couture btn-gold"
            style={{
              padding: '1.25rem 3.5rem',
              fontSize: '0.875rem',
              letterSpacing: '0.25em',
            }}
          >
            <span>Enter the Atelier</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
