import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';

gsap.registerPlugin(ScrollTrigger);

export const HeroTransition = () => {
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);
  const frameRef = useRef(null);
  const butterflyRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Frame shrinks into editorial proportion
      tl.to(frameRef.current, {
        scale: 0.88,
        borderRadius: '16px',
        duration: 1,
        ease: 'power2.inOut',
      })
      // Butterfly scales and glows
      .fromTo(
        butterflyRef.current,
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1.15, opacity: 1, rotate: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      // Words scrub into focus
      .to(word1Ref.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(word2Ref.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .to(word3Ref.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <section
        ref={pinSectionRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-canvas-primary)',
          overflow: 'hidden',
        }}
      >
        {/* Pinned Editorial Frame */}
        <div
          ref={frameRef}
          style={{
            position: 'absolute',
            width: '92vw',
            maxWidth: '1440px',
            height: '82vh',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(12, 35, 64, 0.12)',
            border: '1px solid var(--color-border-subtle)',
            background: 'var(--color-canvas-secondary)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=85"
            alt="Metamorphosis Editorial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />

          {/* Dark Overlay for Typography Contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7, 19, 31, 0.4) 0%, rgba(12, 35, 64, 0.75) 100%)',
            }}
          />
        </div>

        {/* Center Butterfly & Kinetic Typography */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <div ref={butterflyRef} style={{ marginBottom: '2rem' }}>
            <ButterflyLogo size={150} glow={true} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span
              ref={word1Ref}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.3em',
                color: 'var(--color-gold-muted)',
                opacity: 0,
                transform: 'translateY(20px)',
                textTransform: 'uppercase',
              }}
            >
              METAMORPHOSIS IN SILK
            </span>

            <h2
              ref={word2Ref}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                color: 'var(--color-canvas-primary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                opacity: 0,
                transform: 'translateY(25px)',
                textTransform: 'uppercase',
              }}
            >
              Every transformation
            </h2>

            <h2
              ref={word3Ref}
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                color: 'var(--color-gold-bright)',
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
                opacity: 0,
                transform: 'translateY(25px)',
              }}
            >
              begins in silence.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroTransition;
