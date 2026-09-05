import React from 'react';
import { Database, CheckCircle2, Building2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-graphite-950 via-graphite-900 to-graphite-950">
      
      {/* Background Red Accent Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brandRed/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-graphite-800/90 border border-slate-700/80 px-4 py-1.5 rounded-full text-xs text-slate-300 font-mono shadow-md">
            <Building2 className="w-3.5 h-3.5 text-brandRed-light" />
            <span className="text-white font-semibold">RUNITO (runito.in)</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Runit Infotech Master Enterprise Portal</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Logo Mark Highlight */}
          <div className="flex justify-center mb-2">
            <img
              src="/runit-logo-mark.svg"
              alt="Runit Logo Mark"
              className="h-12 w-auto object-contain drop-shadow-lg"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-white">
            Enterprise Software, <span className="text-brandRed-light">Fintech SaaS</span> & <span className="text-white">Data Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Bridging financial audit rigor with modern full-stack software engineering. <span className="text-white font-semibold">RUNITO</span> delivers high-velocity POS platforms, enterprise MIS reporting, and automated data pipelines.
          </p>

          {/* Primary Action Buttons - Datamatics Red */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl font-heading font-bold text-sm text-white bg-brandRed hover:bg-brandRed-dark transition-all duration-200 flex items-center space-x-2.5 shadow-xl shadow-brandRed/30 transform hover:-translate-y-0.5"
            >
              <span>Schedule Enterprise Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#products"
              className="px-8 py-4 rounded-xl font-heading font-bold text-sm text-slate-200 bg-graphite-800/80 hover:bg-graphite-700 border border-slate-700 hover:border-brandRed/40 transition-all duration-200 flex items-center space-x-2.5 shadow-lg"
            >
              <Database className="w-4 h-4 text-brandRed-light" />
              <span>Explore SaaS Solutions</span>
            </a>
          </div>

          {/* Key Value Micro Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brandRed-light" />
              <span>Audit-Ready Financial Data Pipelines</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brandRed-light" />
              <span>Cloud POS & Multi-MRP Ledger Engine</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brandRed-light" />
              <span>Intelligent Workflow Automation</span>
            </div>
          </div>
        </div>

        {/* Executive Metrics Bar (Grid of 4 Key Stats) */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="graphite-card graphite-card-hover p-6 rounded-2xl border border-graphite-800 text-center relative overflow-hidden group">
            <p className="font-heading font-black text-3xl sm:text-4xl text-white group-hover:text-brandRed-light transition-colors">
              10+ Years
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Financial MIS & Engineering Leadership
            </p>
          </div>

          <div className="graphite-card graphite-card-hover p-6 rounded-2xl border border-graphite-800 text-center relative overflow-hidden group">
            <p className="font-heading font-black text-3xl sm:text-4xl text-brandRed-light">
              98.5%
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Audit & Billing QC Reconciliation
            </p>
          </div>

          <div className="graphite-card graphite-card-hover p-6 rounded-2xl border border-graphite-800 text-center relative overflow-hidden group">
            <p className="font-heading font-black text-3xl sm:text-4xl text-white group-hover:text-brandRed-light transition-colors">
              20+ Units
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Enterprise & Business Solutions
            </p>
          </div>

          <div className="graphite-card graphite-card-hover p-6 rounded-2xl border border-graphite-800 text-center relative overflow-hidden group">
            <p className="font-heading font-black text-3xl sm:text-4xl text-white">
              85%
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Reduction in Manual Reporting Hours
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
