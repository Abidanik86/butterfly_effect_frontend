/**
 * ============================================================================
 * BUTTERFLY EFFECT — HAUTE COUTURE DIGITAL ATELIER
 * Developed by Mr Abid Hasan Anik
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import SmoothScroll from './components/layout/SmoothScroll';
import Preloader from './components/cinematic/Preloader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/commerce/CartDrawer';
import QuickViewModal from './components/commerce/QuickViewModal';
import HomePage from './pages/HomePage';
import './styles/index.css';

export function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  useEffect(() => {
    // Atelier Developer Signature
    console.log(
      '%c BUTTERFLY EFFECT %c Developed by Mr Abid Hasan Anik ',
      'background: #0C2340; color: #C5A880; font-family: serif; font-size: 13px; padding: 4px 8px; border-radius: 2px;',
      'background: #1B6A85; color: #F9F8F5; font-size: 11px; padding: 4px 8px; border-radius: 2px;'
    );
  }, []);

  return (
    <CartProvider>
      <SmoothScroll>
        <div className="atelier-wrapper">
          {/* Preloader */}
          {!preloaderFinished && (
            <Preloader onComplete={() => setPreloaderFinished(true)} />
          )}

          {/* Navigation Bar */}
          <Navbar />

          {/* Master 18-Section Homepage Flow */}
          <HomePage />

          {/* Haute Couture Footer */}
          <Footer />

          {/* Global Interactive Overlays */}
          <CartDrawer />
          <QuickViewModal />
        </div>
      </SmoothScroll>
    </CartProvider>
  );
}

export default App;
