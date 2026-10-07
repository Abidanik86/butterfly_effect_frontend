/**
 * ============================================================================
 * BUTTERFLY EFFECT — HAUTE COUTURE DIGITAL ATELIER
 * Developed by Mr Abid Hasan Anik
 * ============================================================================
 */

import React, { useState, useRef, useEffect } from 'react';
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
  const [soundPlaying, setSoundPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  useEffect(() => {
    // Atelier Developer Signature
    console.log(
      '%c BUTTERFLY EFFECT %c Developed by Mr Abid Hasan Anik ',
      'background: #0C2340; color: #C5A880; font-family: serif; font-size: 13px; padding: 4px 8px; border-radius: 2px;',
      'background: #1B6A85; color: #F9F8F5; font-size: 11px; padding: 4px 8px; border-radius: 2px;'
    );
  }, []);

  // Ethereal Procedural Runway Ambiance using Web Audio API
  const toggleSound = () => {
    if (!soundPlaying) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Master Gain Node
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2); // Soft luxury volume
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Base warm drone frequencies (A1: 55Hz, E2: 82.4Hz, A2: 110Hz, C#3: 138.6Hz)
        const frequencies = [55, 82.41, 110, 138.59];

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle detune for runway shimmer
          osc.detune.setValueAtTime((idx - 1.5) * 6, ctx.currentTime);

          oscGain.gain.setValueAtTime(0.3 / (idx + 1), ctx.currentTime);

          // Lowpass filter for warm velvety texture
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, ctx.currentTime);

          osc.connect(filter);
          filter.connect(oscGain);
          oscGain.connect(masterGain);

          osc.start();
        });

        setSoundPlaying(true);
      } catch (e) {
        console.error('Audio initialization error:', e);
      }
    } else {
      if (audioCtxRef.current && gainNodeRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.8
        );
        setTimeout(() => {
          audioCtxRef.current?.close();
          audioCtxRef.current = null;
          setSoundPlaying(false);
        }, 800);
      } else {
        setSoundPlaying(false);
      }
    }
  };

  return (
    <CartProvider>
      <SmoothScroll>
        <div className="atelier-wrapper">
          {/* Preloader */}
          {!preloaderFinished && (
            <Preloader onComplete={() => setPreloaderFinished(true)} />
          )}

          {/* Navigation Bar */}
          <Navbar soundPlaying={soundPlaying} onToggleSound={toggleSound} />

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
