import React from 'react';
import { ShieldCheck, Building, Database, Award, CheckCircle2, FileText, BarChart3, Scale } from 'lucide-react';

export const Heritage: React.FC = () => {
  return (
    <section id="enterprise-mis" className="py-20 md:py-28 relative bg-midnight-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-sapphire-900/60 border border-cyber-blue/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyber-cyan">
            <Building className="w-3.5 h-3.5" />
            <span>ENTERPRISE LINEAGE & REGULATORY TRUST</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on Enterprise Rigor & <br />
            <span className="text-gradient-cyan">BFSI Billing QC Standards</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Rooted in 10+ years of CFO back-office operational excellence at Datamatics Global Services, RUNITO delivers institution-grade billing accuracy, SLA tracking, and regulatory audit compliance.
          </p>
        </div>

        {/* 3 Core Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: BFSI Collections & Recovery Billing QC */}
          <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center mb-6 text-cyber-cyan group-hover:scale-110 transition-transform">
                <Scale className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyber-cyan transition-colors mb-3">
                BFSI Collections & Recovery Billing QC
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Precision-engineered audit logic for recovery agency payouts, IDFC collection cost reconciliation, and multi-vendor call center billing validation. Eliminates overbilling leakage with 98%+ automated accuracy.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>Recovery Agency Payout Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>IDFC & Bank SLA Audit Reconciliation</span>
              </div>
            </div>
          </div>

          {/* Card 2: PowerBI & SQL Analytics */}
          <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sapphire-800/20 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sapphire-900 border border-cyber-blue/30 flex items-center justify-center mb-6 text-cyber-blue group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyber-blue transition-colors mb-3">
                PowerBI & SQL Financial Dashboards
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Transform complex enterprise databases into automated Executive MBR/QBR dashboards. Real-time SQL query optimization and PowerBI visualizations designed for CFO-level decision making.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>Automated MBR & QBR Executive Decks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>Zero-Friction SQL Data Pipeline</span>
              </div>
            </div>
          </div>

          {/* Card 3: MSME Compliance & Registration */}
          <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-emerald/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-neon-emerald/10 border border-neon-emerald/30 flex items-center justify-center mb-6 text-neon-emerald group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-neon-emerald transition-colors mb-3">
                Government MSME Compliance
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fully registered and compliant Micro Enterprise under Government of India Ministry of MSME. Headquartered in Puducherry, serving global enterprise clients with legal security.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Udyam Registration:</span>
                <span className="font-bold text-white">UDYAM-PY-03-0026319</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">NIC Codes:</span>
                <span className="font-bold text-cyber-cyan">62011, 62020, 62099</span>
              </div>
            </div>
          </div>

        </div>

        {/* Datamatics Award Spotlight Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Datamatics Global Services Star Performer Heritage
              </h4>
              <p className="text-xs text-slate-400">
                Awarded for outstanding contribution to CFO back-office operational quality & automated billing audit controls.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-xl">
            ★ Star Performer Certified
          </div>
        </div>

      </div>
    </section>
  );
};
