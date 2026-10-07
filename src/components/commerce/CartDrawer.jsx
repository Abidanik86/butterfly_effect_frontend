import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartSubtotalBDT,
    formatPrice,
    currency,
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD_BDT = 20000;
  const shippingProgress = Math.min(
    100,
    (cartSubtotalBDT / FREE_SHIPPING_THRESHOLD_BDT) * 100
  );
  const remainingBDT = Math.max(0, FREE_SHIPPING_THRESHOLD_BDT - cartSubtotalBDT);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(7, 19, 31, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Slide-out Drawer */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          background: 'var(--color-canvas-primary)',
          borderLeft: '1px solid var(--color-border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-15px 0 40px rgba(0, 0, 0, 0.25)',
          zIndex: 2,
          animation: 'slideInRight 0.4s var(--ease-couture) forwards',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                letterSpacing: '0.08em',
                color: 'var(--color-navy-deep)',
                lineHeight: 1,
              }}
            >
              Shopping Bag
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                color: 'var(--color-text-secondary)',
                marginTop: '0.35rem',
                display: 'block',
              }}
            >
              {cartItems.length} {cartItems.length === 1 ? 'PIECE' : 'PIECES'} IN SELECTION
            </span>
          </div>

          <button
            onClick={closeCart}
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              color: 'var(--color-navy-deep)',
              transition: 'transform 0.2s ease',
            }}
            aria-label="Close Bag"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Tier Banner */}
        <div
          style={{
            padding: '1rem 2rem',
            background: 'var(--color-canvas-secondary)',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
            }}
          >
            <span>
              {remainingBDT === 0 ? (
                <span style={{ color: 'var(--color-teal-ethereal)', fontWeight: 600 }}>
                  COMPLIMENTARY WHITE-GLOVE DELIVERY UNLOCKED
                </span>
              ) : (
                <span>
                  ADD <strong style={{ color: 'var(--color-navy-deep)' }}>{formatPrice(remainingBDT)}</strong> FOR COMPLIMENTARY SHIPPING
                </span>
              )}
            </span>
            <span style={{ color: 'var(--color-gold-muted)', fontWeight: 600 }}>
              {Math.round(shippingProgress)}%
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: '3px',
              background: 'rgba(12, 35, 64, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${shippingProgress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--color-teal-ethereal), var(--color-gold-muted))',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {cartItems.length === 0 ? (
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--color-text-secondary)',
                gap: '1rem',
              }}
            >
              <Sparkles size={36} color="var(--color-gold-muted)" strokeWidth={1.5} />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  color: 'var(--color-navy-deep)',
                }}
              >
                Your bag is currently empty
              </p>
              <p style={{ fontSize: '0.85rem', maxWidth: '240px' }}>
                Discover our signature silks and structured outerwear to begin your metamorphosis.
              </p>
              <button
                onClick={closeCart}
                className="btn-couture-outline"
                style={{ marginTop: '0.5rem', fontSize: '0.75rem', padding: '0.75rem 1.75rem' }}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--color-border-subtle)',
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    width: '84px',
                    height: '108px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    background: 'var(--color-canvas-secondary)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.15rem',
                          color: 'var(--color-navy-deep)',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        style={{ color: 'var(--color-text-tertiary)', padding: '2px' }}
                        title="Remove"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginTop: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <span>SIZE: {item.selectedSize}</span>
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.75rem',
                    }}
                  >
                    {/* Qty Stepper */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid var(--color-border-subtle)',
                        borderRadius: '2px',
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                        style={{ padding: '0.35rem 0.6rem', color: 'var(--color-navy-deep)' }}
                      >
                        <Minus size={11} />
                      </button>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          padding: '0 0.4rem',
                          minWidth: '20px',
                          textAlign: 'center',
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                        style={{ padding: '0.35rem 0.6rem', color: 'var(--color-navy-deep)' }}
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    {/* Price */}
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: 'var(--color-navy-deep)',
                      }}
                    >
                      {formatPrice(item.priceBDT * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Checkout Summary */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1.75rem 2rem',
              borderTop: '1px solid var(--color-border-subtle)',
              background: 'var(--color-canvas-primary)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Estimated Total ({currency})
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 600,
                  color: 'var(--color-navy-deep)',
                }}
              >
                {formatPrice(cartSubtotalBDT)}
              </span>
            </div>

            <button
              onClick={() => alert(`Atelier Order Initiated: Total ${formatPrice(cartSubtotalBDT)}. Thank you for shopping with Butterfly Effect.`)}
              className="btn-couture"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-tertiary)',
              }}
            >
              <ShieldCheck size={14} color="var(--color-gold-muted)" />
              <span>INSURED COUTURE PACKAGING & FREE 14-DAY RETURNS</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
