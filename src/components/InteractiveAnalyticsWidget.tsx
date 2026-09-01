import React, { useState } from 'react';
import { BarChart3, Filter, RefreshCw, Trophy, Activity, Eye, Zap, Database } from 'lucide-react';

export const InteractiveAnalyticsWidget: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('2024');

  const dataset: { [season: string]: {
    matches: number;
    runs: number;
    boundaries: number;
    wickets: number;
    topTeams: { name: string; winRate: number; color: string }[];
    topPerformers: { name: string; team: string; value: number; metric: string }[];
  }} = {
    '2024': {
      matches: 74,
      runs: 14560,
      boundaries: 3450,
      wickets: 845,
      topTeams: [
        { name: 'KKR', winRate: 78, color: '#2563eb' },
        { name: 'SRH', winRate: 67, color: '#06b6d4' },
        { name: 'RR', winRate: 62, color: '#4f46e5' },
        { name: 'RCB', winRate: 54, color: '#10b981' },
      ],
      topPerformers: [
        { name: 'V. Kohli', team: 'RCB', value: 741, metric: 'Runs' },
        { name: 'R. Gaikwad', team: 'CSK', value: 583, metric: 'Runs' },
        { name: 'T. Head', team: 'SRH', value: 567, metric: 'Runs' },
        { name: 'H. Patel', team: 'PBKS', value: 24, metric: 'Wickets' },
        { name: 'V. Chakravarthy', team: 'KKR', value: 21, metric: 'Wickets' }
      ]
    },
    '2023': {
      matches: 74,
      runs: 14210,
      boundaries: 3310,
      wickets: 820,
      topTeams: [
        { name: 'CSK', winRate: 72, color: '#f59e0b' },
        { name: 'GT', winRate: 70, color: '#06b6d4' },
        { name: 'MI', winRate: 58, color: '#2563eb' },
        { name: 'LSG', winRate: 55, color: '#10b981' },
      ],
      topPerformers: [
        { name: 'S. Gill', team: 'GT', value: 890, metric: 'Runs' },
        { name: 'F. du Plessis', team: 'RCB', value: 730, metric: 'Runs' },
        { name: 'D. Conway', team: 'CSK', value: 672, metric: 'Runs' },
        { name: 'M. Shami', team: 'GT', value: 28, metric: 'Wickets' },
        { name: 'M. Sharma', team: 'GT', value: 27, metric: 'Wickets' }
      ]
    },
    'All-Time (17 Seasons)': {
      matches: 1065,
      runs: 214500,
      boundaries: 48900,
      wickets: 12400,
      topTeams: [
        { name: 'MI', winRate: 57, color: '#2563eb' },
        { name: 'CSK', winRate: 59, color: '#f59e0b' },
        { name: 'KKR', winRate: 52, color: '#4f46e5' },
        { name: 'RCB', winRate: 48, color: '#10b981' },
      ],
      topPerformers: [
        { name: 'V. Kohli', team: 'RCB', value: 8004, metric: 'Runs' },
        { name: 'S. Dhawan', team: 'PBKS', value: 6769, metric: 'Runs' },
        { name: 'R. Sharma', team: 'MI', value: 6628, metric: 'Runs' },
        { name: 'Y. Chahal', team: 'RR', value: 205, metric: 'Wickets' },
        { name: 'P. Chawla', team: 'MI', value: 192, metric: 'Wickets' }
      ]
    }
  };

  const currentData = dataset[selectedSeason] || dataset['2024'];

  return (
    <div className="rounded-[32px] p-6 sm:p-10 bg-white border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden my-12">
      {/* Decorative top pill */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-sm">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg text-slate-950">
                Live Power BI / SQL Data Slicer Simulator
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                Interactive
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Simulating DAX calculations & dynamic cross-filtering from the IPL analytics project.
            </p>
          </div>
        </div>

        {/* Season Slicer Controls */}
        <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-full border border-slate-200">
          <span className="text-xs font-bold text-slate-500 px-2.5 flex items-center gap-1">
            <Filter className="w-3 h-3 text-blue-600" />
            Season:
          </span>
          {['2024', '2023', 'All-Time (17 Seasons)'].map((season) => (
            <button
              key={season}
              onClick={() => setSelectedSeason(season)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedSeason === season
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              {season}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Sliced in Real Time */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Matches Processed</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-1 font-mono">
            {currentData.matches.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">100% SQL Aggregated</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tournament Runs</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-mono">
            {currentData.runs.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Avg 196.4 per inning</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Boundaries</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1 font-mono">
            {currentData.boundaries.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">4s & 6s Tracked</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Wickets Sliced</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 mt-1 font-mono">
            {currentData.wickets.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">DAX Bowling Index</div>
        </div>
      </div>

      {/* Dynamic Visual Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Win Probability Gauges */}
        <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              Team Win Probability &amp; Conversion (%)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">DAX: DIVIDE(...)</span>
          </div>

          <div className="space-y-3.5">
            {currentData.topTeams.map((team) => (
              <div key={team.name} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">{team.name}</span>
                  <span className="text-blue-600">{team.winRate}% Win Rate</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${team.winRate}%`, backgroundColor: team.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Key Performers Matrix */}
        <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              Top Standout Impact Leaders ({selectedSeason})
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Filtered Slice</span>
          </div>

          <div className="space-y-2.5">
            {currentData.topPerformers.map((p, idx) => (
              <div
                key={p.name}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-bold text-slate-900">{p.name}</span>
                    <span className="ml-2 text-[10px] text-slate-500 px-1.5 py-0.5 rounded bg-slate-100 font-medium">
                      {p.team}
                    </span>
                  </div>
                </div>
                <span className="font-mono font-bold text-blue-600">
                  {p.value.toLocaleString()} {p.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
