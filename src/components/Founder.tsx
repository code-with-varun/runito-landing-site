import React from 'react';
import { User, Award, GraduationCap, Linkedin, Github, Youtube, Globe, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-20 md:py-28 relative bg-midnight-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-purple-400">
            <User className="w-3.5 h-3.5" />
            <span>FOUNDER & LEADERSHIP ARCHITECTURE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Pioneering <span className="text-gradient-cyan">Human-in-the-Loop Technology</span> <br className="hidden sm:inline" />
            & AI Automation
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Meet the visionary leadership bridging corporate enterprise rigor with agile AI workflow innovation.
          </p>
        </div>

        {/* Founder Card */}
        <div className="glass-panel max-w-4xl mx-auto rounded-3xl border border-slate-700/80 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 radial-glow-cyan pointer-events-none opacity-50"></div>

          {/* Left Avatar / Badge Column (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-cyber-cyan via-cyber-blue to-purple-600 p-1 shadow-2xl shadow-cyber-cyan/20">
                <div className="w-full h-full bg-midnight-900 rounded-[22px] overflow-hidden flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-heading font-black text-3xl">
                    VA
                  </div>
                  <span className="text-xs font-heading font-bold text-white mt-2">Varun Akshay</span>
                  <span className="text-[10px] text-slate-400 font-mono">S Varunakshay</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-neon-emerald text-midnight-950 p-2 rounded-xl shadow-lg border border-midnight-950" title="Datamatics Star Performer">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-xl text-white">
                Varun Akshay
              </h3>
              <p className="text-xs text-cyber-cyan font-mono font-semibold">
                S Varunakshay (Former: Maruthupandiyan)
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Founder, CEO & Lead Architect
              </p>
              <p className="text-[11px] text-slate-400 font-mono font-bold">
                RUNIT INFOTECH
              </p>
            </div>

            {/* Social Media Link Buttons */}
            <div className="pt-4 flex flex-wrap justify-center gap-2">
              <a
                href="https://www.linkedin.com/in/varun-akshay-fsd/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/code-with-varun"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@Runit_Infotech"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-500 hover:border-rose-500/40 transition-colors"
                title="YouTube @Runit_Infotech"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://code-with-varun.github.io/me-1lybio/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-neon-emerald hover:border-neon-emerald/40 transition-colors"
                title="Personal 1lybio Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Bio & Credentials Column (8 Cols) */}
          <div className="md:col-span-8 space-y-6">
            
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-cyber-cyan" />
                <span>Executive Bio & Background</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A results-driven technologist with over a decade of hands-on expertise spanning enterprise MIS reporting, BFSI collections analytics, billing QC automation, full-stack MERN web development, and AI workflow orchestration (n8n & RAG architecture).
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Former CFO back-office operational specialist at Datamatics Global Services, Varun Akshay founded <span className="text-white font-bold">RUNIT INFOTECH</span> to empower enterprises and MSMEs with robust fintech SaaS applications and autonomous AI productivity agents.
              </p>
            </div>

            {/* Academic Credentials & Honors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 text-cyber-cyan font-bold text-xs">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualifications</span>
                </div>
                <p className="text-xs text-white font-semibold">B.Sc Computer Science</p>
                <p className="text-[11px] text-slate-400 font-mono">RAAK Arts & Science College</p>
                <p className="text-[11px] text-slate-400 font-mono">UpGrad KnowledgeHut Full Stack Alumnus</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                  <Award className="w-4 h-4" />
                  <span>Enterprise Honors</span>
                </div>
                <p className="text-xs text-white font-semibold">Datamatics Star Performer</p>
                <p className="text-[11px] text-slate-400 font-mono">BFSI Collections Billing QC Lead</p>
                <p className="text-[11px] text-slate-400 font-mono">MSME Registration: UDYAM-PY-03-0026319</p>
              </div>

            </div>

            {/* Key Accomplishments Checklist */}
            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>10+ Years Enterprise MIS & Financial Data Reconciliation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>Creator of PowerBooks, FireBooks & 1lybio SaaS Ecosystem</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                <span>Architect of RUNIT Dual AI OS (@TED & @NOVA Workflows)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
