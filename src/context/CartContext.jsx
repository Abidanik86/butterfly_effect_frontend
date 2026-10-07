import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const EXCHANGE_RATE_BDT_TO_USD = 0.0084; // ~120 BDT per USD

export const CartProvider = ({ children }) => {
  // Cart items
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('be_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Currency
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('be_currency') || 'BDT';
    } catch {
      return 'BDT';
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('be_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('be_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('be_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('be_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Cart operations
  const addToCart = (product, size = 'M') => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          priceBDT: product.priceBDT,
          image: product.image,
          selectedSize: size,
          category: product.category,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id && item.selectedSize === size) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotalBDT = cartItems.reduce(
    (acc, item) => acc + item.priceBDT * item.quantity,
    0
  );

  // Currency Formatter
  const formatPrice = (priceInBDT) => {
    if (currency === 'USD') {
      const usd = Math.round(priceInBDT * EXCHANGE_RATE_BDT_TO_USD);
      return `$${usd.toLocaleString()} USD`;
    }
    return `৳ ${priceInBDT.toLocaleString()}`;
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'BDT' ? 'USD' : 'BDT'));
  };

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toggleCart: () => setIsCartOpen((prev) => !prev),
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotalBDT,
        currency,
        toggleCurrency,
        formatPrice,
        quickViewProduct,
        openQuickView: (prod) => setQuickViewProduct(prod),
        closeQuickView: () => setQuickViewProduct(null),
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
