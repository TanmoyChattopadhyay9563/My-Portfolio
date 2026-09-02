import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  Database, 
  Layers, 
  CheckCircle,
  FileText,
  TrendingUp,
  Award
} from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const techLogos = [
    { name: 'Power BI & DAX', icon: '📊' },
    { name: 'MySQL & PostgreSQL', icon: '🗄️' },
    { name: 'AWS Cloud Services', icon: '☁️' },
    { name: 'Python & Pandas', icon: '🐍' },
    { name: 'BRD / FRD / SRS', icon: '📑' },
    { name: 'JIRA & Confluence', icon: '🎯' },
    { name: 'Agile & Scrum', icon: '⚡' },
    { name: 'BigCommerce CMS', icon: '🛍️' },
    { name: 'Advanced Excel & VBA', icon: '📈' },
    { name: 'Data Visualization', icon: '💡' },
  ];

  return (
    <section className="relative pt-28 pb-6 sm:pb-8 overflow-hidden bg-white">
      {/* Radiant Electric Blue Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-ambient-hero pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-light opacity-60 -z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Award Recognition Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 hover:border-blue-300 transition-colors">
            <span className="text-blue-600 font-serif italic text-sm">✨ Certified AWS Cloud Practitioner</span>
            <span className="text-slate-300">•</span>
            <span>Business Analyst &amp; BI Strategist 2026</span>
          </div>
        </div>

        {/* Editorial Grand Title */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-950 leading-[1.05]">
            Hi I'm Tanmoy
          </h1>
          <div className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-slate-900 leading-[1.1] mt-1 text-gradient-blue">
            Business Analyst
          </div>
        </div>

        {/* Hero Interactive Composition Grid (Matching Reference Screenshot 1) */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 mb-16">
          {/* Left Column: Status Badge & Trust Avatars */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start space-y-8 order-2 lg:order-1">
            {/* Availability Pill */}
            <div className="pill-badge hover:border-emerald-300 transition-all hover:scale-105">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800">Available for new opportunities</span>
            </div>

            {/* Social Trust Metrics */}
            <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-sm">
              <div className="flex -space-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  BA
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  BI
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  SQL
                </div>
              </div>
              <p className="text-xs font-medium text-slate-600 leading-snug">
                Trusted across <span className="text-slate-900 font-bold">15+ enterprise workflows</span> &amp; 1000+ Power BI match KPIs.
              </p>
            </div>
          </div>

          {/* Central Portrait - Clean, Sharp, Luminous Glow Frame */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Vibrant Radiant Blue Halo behind Tanmoy */}
              <div className="absolute -inset-4 bg-gradient-to-t from-blue-500/25 via-cyan-400/25 to-transparent rounded-[36px] blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none"></div>

              {/* Portrait Container */}
              <div className="relative w-64 sm:w-76 md:w-84 aspect-[4/5] rounded-[32px] p-2 bg-gradient-to-b from-white via-slate-100 to-blue-50/80 shadow-2xl border border-slate-200/90 overflow-hidden">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-950">
                  <img
                    src="/images/profile.jpg"
                    alt="Tanmoy Chattopadhyay - Business Analyst"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Soft bottom edge blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-center py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="text-xs font-bold text-white tracking-wide">Tanmoy Chattopadhyay</div>
                    <div className="text-[11px] text-cyan-300 font-medium">B.Tech Computer Science &bull; Business Analyst</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Strategic Focus Card */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end space-y-4 order-3 text-left lg:text-right">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 justify-start lg:justify-end">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">Strategic Focus</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                Passionate about translating complex enterprise data into actionable business value, executive Power BI dashboards, and scalable architectures.
              </p>
              <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end pt-1">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold">BRD / FRD</span>
                <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold">Power BI DAX</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">tbXMS Telemetry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monochromatic Tech Stack Logo Marquee */}
        <div className="border-t border-b border-slate-200/80 py-5 mb-4 overflow-hidden relative bg-slate-50/50 rounded-2xl">
          <div className="flex w-[200%] animate-marquee gap-8 items-center">
            {[...techLogos, ...techLogos].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/70 text-slate-700 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm hover:border-blue-400 transition-colors"
              >
                <span className="text-base">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
