import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-midnight-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-blue p-0.5 shadow-lg shadow-cyber-cyan/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-midnight-900 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyber-cyan" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-heading font-black text-2xl tracking-tight text-white group-hover:text-cyber-cyan transition-colors">
                RUNITO
              </span>
              <span className="text-[10px] font-mono uppercase bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 px-1.5 py-0.5 rounded font-semibold">
                runito.in
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-semibold">
              RUNIT INFOTECH
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold text-slate-300">
          <a href="#saas-suite" className="hover:text-cyber-cyan transition-colors py-1">SaaS Products</a>
          <a href="#enterprise-mis" className="hover:text-cyber-cyan transition-colors py-1">Enterprise MIS & Analytics</a>
          <a href="#aios-automation" className="hover:text-cyber-cyan transition-colors py-1">AIOS & Automation</a>
          <a href="#calculator" className="hover:text-cyber-cyan transition-colors py-1">ROI Calculator</a>
          <a href="#founder" className="hover:text-cyber-cyan transition-colors py-1">Founder & Leadership</a>
        </nav>

        {/* Right Action Badges & CTAs */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* MSME Udyam Pill */}
          <div className="hidden md:flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-full text-[11px] text-slate-300 font-mono shadow-inner">
            <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse"></span>
            <ShieldCheck className="w-3.5 h-3.5 text-neon-emerald" />
            <span className="text-slate-400">MSME:</span>
            <span className="font-bold text-white">UDYAM-PY-03-0026319</span>
          </div>

          {/* Schedule Demo CTA */}
          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-midnight-950 bg-cyber-gradient hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Schedule Demo</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-midnight-950/95 border-b border-slate-800 p-6 space-y-4 text-sm font-semibold">
          <a
            href="#saas-suite"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan"
          >
            SaaS Products (PowerBooks, FireBooks, 1lybio)
          </a>
          <a
            href="#enterprise-mis"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan"
          >
            Enterprise MIS & Analytics
          </a>
          <a
            href="#aios-automation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan"
          >
            AIOS & n8n Workflows
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan"
          >
            ROI Savings Calculator
          </a>
          <a
            href="#founder"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyber-cyan"
          >
            Founder Profile (Varun Akshay)
          </a>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-neon-emerald"></span>
              <span>UDYAM-PY-03-0026319 (Government Registered)</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center bg-cyber-gradient text-midnight-950 font-bold rounded-xl text-xs"
            >
              Schedule Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
