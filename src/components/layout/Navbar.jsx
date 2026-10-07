import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Volume2, VolumeX, Menu, X, Globe } from 'lucide-react';
import BrandIdentity from './BrandIdentity';
import { useCart } from '../../context/CartContext';

export const Navbar = ({ soundPlaying, onToggleSound }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, openCart, currency, toggleCurrency, wishlist } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: "Women's", href: '#womens' },
    { label: "Men's", href: '#mens' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Philosophy', href: '#philosophy' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--nav-height)',
          zIndex: 900,
          transition: 'all 0.5s var(--ease-couture)',
          backgroundColor: isScrolled
            ? 'rgba(249, 248, 245, 0.88)'
            : 'rgba(249, 248, 245, 0.2)',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(197, 168, 128, 0.25)'
            : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px rgba(12, 35, 64, 0.04)' : 'none',
        }}
      >
        <div
          className="container-atelier"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Identity / Logo */}
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <BrandIdentity variant="compact" logoSize={38} />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav-links"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-navy-deep)',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                }}
                className="nav-link-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            {/* Currency Switcher */}
            <button
              onClick={toggleCurrency}
              title={`Switch Currency (Current: ${currency})`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '2px',
                border: '1px solid var(--color-border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'var(--color-navy-deep)',
                transition: 'all 0.3s ease',
              }}
              className="currency-toggle-btn"
            >
              <Globe size={13} strokeWidth={1.5} color="var(--color-gold-muted)" />
              <span>{currency}</span>
            </button>

            {/* Sound Ambience Toggle */}
            <button
              onClick={onToggleSound}
              title={soundPlaying ? 'Mute Atmosphere' : 'Play Runway Atmosphere'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.65rem',
                borderRadius: '2px',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-navy-deep)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
              }}
              className="sound-toggle-btn"
            >
              {soundPlaying ? (
                <Volume2 size={15} color="var(--color-teal-accent)" />
              ) : (
                <VolumeX size={15} color="var(--color-text-tertiary)" />
              )}
              <span className="sound-label">{soundPlaying ? 'ON' : 'OFF'}</span>
            </button>

            {/* Wishlist Button */}
            <a
              href="#trending"
              title="Saved Items"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.4rem',
                color: 'var(--color-navy-deep)',
              }}
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-4px',
                    background: 'var(--color-teal-ethereal)',
                    color: '#fff',
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-mono)',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </a>

            {/* Cart / Shopping Bag Button */}
            <button
              onClick={openCart}
              title="Open Shopping Bag"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.55rem 1.1rem',
                background: 'var(--color-navy-deep)',
                color: 'var(--color-canvas-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(12, 35, 64, 0.15)',
              }}
              className="cart-trigger-btn"
            >
              <ShoppingBag size={15} strokeWidth={1.8} color="var(--color-gold-muted)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                }}
              >
                BAG ({cartCount})
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="mobile-menu-toggle"
              style={{
                display: 'none',
                padding: '0.4rem',
                color: 'var(--color-navy-deep)',
              }}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 899,
            background: 'var(--color-canvas-primary)',
            padding: '7rem 2rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--color-navy-deep)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <BrandIdentity variant="symbol-only" logoSize={48} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.1em',
              }}
            >
              HAUTE COUTURE // 2027
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
          }
          .sound-label {
            display: none;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold-muted);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .nav-link-hover:hover {
          color: var(--color-teal-ethereal) !important;
        }
        .cart-trigger-btn:hover {
          background: var(--color-teal-ethereal) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};

export default Navbar;
