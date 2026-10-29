import React from 'react';
import { Award, Terminal, CheckCircle2, TrendingUp, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#080b13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Verified Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Key Achievements &amp; Competitive Milestones
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Factual academic and algorithmic achievements documented in resume and credentials.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => {
            const isGate = item.id === 'gate-2026';

            return (
              <div
                key={item.id}
                className="bg-[#0b101e] border border-slate-800/90 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-colors flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                      <span>{item.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">{item.badgeText}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400">
                      {isGate ? <Award className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <div className="text-3xl font-extrabold text-blue-400 font-mono tracking-tight mb-4 tabular-nums">
                    {item.metric}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Official Score / Verified</span>
                  <span className="text-slate-300 font-medium">Computer Science &amp; IT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
