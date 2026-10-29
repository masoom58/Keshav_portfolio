import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Formative engineering studies at premier state institutions in Madhya Pradesh.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#0b101e] border border-slate-800/90 rounded-xl p-6 sm:p-7 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-blue-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {edu.period}
                  </span>
                  <span className="text-slate-400">{edu.location}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-blue-300 mb-2">
                  {edu.field}
                </div>
                <div className="text-xs text-slate-400 mb-6 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Degree Status</span>
                <span className={edu.period.includes('Present') ? 'text-emerald-400' : 'text-slate-300'}>
                  {edu.period.includes('Present') ? 'Enrolled & Active' : 'Graduated (2026)'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
