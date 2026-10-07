import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';

export const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle ambient zoom on hero image
      gsap.to(mediaRef.current, {
        scale: 1.06,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Staggered reveal of hero typography
      gsap.from('.hero-reveal-line', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 'var(--nav-height)',
        backgroundColor: 'var(--color-canvas-primary)',
      }}
      className="hero-section"
    >
      {/* Background Editorial Visual Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          ref={mediaRef}
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=85"
          alt="Butterfly Effect Editorial"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            filter: 'brightness(0.92) contrast(1.04)',
            transformOrigin: 'center center',
          }}
        />

        {/* Ethereal Vignette and Luxury Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(249, 248, 245, 0.45) 0%, rgba(12, 35, 64, 0.65) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(249, 248, 245, 0.3) 0%, rgba(7, 19, 31, 0.4) 60%, rgba(249, 248, 245, 0.95) 100%)',
          }}
        />
      </div>

      {/* Floating Ambient Butterfly Logo Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <ButterflyLogo size={620} glow={false} />
      </div>

      {/* Hero Central Content */}
      <div
        className="container-atelier"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1rem',
        }}
      >
        {/* Top Kicker Label */}
        <div className="hero-reveal-line" style={{ marginBottom: '1.25rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-navy-deep)',
              background: 'rgba(255, 255, 255, 0.75)',
              padding: '0.45rem 1.25rem',
              borderRadius: '2px',
              border: '1px solid rgba(197, 168, 128, 0.4)',
              backdropFilter: 'blur(8px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Sparkles size={12} color="var(--color-gold-muted)" />
            AUTUMN / WINTER 2026-2027 // VOL. 01
          </span>
        </div>

        {/* Master Typographic Headline */}
        <div ref={headlineRef} style={{ marginBottom: '1.5rem' }}>
          <h1
            className="hero-reveal-line display-mega"
            style={{
              color: 'var(--color-navy-deep)',
              textShadow: '0 4px 25px rgba(255, 255, 255, 0.8)',
            }}
          >
            Discover
          </h1>
          <h1
            className="hero-reveal-line display-mega"
            style={{
              color: 'var(--color-navy-deep)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-serif)',
              marginTop: '-0.2em',
              textShadow: '0 4px 25px rgba(255, 255, 255, 0.8)',
            }}
          >
            Your
          </h1>
          <h1
            className="hero-reveal-line display-mega text-teal-gradient"
            style={{
              marginTop: '-0.2em',
              letterSpacing: '0.04em',
            }}
          >
            Effect
          </h1>
        </div>

        {/* Brand Subtitle with Divider */}
        <p
          className="hero-reveal-line"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
            fontWeight: 400,
            maxWidth: '560px',
            color: 'var(--color-navy-deep)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            textShadow: '0 1px 8px rgba(255, 255, 255, 0.9)',
          }}
        >
          Fashion that moves with you. A single thread creates an infinite transformation.
        </p>

        {/* Action Buttons */}
        <div
          className="hero-reveal-line"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a href="#collections" className="btn-couture">
            <span>Explore Collection</span>
          </a>
          <a href="#story" className="btn-couture-outline" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
            <span>Brand Story</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator with Animated Golden Line */}
      <a
        href="#manifesto"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
          color: 'var(--color-navy-deep)',
          opacity: 0.85,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          SCROLL TO TRANSFORM
        </span>
        <div
          style={{
            width: '1px',
            height: '42px',
            background: 'linear-gradient(180deg, var(--color-navy-deep), transparent)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'var(--color-gold-bright)',
              animation: 'scrollPulse 2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </a>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
