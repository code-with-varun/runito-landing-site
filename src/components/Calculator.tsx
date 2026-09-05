import React, { useState } from 'react';
import { Calculator as CalcIcon, Clock, DollarSign, ShieldCheck, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onOpenContact: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenContact }) => {
  const [weeklyHours, setWeeklyHours] = useState<number>(25);
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(500);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Math Calculations:
  // 1. Monthly hours spent = weeklyHours * 4.33
  // 2. Automated hours saved = Monthly hours * 0.85 (85% reduction)
  // 3. Cost per hour approx = ₹600 / $25 per hour
  // 4. Processing cost per invoice approx = ₹40 / $1.50
  const monthlyHoursSpent = Math.round(weeklyHours * 4.33);
  const hoursSavedMonthly = Math.round(monthlyHoursSpent * 0.85);

  const hourlyRate = currency === 'INR' ? 600 : 25;
  const invoiceProcessingRate = currency === 'INR' ? 45 : 1.5;

  const laborSavings = hoursSavedMonthly * hourlyRate;
  const invoiceSavings = Math.round(monthlyInvoices * invoiceProcessingRate * 0.7);
  const totalMonthlySavings = laborSavings + invoiceSavings;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <section id="calculator" className="py-20 md:py-28 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyber-cyan/10 border border-cyber-cyan/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyber-cyan">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="text-gradient-cyan">Automation ROI & Time Saved</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            See how much time and operational expense your business saves by replacing manual spreadsheets with RUNITO SQL & n8n AIOS workflows.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="glass-panel max-w-5xl mx-auto rounded-3xl border border-slate-700/80 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl">
          
          {/* Sliders Input Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="font-heading font-bold text-xl text-white">
                Input Operational Parameters
              </h3>
              
              {/* Currency Toggle */}
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-mono">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                    currency === 'INR' ? 'bg-cyber-cyan text-midnight-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                    currency === 'USD' ? 'bg-cyber-cyan text-midnight-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Slider 1: Weekly Reporting Hours */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <label className="text-slate-300 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyber-cyan" />
                  <span>Manual Reporting Hours Spent / Week</span>
                </label>
                <span className="font-heading font-black text-xl text-cyber-cyan font-mono bg-cyber-cyan/10 border border-cyber-cyan/20 px-3 py-1 rounded-xl">
                  {weeklyHours} Hours / wk
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5 hrs (Small Team)</span>
                <span>50 hrs (Enterprise Unit)</span>
                <span>100 hrs (Global Multi-Branch)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Vendor Invoices Processed */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <label className="text-slate-300 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-neon-emerald" />
                  <span>Monthly Vendor Invoices / Line Items</span>
                </label>
                <span className="font-heading font-black text-xl text-neon-emerald font-mono bg-neon-emerald/10 border border-neon-emerald/20 px-3 py-1 rounded-xl">
                  {monthlyInvoices.toLocaleString()} Bills / mo
                </span>
              </div>

              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-neon-emerald"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>50 Bills</span>
                <span>2,500 Bills</span>
                <span>5,000+ Bills</span>
              </div>
            </div>

            {/* Note box */}
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 font-mono">⚙️ RUNIT AIOS Calculation Model:</p>
              <p>Based on n8n webhook automation & Datamatics billing audit benchmark (85% reduction in manual data entry hours).</p>
            </div>

          </div>

          {/* Dynamic Output Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-midnight-950 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 radial-glow-cyan pointer-events-none"></div>

            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg text-white border-b border-slate-800 pb-3">
                Estimated ROI & Savings Output
              </h4>

              {/* Output 1: Hours Saved */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">⏱️ Hours Saved Monthly</p>
                <p className="font-heading font-black text-3xl sm:text-4xl text-cyber-cyan font-mono">
                  {hoursSavedMonthly} Hours <span className="text-xs text-slate-400 font-normal">/ mo</span>
                </p>
                <p className="text-[11px] text-neon-emerald font-semibold font-mono">
                  ✓ Up to 85% time reduction achieved
                </p>
              </div>

              {/* Output 2: Estimated Monthly Cost Savings */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">💰 Estimated Monthly Cost Savings</p>
                <p className="font-heading font-black text-3xl sm:text-4xl text-neon-emerald font-mono">
                  {currency === 'INR' ? '₹' : '$'}{totalMonthlySavings.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  Annual Estimated Savings: <span className="text-white font-bold">{currency === 'INR' ? '₹' : '$'}{annualSavings.toLocaleString()}</span>
                </p>
              </div>

              {/* Output 3: Accuracy Score */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">📊 Error Reduction Score</p>
                <p className="font-heading font-bold text-xl text-white font-mono flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-neon-emerald" />
                  <span>99.2% Audit Accuracy</span>
                </p>
              </div>
            </div>

            {/* CTA inside output box */}
            <button
              onClick={onOpenContact}
              className="w-full py-3.5 bg-cyber-gradient text-midnight-950 font-heading font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyber-cyan/20 transition-all"
            >
              <span>Implement This Savings Model</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
