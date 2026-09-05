import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Pillars } from './components/Pillars';
import { Showcase } from './components/Showcase';
import { Calculator } from './components/Calculator';
import { Founder } from './components/Founder';
import { Ecosystem } from './components/Ecosystem';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-cyber-cyan selection:text-midnight-950">
      {/* Header Bar */}
      <Header onOpenContact={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenContact={() => setContactModalOpen(true)} />

      {/* Enterprise Heritage & BFSI Lineage */}
      <Heritage />

      {/* Three Pillars Architecture (SaaS, MIS, AIOS) */}
      <Pillars />

      {/* Product Showcase */}
      <Showcase />

      {/* Interactive ROI Calculator */}
      <Calculator onOpenContact={() => setContactModalOpen(true)} />

      {/* Founder & Leadership Profile (Varun Akshay) */}
      <Founder />

      {/* Ecosystem & Brand Partnerships */}
      <Ecosystem />

      {/* FAQ Accordion */}
      <Faq />

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Contact & Schedule Demo Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};

export default App;
