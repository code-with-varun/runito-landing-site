import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, X, ChevronRight } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  targetAudience: string;
  keySpecs: string[];
  status: string;
  link?: string;
}

export const Showcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'powerbooks',
      name: 'PowerBooks SaaS',
      category: 'Cloud POS & Retail ERP',
      domain: 'powerbooks.runito.in',
      description: 'Comprehensive financial accounting, POS barcode billing, multi-MRP rate selector, and GSTR-1 tax register for supermarkets and retail stores.',
      targetAudience: 'Supermarkets, Retail Chains, Provision Stores, Apparel Outlets',
      keySpecs: [
        'Barcode Scan Latency <50ms',
        'Multi-MRP Rate Selector Engine',
        'Offline PWA Auto-Sync',
        'GST Tax Register (BWS/IWS/DWS)',
        'Customer Lifetime Spend CRM'
      ],
      status: 'LIVE PRODUCT v3.0',
      link: '#'
    },
    {
      id: 'firebooks',
      name: 'FireBooks SaaS',
      category: 'Micro Cloud Ledger',
      domain: 'firebooks.runito.in',
      description: 'Ultra-fast single-touch bookkeeping, daily cashbook ledger, and WhatsApp invoice dispatch for micro-enterprises and stalls.',
      targetAudience: 'Micro Enterprises, Kiosks, Small Traders, Freelancers',
      keySpecs: [
        'Single-Touch Day Close Entry',
        'Instant WhatsApp PDF Invoice',
        'Real-time Cash Flow Tracker',
        'Zero Training Touch Interface'
      ],
      status: 'PRODUCTION READY',
      link: '#'
    },
    {
      id: '1lybio',
      name: '1lybio Utility',
      category: 'Digital Bio Card Generator',
      domain: '1lybio.in',
      description: 'High-speed bio link generator and digital business card platform enabling creators and entrepreneurs to share social profiles, products, and contact info in 1 tap.',
      targetAudience: 'Creators, Founders, Agencies, Freelancers',
      keySpecs: [
        'Custom Subdomain & QR Code Card',
        'Social Media & Payment Link Aggregator',
        'Edge CDN Ultra-Fast Load Time',
        'Analytics & Click Counter'
      ],
      status: 'LIVE ONLINE',
      link: 'https://1lybio.in/'
    },
    {
      id: 'ungal-matrimony',
      name: 'Ungal Matrimony',
      category: 'Community Tech Platform',
      domain: 'ungalmatrimony.in',
      description: 'Community-centric matrimonial matching portal featuring secure profile verification, filter search, and privacy-first messaging.',
      targetAudience: 'Regional Communities, Families, Matchmaking Partners',
      keySpecs: [
        'Verified Mobile & ID Profiles',
        'Privacy-Preserving Contact Requests',
        'Advanced Filter & Horoscope Search',
        'Dedicated Support Desk'
      ],
      status: 'PRODUCTION READY',
      link: '#'
    },
    {
      id: 'ispark',
      name: 'Ispark Solutions',
      category: 'Retail & Stall Management MIS',
      domain: 'ispark.runito.in',
      description: 'Specialized stall allotment, exhibition event ticketing, and retail vendor inventory MIS derived from Ispark operations.',
      targetAudience: 'Exhibition Organizers, Flea Markets, Stall Owners',
      keySpecs: [
        'Interactive Stall Allotment Map',
        'Daily Stall Rent & Settlement MIS',
        'Multi-Vendor Counter Inventory',
        'Automated Receipt Generator'
      ],
      status: 'ENTERPRISE MODULE',
      link: '#'
    }
  ];

  return (
    <section id="showcase" className="py-20 md:py-28 relative bg-graphite-950/90 border-t border-graphite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-800 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <span>PRODUCT SHOWCASE & APPLICATIONS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flagship Software <span className="text-brandRed-light">Suite & Applications</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Inspect technical specifications, target audience, and deployment details for our core business applications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className="graphite-card graphite-card-hover p-8 rounded-3xl border border-graphite-800 flex flex-col justify-between space-y-6 cursor-pointer group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-brandRed-light bg-graphite-800 border border-slate-700 px-2.5 py-1 rounded-full uppercase">
                    {prod.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                    {prod.status}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-white group-hover:text-brandRed-light transition-colors mb-2">
                  {prod.name}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-4">
                  {prod.domain}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {prod.description}
                </p>
              </div>

              <div className="pt-4 border-t border-graphite-800 flex items-center justify-between text-xs font-bold text-brandRed-light">
                <span>View Full Specs & Overview</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-graphite-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="graphite-card max-w-2xl w-full rounded-3xl border border-slate-700 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-graphite-800 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-brandRed-light bg-graphite-800 border border-slate-700 px-3 py-1 rounded-full uppercase">
                {selectedProduct.category}
              </span>
              <h3 className="font-heading font-black text-3xl text-white pt-2">
                {selectedProduct.name}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Official Domain: {selectedProduct.domain}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="space-y-2 bg-graphite-900 border border-graphite-800 p-4 rounded-2xl">
              <p className="text-xs font-mono text-slate-400 font-bold uppercase">Target Audience:</p>
              <p className="text-xs text-white font-medium">{selectedProduct.targetAudience}</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono text-slate-400 font-bold uppercase">Key Technical Capabilities:</p>
              <div className="space-y-2">
                {selectedProduct.keySpecs.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brandRed-light shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-graphite-800 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">
                ● Status: {selectedProduct.status}
              </span>

              {selectedProduct.link && selectedProduct.link !== '#' ? (
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-brandRed text-white flex items-center space-x-2 shadow-lg"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-2.5 rounded-xl font-heading font-bold text-xs bg-graphite-800 text-white hover:bg-graphite-700"
                >
                  Close Modal
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
