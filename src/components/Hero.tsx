import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Layers, CheckCircle2, Bot, Database, Zap } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] radial-glow-cyan pointer-events-none opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] radial-glow-sapphire pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900/90 border border-cyber-cyan/30 px-4 py-1.5 rounded-full text-xs text-slate-300 font-mono backdrop-blur-md shadow-lg shadow-cyber-cyan/10">
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span className="text-white font-semibold">RUNITO (runito.in)</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Master Digital Portal of RUNIT INFOTECH</span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Empowering Enterprises & MSMEs with <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Next-Gen Fintech, MIS Analytics</span> & <span className="text-gradient-emerald">AI Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            From <span className="text-white font-semibold">BFSI Collections & Billing QC Automation</span> at Datamatics scale to AI-driven n8n workflows and SaaS solutions. <span className="text-cyber-cyan font-semibold">RUNITO</span> unifies enterprise precision with AI-first agility.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#saas-suite"
              className="px-8 py-4 rounded-xl font-heading font-bold text-sm text-midnight-950 bg-cyber-gradient hover:shadow-xl hover:shadow-cyber-cyan/25 transition-all duration-300 flex items-center space-x-2.5 transform hover:-translate-y-0.5"
            >
              <span>Explore SaaS Suite</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#enterprise-mis"
              className="px-8 py-4 rounded-xl font-heading font-bold text-sm text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyber-cyan/40 transition-all duration-300 flex items-center space-x-2.5 backdrop-blur-md shadow-lg"
            >
              <Database className="w-4 h-4 text-cyber-cyan" />
              <span>View Enterprise MIS Case Studies</span>
            </a>
          </div>

          {/* Micro badges below buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>MSME Registered: UDYAM-PY-03-0026319</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>Datamatics Enterprise Rigor</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-neon-emerald" />
              <span>n8n AIOS Workflows</span>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar (Grid of 4 Key Stats) */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-cyan/5 rounded-bl-full pointer-events-none"></div>
            <p className="font-heading font-black text-3xl sm:text-4xl text-white group-hover:text-cyber-cyan transition-colors">
              10+ Years
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Industry & MIS Analytics Experience
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-neon-emerald/5 rounded-bl-full pointer-events-none"></div>
            <p className="font-heading font-black text-3xl sm:text-4xl text-neon-emerald">
              98%+
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Billing QC & Recovery Accuracy
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-blue/5 rounded-bl-full pointer-events-none"></div>
            <p className="font-heading font-black text-3xl sm:text-4xl text-white group-hover:text-cyber-blue transition-colors">
              20+ Units
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              Runit & Partners Brand Ecosystem
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-cyan/5 rounded-bl-full pointer-events-none"></div>
            <p className="font-heading font-black text-3xl sm:text-4xl text-gradient-cyan">
              100%
            </p>
            <p className="text-xs font-semibold text-slate-400 mt-2 font-mono uppercase tracking-wider">
              n8n AIOS Workflow Orchestration
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
