import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Layers, Building2, ChevronRight } from 'lucide-react';

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
      isScrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-800 py-3.5 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Datamatics Corporate Style */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-corporate-blue flex items-center justify-center shadow-md shadow-corporate-blue/30 group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-heading font-black text-2xl tracking-tight text-white group-hover:text-corporate-sky transition-colors">
                RUNITO
              </span>
              <span className="text-[10px] font-mono uppercase bg-slate-800 text-corporate-sky border border-slate-700 px-1.5 py-0.5 rounded font-semibold">
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
          <a href="#products" className="hover:text-white transition-colors py-1">SaaS Solutions</a>
          <a href="#enterprise-mis" className="hover:text-white transition-colors py-1">Enterprise MIS & Analytics</a>
          <a href="#automation" className="hover:text-white transition-colors py-1">Process Automation</a>
          <a href="#calculator" className="hover:text-white transition-colors py-1">ROI Calculator</a>
          <a href="#leadership" className="hover:text-white transition-colors py-1">Leadership</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-corporate-blue hover:bg-corporate-accent transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-corporate-blue/20"
          >
            <span>Schedule Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-navy-800 border border-navy-700 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 p-6 space-y-4 text-sm font-semibold">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            SaaS Solutions (PowerBooks, FireBooks, 1lybio)
          </a>
          <a
            href="#enterprise-mis"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Enterprise MIS & Data Analytics
          </a>
          <a
            href="#automation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Process Automation
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            ROI Savings Calculator
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            Leadership (Varun Akshay)
          </a>

          <div className="pt-4 border-t border-navy-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center bg-corporate-blue text-white font-bold rounded-xl text-xs"
            >
              Schedule Enterprise Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
