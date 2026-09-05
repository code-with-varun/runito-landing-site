import React, { useState } from 'react';
import { Calculator as CalcIcon, Clock, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';

interface CalculatorProps {
  onOpenContact: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenContact }) => {
  const [weeklyHours, setWeeklyHours] = useState<number>(25);
  const [monthlyInvoices, setMonthlyInvoices] = useState<number>(500);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const monthlyHoursSpent = Math.round(weeklyHours * 4.33);
  const hoursSavedMonthly = Math.round(monthlyHoursSpent * 0.85);

  const hourlyRate = currency === 'INR' ? 600 : 25;
  const invoiceProcessingRate = currency === 'INR' ? 45 : 1.5;

  const laborSavings = hoursSavedMonthly * hourlyRate;
  const invoiceSavings = Math.round(monthlyInvoices * invoiceProcessingRate * 0.7);
  const totalMonthlySavings = laborSavings + invoiceSavings;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <section id="calculator" className="py-20 md:py-28 relative border-t border-graphite-800 bg-graphite-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-900 border border-graphite-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <CalcIcon className="w-3.5 h-3.5 text-brandRed" />
            <span>BUSINESS AUTOMATION ROI CALCULATOR</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="text-brandRed-light">Operational Time & Cost Savings</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Estimate how much operational time and financial expense your business saves by eliminating manual spreadsheet reporting with automated SQL data pipelines.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="graphite-card max-w-5xl mx-auto rounded-3xl border border-graphite-800 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl">
          
          {/* Sliders Input Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="flex items-center justify-between border-b border-graphite-800 pb-4">
              <h3 className="font-heading font-bold text-xl text-white">
                Operational Parameters
              </h3>
              
              {/* Currency Toggle */}
              <div className="flex items-center bg-graphite-900 border border-graphite-700 rounded-xl p-1 text-xs font-mono">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                    currency === 'INR' ? 'bg-brandRed text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                    currency === 'USD' ? 'bg-brandRed text-white' : 'text-slate-400 hover:text-white'
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
                  <Clock className="w-4 h-4 text-brandRed-light" />
                  <span>Manual Reporting Hours Spent / Week</span>
                </label>
                <span className="font-heading font-black text-xl text-brandRed-light font-mono bg-graphite-900 border border-graphite-700 px-3 py-1 rounded-xl">
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
                className="w-full h-2 bg-graphite-800 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5 hrs (Small Team)</span>
                <span>50 hrs (Enterprise Unit)</span>
                <span>100 hrs (Global Operations)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Vendor Invoices Processed */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <label className="text-slate-300 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Monthly Vendor Invoices / Line Items</span>
                </label>
                <span className="font-heading font-black text-xl text-emerald-400 font-mono bg-graphite-900 border border-graphite-700 px-3 py-1 rounded-xl">
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
                className="w-full h-2 bg-graphite-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>50 Bills</span>
                <span>2,500 Bills</span>
                <span>5,000+ Bills</span>
              </div>
            </div>

            {/* Benchmark Note */}
            <div className="bg-graphite-900 border border-graphite-800 p-4 rounded-2xl text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300 font-mono">⚙️ Enterprise Calculation Benchmark:</p>
              <p>Based on financial billing audit benchmarks (achieving 85% reduction in manual spreadsheet compilation hours).</p>
            </div>

          </div>

          {/* Dynamic Output Column (5 Cols) */}
          <div className="lg:col-span-5 bg-graphite-900 border border-graphite-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg text-white border-b border-graphite-800 pb-3">
                Estimated ROI & Output
              </h4>

              {/* Output 1: Hours Saved */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">⏱️ Hours Saved Monthly</p>
                <p className="font-heading font-black text-3xl sm:text-4xl text-brandRed-light font-mono">
                  {hoursSavedMonthly} Hours <span className="text-xs text-slate-400 font-normal">/ mo</span>
                </p>
                <p className="text-[11px] text-emerald-400 font-semibold font-mono">
                  ✓ 85% reduction in manual effort
                </p>
              </div>

              {/* Output 2: Estimated Monthly Cost Savings */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">💰 Estimated Monthly Savings</p>
                <p className="font-heading font-black text-3xl sm:text-4xl text-emerald-400 font-mono">
                  {currency === 'INR' ? '₹' : '$'}{totalMonthlySavings.toLocaleString()}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  Annual Estimated Savings: <span className="text-white font-bold">{currency === 'INR' ? '₹' : '$'}{annualSavings.toLocaleString()}</span>
                </p>
              </div>

              {/* Output 3: Accuracy Score */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-mono uppercase">📊 Reconciliation Accuracy</p>
                <p className="font-heading font-bold text-xl text-white font-mono flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>98.5% Audit Precision</span>
                </p>
              </div>
            </div>

            {/* CTA inside output box */}
            <button
              onClick={onOpenContact}
              className="w-full py-3.5 bg-brandRed hover:bg-brandRed-dark text-white font-heading font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
            >
              <span>Implement Automation Model</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

