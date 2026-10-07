import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="section-spacing"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-canvas-dark)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        color: 'var(--color-canvas-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Sparkles size={14} color="var(--color-gold-bright)" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.25em',
              color: 'var(--color-gold-muted)',
              textTransform: 'uppercase',
            }}
          >
            THE BUTTERFLY CIRCLE // PRIVATE ACCESS
          </span>
        </div>

        <h2
          className="display-title"
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            color: 'var(--color-canvas-primary)',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Stay in the Effect
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'var(--color-text-tertiary)',
            marginBottom: '2.5rem',
          }}
        >
          Receive private invitations to confidential capsule drops, salon viewings, and custom tailoring consultations.
        </p>

        {submitted ? (
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(27, 106, 133, 0.15)',
              border: '1px solid var(--color-teal-ethereal)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              color: 'var(--color-gold-bright)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
            }}
          >
            <Check size={18} />
            <span>WELCOME TO THE ATELIER CIRCLE // INVITATION DISPATCHED</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ position: 'relative', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid var(--color-gold-muted)',
                paddingBottom: '0.5rem',
              }}
            >
              <input
                type="email"
                required
                placeholder="ENTER YOUR EMAIL FOR PRIVILEGED ACCESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-canvas-primary)',
                  padding: '0.5rem 0',
                }}
              />
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  color: 'var(--color-gold-bright)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
              >
                <span>JOIN</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
