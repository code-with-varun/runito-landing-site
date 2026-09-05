import React from 'react';
import { Users, Video, Youtube, Sparkles } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-20 border-t border-graphite-800 relative bg-graphite-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-900 border border-graphite-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <Users className="w-3.5 h-3.5 text-brandRed" />
            <span>COMMUNITY & COLLABORATION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Synergy & <span className="text-brandRed-light">Collaborative Ecosystem</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Bridging technical precision with community media storytelling and technology leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Lavish Dreamers Synergy */}
          <div className="graphite-card graphite-card-hover p-8 rounded-3xl border border-graphite-800 space-y-6 relative overflow-hidden group">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-graphite-900 border border-graphite-700 flex items-center justify-center text-brandRed-light group-hover:scale-110 transition-transform">
                <Video className="w-7 h-7 text-brandRed" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Lavish Dreamers Synergy
                </h3>
                <p className="text-xs text-brandRed-light font-mono font-semibold">
                  Community Media & Creative Storytelling
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In collaboration with <span className="text-white font-semibold">Lavish Dreamers (`lavishdreamers.com`)</span>, RUNITO powers creative video production, YouTube community storytelling (<span className="text-brandRed-light font-mono">@concept3604</span>), and digital youth media initiatives.
            </p>

            <div className="pt-4 border-t border-graphite-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">YouTube Channel:</span>
              <a
                href="https://www.youtube.com/@concept3604"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-brandRed-light hover:underline flex items-center space-x-1"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>@concept3604</span>
              </a>
            </div>
          </div>

          {/* Runit Fintech Core Team Acknowledgment */}
          <div className="graphite-card graphite-card-hover p-8 rounded-3xl border border-graphite-800 space-y-6 relative overflow-hidden group">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-graphite-900 border border-graphite-700 flex items-center justify-center text-brandRed-light group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-brandRed" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Runit Fintech Team
                </h3>
                <p className="text-xs text-brandRed-light font-mono font-semibold">
                  Dec 2023 Showcase Leadership
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Acknowledging the technology leadership team who showcased Runit Fintech capabilities:
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="flex justify-between bg-graphite-900 p-2.5 rounded-xl border border-graphite-800">
                <span className="font-bold text-white">Sudharshan A G</span>
                <span className="text-brandRed-light">Chief Technology Officer (CTO)</span>
              </div>
              <div className="flex justify-between bg-graphite-900 p-2.5 rounded-xl border border-graphite-800">
                <span className="font-bold text-white">Madhan S</span>
                <span className="text-brandRed-light">UI/UX Lead</span>
              </div>
              <div className="flex justify-between bg-graphite-900 p-2.5 rounded-xl border border-graphite-800">
                <span className="font-bold text-white">Hariharan J</span>
                <span className="text-emerald-400">Chief Operating Officer (COO)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

