import React, { useState, useEffect } from 'react';
import BrandIdentity from './BrandIdentity';
import { ArrowUp, Globe, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Footer = () => {
  const { currency, toggleCurrency } = useCart();
  const [times, setTimes] = useState({
    dhaka: '',
    paris: '',
    milan: '',
    newyork: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        dhaka: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit' }),
        paris: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }),
        milan: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit' }),
        newyork: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-dark)',
        color: 'var(--color-canvas-primary)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        overflow: 'hidden',
      }}
    >
      <div className="container-atelier">
        {/* World Clocks Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '4rem',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-gold-muted)', letterSpacing: '0.15em' }}>
              DHAKA ATELIER
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#fff', marginTop: '0.2rem' }}>
              {times.dhaka || '06:00 AM'}
            </div>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-gold-muted)', letterSpacing: '0.15em' }}>
              PARIS SALON
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#fff', marginTop: '0.2rem' }}>
              {times.paris || '01:00 AM'}
            </div>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-gold-muted)', letterSpacing: '0.15em' }}>
              MILAN STUDIO
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#fff', marginTop: '0.2rem' }}>
              {times.milan || '01:00 AM'}
            </div>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-gold-muted)', letterSpacing: '0.15em' }}>
              NEW YORK SHOWROOM
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: '#fff', marginTop: '0.2rem' }}>
              {times.newyork || '07:00 PM'}
            </div>
          </div>
        </div>

        {/* Master Brand Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <BrandIdentity variant="full" logoSize={68} theme="dark" />
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-tertiary)',
                marginTop: '1.5rem',
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              Independent Haute Couture house dedicated to kinetic transformation and bespoke craft.
            </p>
          </div>

          {/* Links Col 1: Collections */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-gold-bright)',
                display: 'block',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}
            >
              Collections
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Series 01 // Metamorphosis', "Women's Sanctuary", "Men's Architecture", 'High Eveningwear', 'Bespoke Objects'].map((item) => (
                <li key={item}>
                  <a
                    href="#collections"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-canvas-primary)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2: Client Care */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-gold-bright)',
                display: 'block',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}
            >
              Client Services
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Private Fitting Appointment', 'Complimentary White-Glove Delivery', 'Certificate of Authenticity', 'Garment Care & Restoration', 'Bespoke Order Consultation'].map((item) => (
                <li key={item}>
                  <a
                    href="#manifesto"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-canvas-primary)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 3: Sustainability */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-gold-bright)',
                display: 'block',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
              }}
            >
              Craft & Origin
            </span>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'var(--color-text-tertiary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              All garments are made with certified non-violent sericulture silks and ethical wools. Designed between Dhaka and Paris.
            </p>

            <button
              onClick={toggleCurrency}
              className="btn-couture-outline"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                padding: '0.6rem 1rem',
                fontSize: '0.75rem',
              }}
            >
              <Globe size={13} color="var(--color-gold-bright)" />
              <span>MARKET: {currency} (SWITCH)</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              color: 'var(--color-text-tertiary)',
            }}
          >
            &copy; 2027 BUTTERFLY EFFECT HAUTE COUTURE. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              color: 'var(--color-gold-bright)',
              cursor: 'pointer',
            }}
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
