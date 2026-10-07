import React from 'react';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';

export const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-dark)',
        color: 'var(--color-canvas-primary)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27, 106, 133, 0.15) 0%, rgba(197, 168, 128, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-editorial" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            className="section-label"
            style={{ color: 'var(--color-gold-bright)' }}
          >
            14 // CORE PHILOSOPHY
          </span>
        </div>

        {/* Central Glowing Butterfly */}
        <div style={{ marginBottom: '2.5rem' }}>
          <ButterflyLogo size={120} glow={true} />
        </div>

        <h2
          className="display-title"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--color-canvas-primary)',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: 1.15,
            fontWeight: 300,
          }}
        >
          Fashion is not about following every change.
        </h2>

        <h2
          className="display-title editorial-italic"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--color-gold-bright)',
            maxWidth: '850px',
            margin: '0.5rem auto 2.5rem',
            lineHeight: 1.15,
          }}
        >
          It is about creating your own.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-text-tertiary)',
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          We construct garments that do not overpower the individual, but rather act as the catalyst for personal transformation. Wear your effect.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
