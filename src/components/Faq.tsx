import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What core products and services does Runit Infotech provide?",
      answer: "Runit Infotech (`runito.in`) operates across three core pillars: 1) Flagship Fintech & Web SaaS products including PowerBooks (Cloud POS & Retail ERP), FireBooks (Micro Cloud Ledger), and 1lybio (Digital Bio-Link Generator); 2) Enterprise MIS & Analytics featuring BFSI Collections & Recovery Billing QC and PowerBI/SQL dashboards; 3) RUNIT AIOS consulting specializing in n8n automated workflows and dual AI OS architectures (@TED & @NOVA)."
    },
    {
      question: "Is Runit Infotech a government-registered enterprise?",
      answer: "Yes, Runit Infotech is an officially registered Micro Enterprise under the Government of India Ministry of MSME with Udyam Registration Number UDYAM-PY-03-0026319. It is classified under National Industry Classification (NIC) codes 62011 (Computer programming activities), 62020 (Computer consultancy and computer facilities management), and 62099 (Other information technology and computer service activities)."
    },
    {
      question: "How does RUNIT AIOS workflow automation reduce operational costs?",
      answer: "RUNIT AIOS uses n8n event-driven workflows to connect databases, email dispatchers, and messaging APIs automatically. By eliminating repetitive manual data entry, spreadsheet consolidation, and billing reconciliation, clients achieve up to an 85% reduction in manual reporting hours with a 99.2% audit accuracy score."
    },
    {
      question: "How can I deploy PowerBooks, FireBooks, or 1lybio for my store/business?",
      answer: "You can schedule a direct demo or signup via runito.in. PowerBooks offers immediate cloud POS setup for retail supermarkets with multi-MRP rate pricing, while 1lybio allows instant digital bio-link creation at 1lybio.in."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyber-cyan/10 border border-cyber-cyan/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyber-cyan">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="text-gradient-cyan">We Have Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-heading font-bold text-base sm:text-lg text-white flex items-center justify-between space-x-4 hover:text-cyber-cyan transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyber-cyan shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 font-normal animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
