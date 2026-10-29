import React, { useState } from 'react';
import { 
  Code, 
  Globe, 
  Binary, 
  Wrench, 
  GraduationCap, 
  Search, 
  Check, 
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Globe': return Globe;
      case 'Binary': return Binary;
      case 'Wrench': return Wrench;
      case 'GraduationCap': return GraduationCap;
      default: return Cpu;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() === '') {
      return true;
    }
    const q = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(q);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(q));
    return matchesTitle || matchesSkill;
  });

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#080b13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technical Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Categorized based on academic foundation, algorithmic practice, and classroom teaching. Presented factually without arbitrary percentages.
            </p>
          </div>

          {/* Search input for quick recruiter filtering */}
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. C++, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d1222] border border-slate-800 text-xs text-white placeholder-slate-400 rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0c101d] border border-slate-800/80 rounded-lg mb-8 max-w-fit">
          {categories.map((catName) => {
            const isSelected = selectedCategory === catName;
            return (
              <button
                key={catName}
                type="button"
                onClick={() => setSelectedCategory(catName)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            const skillsToDisplay = searchQuery.trim()
              ? category.skills.filter((s) =>
                  s.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : category.skills;

            return (
              <div
                key={category.title}
                className="bg-[#0b101e] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Clean unboxed skill list adhering to anti-slop guidelines */}
                  <div className="space-y-2 border-t border-slate-800/80 pt-4">
                    {skillsToDisplay.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between text-xs py-1 text-slate-200 hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                          <span className="font-medium">{skill}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          Verified in curriculum
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-blue-400/80">SGSITS &amp; SATI</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
            <p className="text-sm text-slate-400">
              No skills found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
