import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  PieChart, 
  Cpu, 
  Sparkles, 
  CheckCircle, 
  Sliders,
  Layers,
  Search,
  Zap,
  TrendingUp,
  Database,
  Award
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons: { [key: string]: React.ElementType } = {
    FileSpreadsheet,
    PieChart,
    Cpu,
    Sparkles,
  };

  const floatingPills = [
    { name: 'Requirement Engineering', icon: '⚡', color: 'border-blue-200 text-blue-800 bg-blue-50/80', pos: 'top-0 left-4 sm:left-12' },
    { name: 'Power BI & DAX Analytics', icon: '📊', color: 'border-sky-200 text-sky-800 bg-sky-50/80', pos: 'top-2 right-4 sm:right-12' },
    { name: 'SQL & Data Modeling', icon: '🗄️', color: 'border-cyan-200 text-cyan-800 bg-cyan-50/80', pos: 'top-24 left-0 sm:left-6' },
    { name: 'AWS Cloud Solutions', icon: '☁️', color: 'border-emerald-200 text-emerald-800 bg-emerald-50/80', pos: 'top-24 right-0 sm:right-6' },
    { name: 'BRD / FRD / SRS Docs', icon: '📑', color: 'border-indigo-200 text-indigo-800 bg-indigo-50/80', pos: 'bottom-4 left-6 sm:left-16' },
    { name: 'Agile & Scrum Delivery', icon: '🎯', color: 'border-purple-200 text-purple-800 bg-purple-50/80', pos: 'bottom-4 right-6 sm:right-16' },
  ];

  const activeCategory = skillCategories[activeCategoryIndex];

  const allSkills = skillCategories.flatMap((cat) => 
    cat.skills.map((s) => ({ ...s, categoryName: cat.category }))
  );

  const filteredSkills = searchQuery.trim() === ''
    ? activeCategory.skills
    : allSkills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-[#f8fbff] overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-ambient-section pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Value Statement */}
        <div className="relative max-w-4xl mx-auto text-center mb-12 sm:mb-16 pt-2">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-4 tracking-tight">
            Hallo!
          </div>

          <h2 className="font-display font-medium text-2xl sm:text-4xl lg:text-5xl text-slate-900 leading-snug tracking-tight max-w-3xl mx-auto">
            focus is on blending <span className="font-semibold text-slate-950">clear strategy</span>, <span className="font-semibold text-blue-600">data analytics</span>, and <span className="font-semibold text-cyan-600">technical depth</span> to <span className="font-editorial text-3xl sm:text-5xl text-slate-500 font-normal">craft scalable solutions</span> that solve real business problems
          </h2>

          {/* Floating Pill Badges around statement */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-3xl mx-auto">
            {floatingPills.map((pill, idx) => (
              <div
                key={idx}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${pill.color}`}
              >
                <span>{pill.icon}</span>
                <span>{pill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Divider & Matrix Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Skill Matrix</span>
          </div>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 tracking-tight mb-3">
            Core Competencies &amp; Technical Proficiency
          </h3>
          <p className="text-slate-600 text-sm sm:text-base">
            Verified expertise across enterprise requirement engineering, Power BI business intelligence, SQL querying, and AWS cloud fundamentals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any skill (e.g., Power BI, BRD, SQL, AWS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-900 px-2 py-0.5 rounded-full bg-slate-100"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Navigation Tabs */}
        {searchQuery === '' && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {skillCategories.map((cat, idx) => {
              const Icon = categoryIcons[cat.icon] || Layers;
              const isActive = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-md shadow-slate-900/20 scale-105'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/90 shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.category}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl card-light card-light-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-100">
                    {skill.tag || 'Skill'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>Proficiency</span>
                  <span className="text-slate-800 font-bold">{skill.level}%</span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Production Ready
                </span>
                <span className="font-medium text-slate-600">
                  {skill.level >= 90 ? 'Expert Level' : 'Advanced'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
