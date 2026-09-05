import React, { useState } from 'react';
import { Layers, ShoppingCart, Cpu, Database, CheckCircle2, ArrowRight, Zap, Bot, Terminal, Code, Sparkles } from 'lucide-react';

export const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saas' | 'mis' | 'aios'>('saas');

  return (
    <section id="saas-suite" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyber-cyan/10 border border-cyber-cyan/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyber-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of <span className="text-gradient-cyan">RUNITO Ecosystem</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From intuitive SaaS micro-apps for everyday MSMEs to high-scale Enterprise MIS analytics and autonomous AIOS n8n workflows.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('saas')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-300 ${
              activeTab === 'saas'
                ? 'bg-cyber-gradient text-midnight-950 shadow-lg shadow-cyber-cyan/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Pillar 1: Flagship Fintech & Web SaaS</span>
          </button>

          <button
            onClick={() => setActiveTab('mis')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-300 ${
              activeTab === 'mis'
                ? 'bg-cyber-gradient text-midnight-950 shadow-lg shadow-cyber-cyan/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Pillar 2: Enterprise MIS & Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('aios')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-300 ${
              activeTab === 'aios'
                ? 'bg-cyber-gradient text-midnight-950 shadow-lg shadow-cyber-cyan/20 scale-105'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Pillar 3: RUNIT AIOS & Automation</span>
          </button>
        </div>

        {/* Tab Content Display */}

        {/* TAB 1: FINTECH & SAAS */}
        {activeTab === 'saas' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* PowerBooks Card */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 group hover:border-cyber-cyan/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold bg-cyber-cyan/10 text-cyber-cyan px-2.5 py-1 rounded-full border border-cyber-cyan/20">
                    FLAGSHIP FINTECH
                  </span>
                  <span className="text-xs text-slate-400 font-mono">v3.0 Cloud</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                  PowerBooks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Comprehensive Cloud POS billing, multi-MRP rate pricing, real-time inventory deductions, and GSTR-1 ready tax register SaaS for retail supermarkets.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Barcode Scan Latency &lt;50ms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Multi-MRP Rate Selector Engine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Offline PWA Auto-Sync</span>
                  </div>
                </div>
              </div>
              <a
                href="#showcase"
                className="inline-flex items-center space-x-2 text-xs font-bold text-cyber-cyan hover:underline pt-4 border-t border-slate-800"
              >
                <span>Explore PowerBooks Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* FireBooks Card */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 group hover:border-cyber-blue/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold bg-cyber-blue/10 text-cyber-blue px-2.5 py-1 rounded-full border border-cyber-blue/20">
                    MICRO LEDGER
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Cloud ERP</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  FireBooks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Rapid cloud bookkeeping, single-touch cashflow entry, and digital day-book register for micro-enterprises, stalls, and small retail outlets.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Single-Touch Day Close & Cash Book</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Instant WhatsApp Invoice PDF</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Zero Training UI Simplicity</span>
                  </div>
                </div>
              </div>
              <a
                href="#showcase"
                className="inline-flex items-center space-x-2 text-xs font-bold text-cyber-blue hover:underline pt-4 border-t border-slate-800"
              >
                <span>Explore FireBooks Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 1lybio Card */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 group hover:border-neon-emerald/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold bg-neon-emerald/10 text-neon-emerald px-2.5 py-1 rounded-full border border-neon-emerald/20">
                    DIGITAL UTILITY
                  </span>
                  <span className="text-xs text-slate-400 font-mono">1lybio.in</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-neon-emerald transition-colors">
                  1lybio (`1lybio.in`)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Slick, high-speed single bio-link generator and digital business card platform designed for creators, entrepreneurs, and digital brands.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Custom Subdomain & QR Code Cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Social Links & Portfolio Aggregator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>Ultra-Fast Edge CDN Load</span>
                  </div>
                </div>
              </div>
              <a
                href="https://1lybio.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-neon-emerald hover:underline pt-4 border-t border-slate-800"
              >
                <span>Visit 1lybio.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: ENTERPRISE MIS */}
        {activeTab === 'mis' && (
          <div id="enterprise-mis" className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* Custom Portals */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyber-cyan/10 text-cyber-cyan flex items-center justify-center mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Custom MERN & PHP/Laravel Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  High-performance web applications, RESTful microservices, and custom back-office operational portals engineered for scale.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Node.js, Express, React, MongoDB</p>
                <p>• Laravel, MySQL, REST API Integration</p>
              </div>
            </div>

            {/* SQL & PowerBI Automation */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyber-blue/10 text-cyber-blue flex items-center justify-center mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  SQL & PowerBI Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Eliminates manual spreadsheet friction with automated SQL data extraction pipelines, SLA tracking, and dynamic PowerBI executive dashboards.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Daily/Weekly Automated MBR Decks</p>
                <p>• Complex Financial Query Optimization</p>
              </div>
            </div>

            {/* Retail & Stall Solutions */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neon-emerald/10 text-neon-emerald flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Retail & Asset Stall MIS
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Specialized stall management, event ticketing, and retail inventory management solutions derived from Ispark operations.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Stall Allotment & Settlement MIS</p>
                <p>• Multi-Counter Inventory Tracking</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RUNIT AIOS */}
        {activeTab === 'aios' && (
          <div id="aios-automation" className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* n8n Workflows */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyber-cyan/10 text-cyber-cyan flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  n8n Automated Workflows
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Self-healing, event-driven workflow automations connecting databases, WhatsApp APIs, email dispatch, and CRM platforms seamlessly.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Webhook & REST API Orchestration</p>
                <p>• 85%+ Reduction in Manual Tasks</p>
              </div>
            </div>

            {/* Dual AI OS (@TED & @NOVA) */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Dual AI OS (@TED & @NOVA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Custom AI agent orchestrations featuring <span className="text-cyber-cyan font-bold">@TED</span> (Runit Business Chief of Staff AI) and <span className="text-neon-emerald font-bold">@NOVA</span> (Personal Productivity OS).
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Human-in-the-Loop AI Architecture</p>
                <p>• Contextual Business Task Delegation</p>
              </div>
            </div>

            {/* RAG Systems */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neon-emerald/10 text-neon-emerald flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  RAG Knowledge Base & Memory
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Vector search memory tables and automated document synthesis allowing custom AI models to query enterprise files securely.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Vector Embedding Database Search</p>
                <p>• Enterprise Document RAG Pipeline</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
