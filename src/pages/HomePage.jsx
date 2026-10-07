import React from 'react';
import Hero from '../components/cinematic/Hero';
import HeroTransition from '../components/cinematic/HeroTransition';
import Manifesto from '../components/cinematic/Manifesto';
import ButterflyAnatomy from '../components/cinematic/ButterflyAnatomy';
import CollectionIntro from '../components/editorial/CollectionIntro';
import DualRunway from '../components/editorial/DualRunway';
import WomensCollection from '../components/editorial/WomensCollection';
import MensCollection from '../components/editorial/MensCollection';
import HorizontalRunway from '../components/commerce/HorizontalRunway';
import ShoppableEditorial from '../components/commerce/ShoppableEditorial';
import TrendingCatalog from '../components/commerce/TrendingCatalog';
import FabricShowcase from '../components/editorial/FabricShowcase';
import Lookbook from '../components/editorial/Lookbook';
import Philosophy from '../components/cinematic/Philosophy';
import Newsletter from '../components/editorial/Newsletter';
import FinalCTA from '../components/cinematic/FinalCTA';

export const HomePage = () => {
  return (
    <main className="atelier-main-journey">
      {/* ACT I: THE AWAKENING */}
      <Hero />
      <HeroTransition />
      <Manifesto />

      {/* ACT II: THE TRANSFORMATION */}
      <ButterflyAnatomy />
      <CollectionIntro />
      <DualRunway />

      {/* ACT III: THE COUTURE PILLARS */}
      <WomensCollection />
      <MensCollection />
      <HorizontalRunway />

      {/* ACT IV: THE LIVING ATELIER & COMMERCE */}
      <ShoppableEditorial />
      <TrendingCatalog />
      <FabricShowcase />
      <Lookbook />

      {/* ACT V: THE LEGACY & CLOSING RITUAL */}
      <Philosophy />
      <Newsletter />
      <FinalCTA />
    </main>
  );
};

export default HomePage;
