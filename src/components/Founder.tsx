import React from 'react';
import { User, Award, GraduationCap, Linkedin, Github, Youtube, Globe, CheckCircle2, Building2 } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 relative bg-graphite-950/80 border-t border-graphite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-graphite-900 border border-graphite-700 px-3.5 py-1.5 rounded-full text-xs font-mono text-brandRed-light">
            <User className="w-3.5 h-3.5 text-brandRed" />
            <span>FOUNDER & LEADERSHIP</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Excellence & <span className="text-brandRed-light">Technology Leadership</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Meet the leadership bridging corporate financial audit rigor with modern software engineering innovation.
          </p>
        </div>

        {/* Founder Card */}
        <div className="graphite-card max-w-4xl mx-auto rounded-3xl border border-graphite-800 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-2xl relative overflow-hidden">
          
          {/* Left Avatar / Badge Column (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-brandRed p-1 shadow-2xl shadow-brandRed/20">
                <div className="w-full h-full bg-graphite-900 rounded-[22px] overflow-hidden flex flex-col items-center justify-center p-4">
                  <div className="w-20 h-20 rounded-full bg-graphite-800 border border-brandRed/40 flex items-center justify-center text-brandRed-light font-heading font-black text-3xl">
                    VA
                  </div>
                  <span className="text-xs font-heading font-bold text-white mt-2">Varun Akshay</span>
                  <span className="text-[10px] text-slate-400 font-mono">S Varunakshay</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-xl text-white">
                Varun Akshay
              </h3>
              <p className="text-xs text-brandRed-light font-mono font-semibold">
                S Varunakshay
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Founder & Lead Architect
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
                className="p-2.5 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white hover:border-brandRed transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/code-with-varun"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@Runit_Infotech"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-brandRed-light transition-colors"
                title="YouTube @Runit_Infotech"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://code-with-varun.github.io/me-1lybio/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-emerald-400 transition-colors"
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
                <Building2 className="w-4 h-4 text-brandRed-light" />
                <span>Executive Profile</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A results-driven technologist with over a decade of hands-on expertise spanning enterprise MIS reporting, BFSI collections analytics, billing QC automation, full-stack MERN web development, and process automation.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As Founder and Lead Architect of <span className="text-white font-bold">RUNIT INFOTECH</span>, Varun Akshay leads software development for PowerBooks, FireBooks, 1lybio, and custom enterprise analytics solutions.
              </p>
            </div>

            {/* Academic Credentials & Honors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-graphite-900 border border-graphite-800 p-4 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 text-brandRed-light font-bold text-xs">
                  <GraduationCap className="w-4 h-4 text-brandRed" />
                  <span>Academic Qualifications</span>
                </div>
                <p className="text-xs text-white font-semibold">B.Sc Computer Science</p>
                <p className="text-[11px] text-slate-400 font-mono">RAAK Arts & Science College</p>
                <p className="text-[11px] text-slate-400 font-mono">UpGrad KnowledgeHut Full Stack Alumnus</p>
              </div>

              <div className="bg-graphite-900 border border-graphite-800 p-4 rounded-2xl space-y-1">
                <div className="flex items-center space-x-2 text-brandRed-light font-bold text-xs">
                  <Award className="w-4 h-4 text-brandRed" />
                  <span>Domain Expertise</span>
                </div>
                <p className="text-xs text-white font-semibold">BFSI Collections & Billing QC</p>
                <p className="text-[11px] text-slate-400 font-mono">10+ Years MIS Data Reconciliation</p>
                <p className="text-[11px] text-slate-400 font-mono">Full-Stack Cloud Architecture</p>
              </div>

            </div>

            {/* Key Accomplishments Checklist */}
            <div className="space-y-2 pt-2 border-t border-graphite-800 text-xs font-mono text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light shrink-0" />
                <span>10+ Years Enterprise MIS & Financial Data Reconciliation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light shrink-0" />
                <span>Creator of PowerBooks, FireBooks & 1lybio SaaS Ecosystem</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brandRed-light shrink-0" />
                <span>Architect of Automated SQL Data Pipelines</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

