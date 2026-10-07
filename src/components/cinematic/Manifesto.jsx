import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Manifesto = () => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line by line scrub reveal
      wordsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.12, filter: 'blur(8px)', y: 20 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 45%',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const manifestoLines = [
    'CHANGE',
    'BEGINS',
    'WITH',
    'SOMETHING',
    'SMALL.',
  ];

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial" style={{ textAlign: 'center' }}>
        {/* Section Label */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="section-label">03 // BRAND MANIFESTO</span>
        </div>

        {/* Huge Typographic Scrub */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2em',
            marginBottom: '4.5rem',
          }}
        >
          {manifestoLines.map((line, idx) => (
            <h2
              key={line}
              ref={(el) => (wordsRef.current[idx] = el)}
              className="display-title"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6.8rem)',
                fontWeight: 300,
                letterSpacing: '0.06em',
                lineHeight: 1.0,
                color: idx === 4 ? 'var(--color-teal-ethereal)' : 'var(--color-navy-deep)',
                textTransform: 'uppercase',
              }}
            >
              {line}
            </h2>
          ))}
        </div>

        {/* Poetic Narrative Paragraph */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            position: 'relative',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(197, 168, 128, 0.3)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: 'var(--color-navy-deep)',
              marginBottom: '1.5rem',
            }}
          >
            "A single shift in thread. A revolution in silhouette. The Butterfly Effect is an invitation to wear your personal transformation."
          </p>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-muted)',
            }}
          >
            ATELIER DHAKA &bull; PARIS &bull; MILAN
          </span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
