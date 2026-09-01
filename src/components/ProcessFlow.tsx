import React from 'react';
import { 
  Search, 
  Layers, 
  Rocket, 
  CheckCircle2
} from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discover & Elicit",
      subtitle: "Stakeholder Research & Strategy",
      description: "Deep-diving into business objectives, stakeholder pain points, and current workflow bottlenecks through structured interviews and discovery sessions.",
      activities: [
        "Stakeholder discovery workshops & 1-on-1 interviews",
        "As-Is vs. To-Be process mapping (BPMN / Swimlanes)",
        "Gap analysis & technical feasibility assessment",
        "Core KPI identification & business case definition"
      ],
      deliverables: ["Stakeholder Matrix", "Process Maps", "Gap Analysis", "Scope Baseline"],
      icon: Search,
      angle: "-rotate-1 hover:rotate-0",
    },
    {
      number: "02",
      title: "Analyze & Architect",
      subtitle: "BRD / FRD & Data Modeling",
      description: "Transforming ambiguous requirements into industry-standard specifications, star-schema relational data models, and interactive Power BI wireframes.",
      activities: [
        "Comprehensive BRD, FRD & SRS authoring",
        "Star-schema relational database modeling & SQL queries",
        "Interactive Power BI dashboard prototyping & DAX design",
        "User story breakdown with testable acceptance criteria"
      ],
      deliverables: ["BRD & FRD Artifacts", "Power BI Mockups", "DAX Formulas", "Data Dictionary"],
      icon: Layers,
      angle: "rotate-0 hover:-rotate-1 -translate-y-2 sm:-translate-y-4",
    },
    {
      number: "03",
      title: "Deliver & Validate",
      subtitle: "Sprint Governance & ROI",
      description: "Partnering with development squads through sprint planning, defect triage, structured UAT sign-offs, and tracking post-launch adoption metrics.",
      activities: [
        "JIRA sprint backlog grooming & developer handoffs",
        "UAT test plan authoring & stakeholder sign-off",
        "End-user training & standard operating procedures (SOP)",
        "Post-deployment KPI telemetry & business value tracking"
      ],
      deliverables: ["JIRA User Stories", "UAT Test Scripts", "SOP Guides", "Executive Scorecards"],
      icon: Rocket,
      angle: "rotate-1 hover:rotate-0",
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 relative bg-[#fcfdff] overflow-hidden">
      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-ambient-hero pointer-events-none -z-10 opacity-70"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-2 tracking-tight">
            / Our Methodology
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-950 tracking-tight mb-4">
            How I Bridge Strategy &amp; Execution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A structured 3-phase delivery framework designed to deconstruct complex business bottlenecks into clean technical blueprints and high-impact analytics.
          </p>
        </div>

        {/* 3 Main Phase Cards with Curved Connection Graphic */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle curved connecting line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-16 h-24 pointer-events-none -z-0">
            <svg className="w-full h-full" viewBox="0 0 900 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 50 50 Q 275 -20 450 50 T 850 50"
                stroke="#93c5fd"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative p-8 sm:p-9 rounded-[32px] bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transform ${step.angle} flex flex-col justify-between group`}
                >
                  <div>
                    {/* Step Top Header: Number & Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="font-display font-black text-5xl sm:text-6xl text-slate-950 tracking-tighter">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-slate-950 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                      {step.subtitle}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Key Activities List */}
                    <div className="space-y-2.5 mb-6 pt-5 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Core Activities:
                      </div>
                      {step.activities.map((act, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Tags */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Deliverables:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((del) => (
                        <span
                          key={del}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          {del}
                        </span>
                      ))}
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
