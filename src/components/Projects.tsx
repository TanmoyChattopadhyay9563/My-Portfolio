import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { InteractiveAnalyticsWidget } from './InteractiveAnalyticsWidget';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'AI & Machine Learning', 'Power BI & SQL Analytics', 'Business Analysis & tbXMS'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden bg-[#f8fbff]">
      {/* Radiant Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-200/25 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-1.5 tracking-tight">
            / Best Projects
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950 tracking-tight mb-3">
            Selected Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Interactive enterprise analytics, municipal smart city frameworks, and AI data systems engineered with tangible business impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-900/15 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-[28px] bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-52 sm:h-56 bg-slate-950 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Category Pill Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-slate-900 text-[10px] sm:text-[11px] font-bold tracking-wide shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technologies & Actions Bar */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={project.liveDemoUrl || project.githubUrl || "https://github.com/TanmoyChattopadhyay9563"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all shadow-sm"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Power BI Simulator */}
        <InteractiveAnalyticsWidget />
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
