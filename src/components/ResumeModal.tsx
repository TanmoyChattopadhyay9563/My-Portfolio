import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, experiences, educationList, projects, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[32px] bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Fixed Action Bar */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-slate-200 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Executive CV Preview</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200 text-xs font-bold border border-slate-200 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shadow-sm"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas with custom scrollbar */}
        <div className="overflow-y-auto px-6 sm:px-10 py-6 custom-modal-scrollbar flex-1">
          <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 text-slate-800 text-sm space-y-6">
            {/* Header */}
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">{personalInfo.name}</h1>
              <p className="text-blue-600 font-bold text-sm mt-0.5">{personalInfo.title}</p>
              
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3 font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {personalInfo.aboutDetailed}
              </p>
            </div>

            {/* Key Competencies Matrix */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Core Skills &amp; Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900">Business Analysis:</strong> Requirement Gathering, BRD/FRD/SRS, Stakeholder Management, Agile/Scrum, User Stories, Gap Analysis.
                </div>
                <div>
                  <strong className="text-slate-900">Data &amp; Analytics:</strong> Power BI (DAX, Power Query), SQL (MySQL), Python (Pandas), Advanced Excel, KPI Dashboards.
                </div>
                <div>
                  <strong className="text-slate-900">Technical &amp; Cloud:</strong> AWS Certified Cloud Practitioner, BigCommerce CMS, JavaScript, HTML5/CSS3, JIRA.
                </div>
                <div>
                  <strong className="text-slate-900">Leadership:</strong> Analytical Problem Solving, Executive Presentations, Team Collaboration.
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap">
                      <span className="font-bold text-slate-900 text-sm">{exp.role} — <span className="text-blue-600">{exp.company}</span></span>
                      <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                    </div>
                    <div className="text-xs text-slate-500 italic">{exp.location}</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                Key Projects
              </h2>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="text-[11px] text-blue-600 font-mono">{proj.category}</span>
                    </div>
                    <p className="text-slate-600 mt-0.5">{proj.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Education
                </h2>
                <div className="space-y-2 text-xs">
                  {educationList.map((edu) => (
                    <div key={edu.id}>
                      <div className="font-bold text-slate-900">{edu.degree}</div>
                      <div className="text-slate-500">{edu.institution} ({edu.year})</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Certifications
                </h2>
                <div className="space-y-2 text-xs">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <div className="font-bold text-slate-900">{cert.title}</div>
                      <div className="text-slate-500">{cert.issuer} • {cert.issueDate}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
