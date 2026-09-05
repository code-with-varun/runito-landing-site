import React, { useState } from 'react';
import { Layers, ShoppingCart, Database, CheckCircle2, ArrowRight, Code, Cpu, Workflow, FileText } from 'lucide-react';

export const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saas' | 'mis' | 'automation'>('saas');

  return (
    <section id="products" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE BUSINESS PILLARS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of <span className="text-brandRed-light">RUNITO Platform</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From intuitive SaaS solutions for businesses to high-scale Enterprise MIS reporting and automated workflow execution.
          </p>
        </div>

        {/* Tab Selector Buttons - Datamatics Red Active State */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('saas')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-200 ${
              activeTab === 'saas'
                ? 'bg-brandRed text-white shadow-lg shadow-brandRed/25 scale-105'
                : 'bg-graphite-800 text-slate-300 hover:text-white border border-graphite-700'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Pillar 1: Fintech & Retail SaaS Suite</span>
          </button>

          <button
            onClick={() => setActiveTab('mis')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-200 ${
              activeTab === 'mis'
                ? 'bg-brandRed text-white shadow-lg shadow-brandRed/25 scale-105'
                : 'bg-graphite-800 text-slate-300 hover:text-white border border-graphite-700'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Pillar 2: Enterprise MIS & Data Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('automation')}
            className={`px-6 py-3.5 rounded-2xl font-heading font-bold text-xs sm:text-sm flex items-center space-x-2.5 transition-all duration-200 ${
              activeTab === 'automation'
                ? 'bg-brandRed text-white shadow-lg shadow-brandRed/25 scale-105'
                : 'bg-graphite-800 text-slate-300 hover:text-white border border-graphite-700'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>Pillar 3: Process Automation</span>
          </button>
        </div>

        {/* Tab Content Display */}

        {/* TAB 1: FINTECH & SAAS */}
        {activeTab === 'saas' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* PowerBooks Card */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6 group hover:border-brandRed/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-brandRed-light bg-graphite-800 border border-slate-700 px-2.5 py-1 rounded-full uppercase">
                    RETAIL ERP
                  </span>
                  <span className="text-xs text-slate-400 font-mono">v3.0 Platform</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-brandRed-light transition-colors">
                  PowerBooks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Comprehensive Cloud POS billing, multi-MRP rate pricing, real-time inventory deductions, and GSTR-1 ready tax register SaaS for supermarkets and retail stores.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Barcode Scan Latency &lt;50ms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Multi-MRP Rate Selector Engine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Offline PWA Auto-Sync</span>
                  </div>
                </div>
              </div>
              <a
                href="#showcase"
                className="inline-flex items-center space-x-2 text-xs font-bold text-brandRed-light hover:underline pt-4 border-t border-graphite-800"
              >
                <span>Explore PowerBooks Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* FireBooks Card */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6 group hover:border-brandRed/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-brandRed-light bg-graphite-800 border border-slate-700 px-2.5 py-1 rounded-full uppercase">
                    MICRO LEDGER
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Cloud ERP</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-brandRed-light transition-colors">
                  FireBooks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Rapid cloud bookkeeping, single-touch cashflow entry, and digital day-book register for micro-enterprises, stalls, and small retail outlets.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Single-Touch Day Close & Cash Book</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Instant WhatsApp Invoice PDF</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Zero Training Touch Interface</span>
                  </div>
                </div>
              </div>
              <a
                href="#showcase"
                className="inline-flex items-center space-x-2 text-xs font-bold text-brandRed-light hover:underline pt-4 border-t border-graphite-800"
              >
                <span>Explore FireBooks Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 1lybio Card */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6 group hover:border-brandRed/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-brandRed-light bg-graphite-800 border border-slate-700 px-2.5 py-1 rounded-full uppercase">
                    DIGITAL UTILITY
                  </span>
                  <span className="text-xs text-slate-400 font-mono">1lybio.in</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-brandRed-light transition-colors">
                  1lybio (`1lybio.in`)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Slick, high-speed single bio-link generator and digital business card platform designed for creators, entrepreneurs, and digital brands.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Custom Subdomain & QR Code Cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Social Links & Portfolio Aggregator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light" />
                    <span>Ultra-Fast Edge CDN Load</span>
                  </div>
                </div>
              </div>
              <a
                href="https://1lybio.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold text-brandRed-light hover:underline pt-4 border-t border-graphite-800"
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
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Custom Full-Stack Web Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  High-performance web applications, RESTful microservices, and custom back-office operational portals engineered for enterprise scale.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Node.js, Express, React, MongoDB</p>
                <p>• Laravel, MySQL, REST API Integration</p>
              </div>
            </div>

            {/* SQL & PowerBI Automation */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  SQL & PowerBI Analytics Decks
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

            {/* Retail & Asset Solutions */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
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

        {/* TAB 3: PROCESS AUTOMATION */}
        {activeTab === 'automation' && (
          <div id="automation" className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* n8n Workflows */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
                  <Workflow className="w-6 h-6" />
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
                <p>• Up to 85% Reduction in Manual Tasks</p>
              </div>
            </div>

            {/* API Integration */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Enterprise API Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Secure system integration layer connecting ERP databases, payment gateways, and banking webhooks with zero data loss.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Real-time Payment Gateway Webhooks</p>
                <p>• Enterprise System Interoperability</p>
              </div>
            </div>

            {/* Document Search & Synthesis */}
            <div className="graphite-card p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-graphite-800 text-brandRed-light flex items-center justify-center mb-4 border border-slate-700">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Document Synthesis & Search
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Automated document parsing, invoice OCR text extraction, and enterprise knowledge repository indexing.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <p>• Automated PDF & Invoice Processing</p>
                <p>• Enterprise Document Indexing</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
