import React from 'react';
import { MapPin, Mail, ExternalLink, Linkedin, Github, Youtube, Globe } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-graphite-950 border-t border-graphite-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Location (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/runit-logo-horizontal-dark.svg"
                alt="RUNITO - Runit Infotech"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white">
                  RUNITO
                </span>
                <span className="text-[10px] text-brandRed-light font-mono block">RUNIT INFOTECH</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering Enterprises & Businesses with Next-Gen Fintech SaaS, BFSI Billing QC Analytics, and Data Automation.
            </p>

            {/* Address */}
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brandRed-light shrink-0 mt-0.5" />
                <span>Flat 11, 1st Cross St, Kasthuribai Nagar, Nellithope, Puducherry 605005, India.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Core Products & SaaS
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">PowerBooks (Cloud POS & ERP)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">FireBooks (Micro Ledger)</a></li>
              <li><a href="https://1lybio.in/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center space-x-1"><span>1lybio.in (Bio Link Generator)</span><ExternalLink className="w-3 h-3 text-brandRed-light" /></a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Ungal Matrimony Portal</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Ispark Retail & Stall MIS</a></li>
            </ul>
          </div>

          {/* Col 3: Enterprise Services (2 Cols) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Enterprise Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#enterprise-mis" className="hover:text-white transition-colors">BFSI Billing QC Audit</a></li>
              <li><a href="#enterprise-mis" className="hover:text-white transition-colors">PowerBI & SQL Analytics</a></li>
              <li><a href="#automation" className="hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#leadership" className="hover:text-white transition-colors">Varun Akshay Leadership</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Connect & Support
            </h4>
            <div className="space-y-2 text-slate-400 font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brandRed-light" />
                <a href="mailto:contact@runito.in" className="hover:text-white">contact@runito.in</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brandRed-light" />
                <a href="mailto:support@runito.in" className="hover:text-white">support@runito.in</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/varun-akshay-fsd/" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white hover:border-brandRed"><Linkedin className="w-4 h-4" /></a>
              <a href="https://github.com/code-with-varun" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white"><Github className="w-4 h-4" /></a>
              <a href="https://www.youtube.com/@Runit_Infotech" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-brandRed-light"><Youtube className="w-4 h-4" /></a>
              <a href="https://code-with-varun.github.io/me-1lybio/" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-emerald-400"><Globe className="w-4 h-4" /></a>
            </div>

            <button
              onClick={onOpenContact}
              className="mt-3 w-full py-2.5 bg-brandRed hover:bg-brandRed-dark text-white font-heading font-bold rounded-xl text-xs text-center shadow-lg"
            >
              Schedule Consultation
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-graphite-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© 2024-2026 RUNIT INFOTECH. All Rights Reserved.</p>
          <p>Master Domain: <span className="text-brandRed-light font-bold">runito.in</span></p>
        </div>

      </div>
    </footer>
  );
};

