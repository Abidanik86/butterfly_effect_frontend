import React from 'react';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';

/**
 * BrandIdentity — Official Brand Lockup
 * Can render vector SVG or photographic raster, with responsive sizes and high-fashion tracking.
 */
export const BrandIdentity = ({
  variant = 'compact', // 'full' | 'compact' | 'symbol-only' | 'raster'
  logoSize = 44,
  theme = 'light', // 'light' | 'dark'
  className = '',
  onClick,
}) => {
  const isDark = theme === 'dark';

  if (variant === 'raster') {
    return (
      <div 
        className={`brand-lockup brand-raster ${className}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default', display: 'inline-flex', alignItems: 'center' }}
      >
        <img 
          src="/butterflyeffectlogo.jpeg" 
          alt="Butterfly Effect" 
          style={{ height: logoSize, width: 'auto', objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (variant === 'symbol-only') {
    return (
      <div 
        className={`brand-symbol ${className}`}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default', display: 'inline-flex', alignItems: 'center' }}
      >
        <ButterflyLogo size={logoSize} glow={isDark} />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div 
        className={`brand-lockup brand-full ${className}`}
        onClick={onClick}
        style={{
          cursor: onClick ? 'pointer' : 'default',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0.5rem',
        }}
      >
        <ButterflyLogo size={logoSize} glow={isDark} />
        
        <div style={{ marginTop: '0.25rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: isDark ? 'var(--color-canvas-primary)' : 'var(--color-navy-deep)',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            Butterfly Effect
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '0.35rem',
            }}
          >
            <span
              style={{
                height: '1px',
                width: '32px',
                background: isDark ? 'var(--color-gold-muted)' : 'var(--color-navy-deep)',
                opacity: 0.6,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: isDark ? 'var(--color-gold-muted)' : 'var(--color-navy-deep)',
              }}
            >
              Fashion & Online Shopping
            </span>
            <span
              style={{
                height: '1px',
                width: '32px',
                background: isDark ? 'var(--color-gold-muted)' : 'var(--color-navy-deep)',
                opacity: 0.6,
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Compact variant (Default for Navbar)
  return (
    <div 
      className={`brand-lockup brand-compact ${className}`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        userSelect: 'none',
      }}
    >
      <ButterflyLogo size={logoSize} glow={isDark} />
      
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          className="brand-compact-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.2rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: isDark ? 'var(--color-canvas-primary)' : 'var(--color-navy-deep)',
            whiteSpace: 'nowrap',
          }}
        >
          Butterfly Effect
        </span>
        <span
          className="brand-compact-subtitle"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.55rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isDark ? 'var(--color-gold-muted)' : 'var(--color-text-secondary)',
            marginTop: '3px',
            whiteSpace: 'nowrap',
          }}
        >
          Fashion & Online Shopping
        </span>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .brand-compact-title {
            font-size: 1.05rem !important;
            letter-spacing: 0.1em !important;
          }
          .brand-compact-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandIdentity;
