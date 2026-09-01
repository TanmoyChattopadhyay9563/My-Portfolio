import React from 'react';
import { 
  Briefcase, 
  BarChart4, 
  Globe, 
  Cloud, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => {
  const serviceIcons: { [key: string]: React.ElementType } = {
    Briefcase,
    BarChart4,
    Globe,
    Cloud,
    Layers,
  };

  return (
    <section id="services" className="py-16 sm:py-20 relative overflow-hidden bg-[#f8fbff]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-ambient-section pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-2 tracking-tight">
            / What I Deliver
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-950 tracking-tight mb-4">
            Specialized Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            High-caliber requirement engineering, documentation clarity, and Power BI data architectures tailored for fast-moving enterprise organizations.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = serviceIcons[srv.iconName] || Briefcase;
            return (
              <div
                key={srv.id}
                className="p-8 rounded-[28px] bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-blue-300 transition-all duration-400 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Capabilities Bullet Points */}
                <div className="pt-6 border-t border-slate-100 space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Included Capabilities:
                  </div>
                  {srv.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-slate-950 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
