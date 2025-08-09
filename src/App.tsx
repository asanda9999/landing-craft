import React from 'react';
import { NavBarDemo } from './components/ui/demo';
import { BackgroundPaths } from './components/ui/background-paths';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBarDemo />
      <main>
        <BackgroundPaths title="Hydra Tech crafted with creativity" />
        <Features />
        <Pricing />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;