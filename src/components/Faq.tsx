import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What core products and services does Runit Infotech provide?",
      answer: "Runit Infotech (`runito.in`) operates across three core pillars: 1) Flagship Fintech & Web SaaS products including PowerBooks (Cloud POS & Retail ERP), FireBooks (Micro Cloud Ledger), and 1lybio (Digital Bio-Link Generator); 2) Enterprise MIS & Data Analytics featuring BFSI Collections & Recovery Billing QC and PowerBI/SQL dashboards; 3) Intelligent Process Automation specializing in automated SQL data pipelines and workflow integrations."
    },
    {
      question: "How does process automation reduce operational costs for businesses?",
      answer: "By connecting databases, billing systems, and messaging channels automatically through custom SQL workflows and automated pipelines, businesses eliminate manual data entry, spreadsheet consolidation, and billing reconciliation — achieving up to an 85% reduction in manual operational hours with 98.5% reconciliation precision."
    },
    {
      question: "How can I deploy PowerBooks, FireBooks, or 1lybio for my business?",
      answer: "You can schedule an enterprise consultation or signup directly via runito.in. PowerBooks offers immediate cloud POS setup for retail supermarkets with multi-MRP rate pricing, while 1lybio allows instant digital bio-link creation at 1lybio.in."
    },
    {
      question: "Can RUNITO build custom web applications for our enterprise requirements?",
      answer: "Yes, RUNITO develops custom full-stack web applications, RESTful microservices, and back-office management dashboards using MERN, PHP/Laravel, and relational SQL/MongoDB databases tailored to your business SLA requirements."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-graphite-800 bg-graphite-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-900 border border-graphite-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <HelpCircle className="w-3.5 h-3.5 text-brandRed" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-brandRed-light">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="graphite-card rounded-2xl border border-graphite-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-heading font-bold text-base sm:text-lg text-white flex items-center justify-between space-x-4 hover:text-brandRed-light transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brandRed-light shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-graphite-800 pt-4 font-normal animate-in fade-in duration-200">
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

