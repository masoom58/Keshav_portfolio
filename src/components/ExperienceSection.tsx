import React from 'react';
import { Briefcase, CheckCircle, Clock, MapPin, Calendar, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Academic &amp; Professional Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Teaching &amp; Technical Mentorship
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Applying structured reasoning, communication clarity, and debugging skills to mentor engineering undergraduates.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0b101e] border border-slate-800/90 rounded-xl p-6 sm:p-8 hover:border-slate-700 transition-colors shadow-lg shadow-black/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-1">
                    <span>{exp.organization}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.weeklyHours}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities &amp; Pedagogical Approach
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Competencies Demonstrated */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 mr-2 font-medium">
                  Applied Competencies:
                </span>
                {exp.keyCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="text-xs text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
