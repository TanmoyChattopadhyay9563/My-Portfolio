import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { educationList, certifications } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 relative bg-[#f8fbff] overflow-hidden">
      {/* Radiant Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-ambient-section pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-2 tracking-tight">
            / Education &amp; Credentials
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-950 tracking-tight mb-4">
            Academic Background &amp; Certifications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Grounded in rigorous Computer Science engineering fundamentals, complemented by global cloud industry credentials.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="font-display font-bold text-xl text-slate-900">Academic Journey</h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="p-7 rounded-[28px] bg-white border border-slate-200 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono border border-blue-100">
                      {edu.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.year}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {edu.degree}
                  </h4>

                  <p className="text-sm font-semibold text-slate-600 mb-3">
                    {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                  </p>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Showcase Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="font-display font-bold text-xl text-slate-900">Industry Credentials</h3>
            </div>

            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-8 rounded-[28px] bg-white border border-slate-200 shadow-lg shadow-slate-900/5 relative overflow-hidden group hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  {/* High Quality Official Badge Image */}
                  <div className="relative w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-xl shadow-amber-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={cert.badgeImage}
                      alt={cert.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold mb-2">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{cert.issueDate}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 border-t border-slate-100 pt-4">
                  {cert.description}
                </p>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Verified Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Domain Synergy Box */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200/80 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>The Computer Science Advantage in BA</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                Because of a foundational CS degree, Tanmoy communicates directly in engineering vocabulary with backend developers, data engineers, and cloud architects—eliminating misinterpretation and accelerating software delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
