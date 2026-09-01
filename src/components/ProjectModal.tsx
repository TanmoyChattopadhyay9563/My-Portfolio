import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, BarChart2, Layers, ExternalLink, ShieldAlert } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectUrl = project.liveDemoUrl || project.githubUrl || "https://github.com/TanmoyChattopadhyay9563";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-[32px] bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Top Header Bar - Close Button Never Overlaps */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-slate-100 bg-white/95 backdrop-blur-md z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono uppercase tracking-wider border border-blue-100">
            {project.category}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container with Custom Inset Scrollbar */}
        <div className="overflow-y-auto px-6 sm:px-10 py-6 custom-modal-scrollbar flex-1 space-y-8">
          {/* Title & Role */}
          <div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight">
              {project.title}
            </h2>
            {project.role && (
              <p className="text-sm font-semibold text-slate-500 mt-1.5">
                Role: <span className="text-blue-600">{project.role}</span>
              </p>
            )}
          </div>

          {/* Project Images Gallery (Dual Screenshots Support) */}
          {project.secondaryImage ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} - View 1`}
                  className="w-full h-60 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-slate-300">
                  {project.imageCaption || "Dashboard Overview"}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} - View 2`}
                  className="w-full h-60 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-semibold text-slate-300">
                  {project.secondaryImageCaption || "Analytics & Telemetry View"}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[380px] object-cover object-center"
              />
            </div>
          )}

          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-blue-600">
                    {m.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Executive Overview */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-950 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Executive Overview</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem Statement & Solution Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problemStatement && (
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="font-display font-bold text-sm text-amber-800 mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>The Business Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.solutionArchitecture && (
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <h4 className="font-display font-bold text-sm text-blue-800 mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>Technical &amp; Functional Solution</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solutionArchitecture}
                </p>
              </div>
            )}
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h3 className="font-display font-bold text-lg text-slate-950 mb-3 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-blue-600" />
              <span>Key Project Highlights &amp; Deliverables</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, idx) => {
                const colonIndex = h.indexOf(':');
                if (colonIndex !== -1) {
                  const title = h.substring(0, colonIndex);
                  const desc = h.substring(colonIndex + 1);
                  return (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-bold">{title}:</strong>
                        <span>{desc}</span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Impact */}
          {project.businessImpact && project.businessImpact.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border border-blue-200">
              <h3 className="font-display font-bold text-base text-slate-950 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Measurable Business Impact &amp; ROI</span>
              </h3>
              <ul className="space-y-2">
                {project.businessImpact.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used Pills */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Technologies &amp; Methodologies:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Bottom Footer Bar */}
        <div className="px-6 sm:px-10 py-4 border-t border-slate-100 bg-slate-50/90 flex items-center justify-between z-20">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200 text-xs font-bold transition-colors"
          >
            Close Case Study
          </button>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <span>View Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
