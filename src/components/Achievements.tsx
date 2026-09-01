import React from 'react';
import { Award, TrendingUp, CheckCircle, ShieldCheck, Zap, BarChart } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-12 sm:py-14 relative overflow-hidden bg-white border-y border-slate-200/80">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-ambient-section opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">
            Key Professional Benchmarks
          </h2>
        </div>

        {/* 5-Column Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[24px] bg-slate-50/80 border border-slate-200/80 text-center flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-blue-600 mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="font-display font-bold text-sm text-slate-900 mb-1.5">
                  {item.label}
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium border-t border-slate-200/60 pt-3 mt-2">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
