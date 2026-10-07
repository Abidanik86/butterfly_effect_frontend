import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import ButterflyLogo from '../../assets/vectors/ButterflyLogo';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Non-linear realistic luxury counter
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        triggerExit();
      } else {
        setProgress(current);
      }
    }, 45);

    const triggerExit = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.to(contentRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.inOut',
      })
      .to(
        [curtainLeftRef.current, curtainRightRef.current],
        {
          xPercent: (i) => (i === 0 ? -100 : 100),
          duration: 0.9,
          ease: 'expo.inOut',
        },
        '-=0.2'
      );
    };

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
    >
      {/* Split Curtains for dramatic curtain reveal */}
      <div
        ref={curtainLeftRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundColor: 'var(--color-canvas-primary)',
          borderRight: '1px solid rgba(197, 168, 128, 0.25)',
        }}
      />
      <div
        ref={curtainRightRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundColor: 'var(--color-canvas-primary)',
          borderLeft: '1px solid rgba(197, 168, 128, 0.25)',
        }}
      />

      {/* Centerpiece Content */}
      <div
        ref={contentRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'relative', marginBottom: '1.75rem' }}>
          <ButterflyLogo size={110} glow={true} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              letterSpacing: '0.22em',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: 'var(--color-navy-deep)',
              lineHeight: 1.1,
            }}
          >
            Butterfly Effect
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '0.5rem',
            }}
          >
            <span
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--color-gold-muted)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-gold-muted)',
                fontWeight: 600,
              }}
            >
              Fashion & Online Shopping
            </span>
            <span
              style={{
                width: '40px',
                height: '1px',
                background: 'var(--color-gold-muted)',
              }}
            />
          </div>
        </div>

        {/* Monospace Progress Display */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            letterSpacing: '0.2em',
            color: 'var(--color-navy-medium)',
            marginTop: '1.5rem',
          }}
        >
          <span>METAMORPHOSIS // </span>
          <span style={{ color: 'var(--color-gold-bright)', fontWeight: 700 }}>
            {String(progress).padStart(2, '0')}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
