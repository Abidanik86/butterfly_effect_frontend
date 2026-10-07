import React, { useState } from 'react';

export const FabricShowcase = () => {
  const [activeFabric, setActiveFabric] = useState(0);

  const fabrics = [
    {
      name: 'Pure Mulberry Silk',
      weight: '22 Momme Grade 6A',
      origin: 'Bengal Heritage Sericulture',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85',
      description: 'Spun from natural silkworms fed exclusively on organic white mulberry leaves. Boasts natural temperature regulation, hypoallergenic amino acids, and a luminous pearlescent sheen that catches every angle of light.',
    },
    {
      name: 'Super 130s Merino Wool',
      weight: '260 GSM High-Twist',
      origin: 'Biella, Northern Italy',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85',
      description: 'Engineered for crisp architectural drape without stiffness. Naturally wrinkle-resistant and breathable, tailored into our structured double-breasted obsidian blazers.',
    },
    {
      name: 'Double-Face Cashmere',
      weight: '480 GSM Thermal',
      origin: 'Inner Mongolia Highlands',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
      description: 'Two layers of supreme virgin cashmere hand-stitched along the seam edges with invisible blind stitching, creating coats with immense warmth and weightless presence.',
    },
  ];

  const current = fabrics[activeFabric];

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-secondary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">12 // TEXTILE ARCHITECTURE</span>
          <h2 className="display-title" style={{ color: 'var(--color-navy-deep)', marginTop: '0.5rem' }}>
            Tactile Materiality
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0.5rem auto 0' }}>
            A garment's soul resides in the microscopic thread. Touch the materials defining our collection.
          </p>
        </div>

        {/* Fabric Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {fabrics.map((f, idx) => (
            <button
              key={f.name}
              onClick={() => setActiveFabric(idx)}
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '2px',
                border:
                  activeFabric === idx
                    ? '1px solid var(--color-gold-bright)'
                    : '1px solid var(--color-border-subtle)',
                background:
                  activeFabric === idx
                    ? 'var(--color-navy-deep)'
                    : 'rgba(255, 255, 255, 0.7)',
                color:
                  activeFabric === idx
                    ? 'var(--color-canvas-primary)'
                    : 'var(--color-navy-deep)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Macro Showcase Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            background: 'var(--color-canvas-primary)',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-elevated)',
          }}
        >
          {/* Macro Image */}
          <div style={{ height: '440px', overflow: 'hidden' }} className="editorial-media-wrapper">
            <img
              src={current.image}
              alt={current.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Fabric Specifications */}
          <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-gold-muted)',
                textTransform: 'uppercase',
              }}
            >
              ORIGIN // {current.origin}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.4rem',
                color: 'var(--color-navy-deep)',
                marginTop: '0.5rem',
                lineHeight: 1.15,
              }}
            >
              {current.name}
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--color-teal-ethereal)',
                fontWeight: 600,
                margin: '1rem 0',
              }}
            >
              SPECIFICATION: {current.weight}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
              }}
            >
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricShowcase;
