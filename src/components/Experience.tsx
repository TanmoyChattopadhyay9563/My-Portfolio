import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-white">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-2 tracking-tight">
            / Career Trajectory
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-950 tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Track record of authoring BRD/FRD blueprints, stakeholder alignment, and deploying Power BI decision engines across enterprise consultancies and fintech organizations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-slate-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center z-10 shadow-md hidden sm:flex">
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block w-1/2"></div>

                  {/* Experience Card Content */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="p-7 sm:p-8 rounded-[28px] bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-display font-bold text-lg text-slate-950 group-hover:text-blue-600 transition-colors">
                          {exp.role}
                        </span>
                        {exp.badge ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                            {exp.badge}
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                            {exp.type}
                          </span>
                        )}
                      </div>

                      {/* Company & Meta */}
                      <div className="text-sm font-bold text-blue-600 mb-3">
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 mb-5 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2.5 mb-5 border-t border-slate-100 pt-4">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
