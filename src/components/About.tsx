import React from 'react';
import { 
  CheckCircle2, 
  Users, 
  BarChart3, 
  Award, 
  TrendingUp, 
  Compass, 
  Mic, 
  Trophy, 
  Activity, 
  Zap, 
  BookOpen, 
  Mail,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personalInfo, professionalValues, personalInterests, experiences, educationList } from '../data/portfolioData';

export const About: React.FC = () => {
  const valueIcons: { [key: string]: React.ElementType } = {
    CheckCircle2,
    Users,
    BarChart3,
    Award,
    TrendingUp,
  };

  const interestIcons: { [key: string]: React.ElementType } = {
    Compass,
    Mic,
    Trophy,
    Activity,
    Zap,
    BookOpen,
  };

  const timelineItems = [
    { role: 'Business Analyst', org: 'Techbridge Consultancy Pvt. Ltd.', period: '2026 → Present', type: 'Full-Time' },
    { role: 'Business Analyst', org: 'MobileFirst Applications', period: '2025 → 2026', type: 'Full-Time' },
    { role: 'Frontend & CMS Intern', org: 'CMS & Web Solutions', period: '2024 → 2024', type: 'Internship' },
    { role: 'B.Tech Computer Science', org: 'GL Bajaj Institute of Tech.', period: '2020 → 2024', type: 'Degree' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-white overflow-hidden">
      {/* Radiant Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Reference Screenshot 4 */}
        <div className="max-w-3xl mb-10">
          <div className="font-editorial text-2xl sm:text-3xl text-slate-500 mb-1.5 tracking-tight">
            / Who Am I
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950 tracking-tight">
            Pushing Boundaries <span className="font-editorial font-normal text-slate-400">since 2020</span>
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column: Portrait Card & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-[32px] overflow-hidden bg-slate-950 p-2 border border-slate-200/90 shadow-xl group">
              <div className="relative w-full aspect-[4/5] sm:h-[440px] rounded-[24px] overflow-hidden bg-slate-950">
                <img
                  src="/images/about-profile.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Social Links & Name Bar */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-[#0077b5] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-slate-900 transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-rose-600 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-emerald-600 transition-all"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="text-right">
                <div className="font-display font-bold text-sm text-slate-900">Tanmoy Chattopadhyay</div>
                <div className="text-xs text-slate-500 font-medium">Business Analyst</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative + Career Timeline Table */}
          <div className="lg:col-span-7 space-y-10">
            {/* Story Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A Business Analyst with a strong Computer Science engineering background, passionate about creating intuitive data experiences and clear enterprise architectures. I collaborate closely with product leaders, business sponsors, and technical teams to deconstruct complex challenges through systematic discovery, BRD/FRD engineering, and high-impact Power BI reporting.
            </p>

            {/* Career Timeline Table matching Reference Screenshot 4 */}
            <div className="border-t border-b border-slate-200 divide-y divide-slate-100">
              {timelineItems.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center hover:bg-slate-50/70 px-2 rounded-xl transition-colors"
                >
                  <div className="sm:col-span-4 font-display font-bold text-sm sm:text-base text-slate-900">
                    {item.role}
                  </div>
                  <div className="sm:col-span-5 text-xs sm:text-sm text-slate-600 font-medium">
                    {item.org}
                  </div>
                  <div className="sm:col-span-3 text-left sm:text-right font-mono text-xs text-blue-600 font-bold">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values Minimalist Grid */}
            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Operating Principles &amp; Values</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {professionalValues.slice(0, 4).map((val) => (
                  <div
                    key={val.title}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all"
                  >
                    <div className="font-display font-bold text-sm text-slate-900 mb-1">
                      {val.title}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
