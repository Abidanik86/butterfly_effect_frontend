import React, { useState } from 'react';
import { PILLARS_DATA } from '../../data/productsData';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';
import { Sparkles, Layers, Scissors, Wind } from 'lucide-react';

export const ButterflyAnatomy = () => {
  const [activePillar, setActivePillar] = useState(0);

  const icons = [
    <Sparkles key="1" size={18} color="var(--color-gold-bright)" />,
    <Layers key="2" size={18} color="var(--color-gold-bright)" />,
    <Scissors key="3" size={18} color="var(--color-gold-bright)" />,
    <Wind key="4" size={18} color="var(--color-gold-bright)" />,
  ];

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-secondary)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">04 // ATELIER CRAFTSMANSHIP</span>
          <h2
            className="display-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              color: 'var(--color-navy-deep)',
              marginTop: '0.75rem',
            }}
          >
            Anatomy of Metamorphosis
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '520px',
              margin: '0.75rem auto 0',
            }}
          >
            Explore the four structural pillars engineered into every Butterfly Effect garment.
          </p>
        </div>

        {/* Dual Column Layout: Interactive Wing Center + Detail Display */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Interactive Emblem Centerpiece */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              background: 'var(--color-canvas-primary)',
              borderRadius: '8px',
              border: '1px solid var(--color-border-subtle)',
              boxShadow: 'var(--shadow-medium)',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <ButterflyLogo size={280} glow={true} />
            </div>

            {/* Pillar Selector Tabs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                width: '100%',
                marginTop: '2.5rem',
              }}
            >
              {PILLARS_DATA.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    borderRadius: '2px',
                    border:
                      activePillar === idx
                        ? '1px solid var(--color-gold-bright)'
                        : '1px solid var(--color-border-subtle)',
                    background:
                      activePillar === idx
                        ? 'var(--color-navy-deep)'
                        : 'rgba(255, 255, 255, 0.7)',
                    color:
                      activePillar === idx
                        ? 'var(--color-canvas-primary)'
                        : 'var(--color-navy-deep)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.15em',
                      display: 'block',
                      color:
                        activePillar === idx
                          ? 'var(--color-gold-muted)'
                          : 'var(--color-text-tertiary)',
                    }}
                  >
                    0{idx + 1} // {pillar.wing}
                  </span>
                  <strong
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginTop: '0.2rem',
                      display: 'block',
                    }}
                  >
                    {pillar.title}
                  </strong>
                </button>
              ))}
            </div>
          </div>

          {/* Active Detail Showcase */}
          <div
            style={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--color-navy-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icons[activePillar]}
              </div>
              <span className="couture-badge couture-badge-gold">
                {PILLARS_DATA[activePillar].stat}
              </span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold-muted)',
                  textTransform: 'uppercase',
                }}
              >
                {PILLARS_DATA[activePillar].wing}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  color: 'var(--color-navy-deep)',
                  lineHeight: 1.15,
                  marginTop: '0.35rem',
                }}
              >
                {PILLARS_DATA[activePillar].title}
              </h3>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
              }}
            >
              {PILLARS_DATA[activePillar].description}
            </p>

            <div
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 255, 255, 0.75)',
                borderLeft: '3px solid var(--color-teal-ethereal)',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--color-navy-deep)',
                  display: 'block',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                }}
              >
                ATELIER GUARANTEE
              </span>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  marginTop: '0.35rem',
                  lineHeight: 1.5,
                }}
              >
                Every piece is numbered and certified with an individual artisan seal, tracing back to the master tailor in Dhaka and Paris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButterflyAnatomy;
