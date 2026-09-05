import React from 'react';
import { ShieldCheck, Building, Database, BarChart3, Scale, CheckCircle2, Code, Layers } from 'lucide-react';

export const Heritage: React.FC = () => {
  return (
    <section id="enterprise-mis" className="py-20 md:py-28 relative bg-navy-950/80 border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-navy-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-corporate-sky">
            <Building className="w-3.5 h-3.5" />
            <span>ENTERPRISE STANDARDS & AUDIT RELIABILITY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Enterprise Scale & <br />
            <span className="text-corporate-sky">Financial Audit Reliability</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Rooted in 10+ years of CFO back-office financial reconciliation and enterprise software engineering, RUNITO delivers institution-grade billing accuracy and automated SLA tracking.
          </p>
        </div>

        {/* 3 Core Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: BFSI Collections & Recovery Billing QC */}
          <div className="corporate-card corporate-card-hover p-8 rounded-3xl border border-navy-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-slate-700 flex items-center justify-center mb-6 text-corporate-sky group-hover:scale-110 transition-transform">
                <Scale className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-corporate-sky transition-colors mb-3">
                BFSI Collections & Recovery Billing QC
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Precision-engineered audit logic for recovery agency payouts, collection cost reconciliation, and multi-vendor call center billing validation. Eliminates overbilling leakage with 98.5% automated accuracy.
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>Recovery Agency Payout Reconciliation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>Multi-Vendor SLA Billing Audit</span>
              </div>
            </div>
          </div>

          {/* Card 2: PowerBI & SQL Dashboards */}
          <div className="corporate-card corporate-card-hover p-8 rounded-3xl border border-navy-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-slate-700 flex items-center justify-center mb-6 text-corporate-sky group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-corporate-sky transition-colors mb-3">
                PowerBI & SQL Financial Analytics
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Transform complex enterprise databases into automated Executive MBR/QBR dashboards. Real-time SQL query optimization and PowerBI visualizations designed for CFO-level decision making.
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>Automated Executive MBR Decks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>Zero-Friction SQL Data Pipelines</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Software Engineering */}
          <div className="corporate-card corporate-card-hover p-8 rounded-3xl border border-navy-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-navy-800 border border-slate-700 flex items-center justify-center mb-6 text-corporate-sky group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white group-hover:text-corporate-sky transition-colors mb-3">
                Enterprise Cloud Architecture
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                High-scale web platforms, microservices architecture, and secure cloud API integrations built to handle millions of transactions with strict security standards.
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>Scalable RESTful Microservices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-corporate-sky shrink-0" />
                <span>High-Availability Cloud Infrastructure</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
