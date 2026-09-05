import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, Mail, User, Building, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('PowerBooks POS SaaS');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      alert('Thank you for contacting RUNITO (Runit Infotech). We will connect with you shortly!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-graphite-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="graphite-card max-w-xl w-full rounded-3xl border border-graphite-700 p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white hover:border-brandRed transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center space-x-2 bg-graphite-900 border border-graphite-700 px-3 py-1 rounded-full text-xs font-mono text-brandRed-light">
            <Building2 className="w-3.5 h-3.5 text-brandRed" />
            <span>RUNIT INFOTECH (runito.in)</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Schedule Enterprise Consultation
          </h3>
          <p className="text-xs text-slate-400">
            Connect directly with Varun Akshay and the RUNITO engineering team.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-xl text-white">Inquiry Submitted Successfully!</h4>
            <p className="text-xs text-slate-400 font-mono">Redirecting...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Varun Kumar"
                    className="w-full bg-graphite-900 border border-graphite-700 rounded-xl pl-9 pr-3 py-2.5 text-white outline-none focus:border-brandRed"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Work Email Address *</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-graphite-900 border border-graphite-700 rounded-xl pl-9 pr-3 py-2.5 text-white outline-none focus:border-brandRed"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp Number</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full bg-graphite-900 border border-graphite-700 rounded-xl pl-9 pr-3 py-2.5 text-white outline-none focus:border-brandRed font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Organization</label>
                <div className="relative flex items-center">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter Organization Name"
                    className="w-full bg-graphite-900 border border-graphite-700 rounded-xl pl-9 pr-3 py-2.5 text-white outline-none focus:border-brandRed"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Product or Service Interest</label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-graphite-900 border border-graphite-700 rounded-xl px-3 py-2.5 text-white outline-none focus:border-brandRed font-semibold"
              >
                <option value="PowerBooks POS SaaS">PowerBooks (Cloud POS & Retail ERP)</option>
                <option value="FireBooks Micro Ledger">FireBooks (Micro Cloud Ledger)</option>
                <option value="1lybio Bio Link Utility">1lybio (Digital Card Utility)</option>
                <option value="BFSI Collections & Billing QC">BFSI Collections & Recovery Billing QC</option>
                <option value="Automated Data Pipelines">Automated SQL Data Pipelines & PowerBI</option>
                <option value="Custom Full-Stack Web Development">Custom Full-Stack Web Development</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Project Details / Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Tell us about your requirements..."
                className="w-full bg-graphite-900 border border-graphite-700 rounded-xl p-3 text-white outline-none focus:border-brandRed"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brandRed hover:bg-brandRed-dark text-white font-heading font-bold rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Submit Consultation Request</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

