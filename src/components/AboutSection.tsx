import React from 'react';
import { BookOpen, Code2, Users, Compass, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Strong Programming Foundations",
      description: "Deep appreciation for low-level mechanics, pointer arithmetic, memory layout, and deterministic logic in C, C++, and Java. I build software by understanding what happens beneath abstractions."
    },
    {
      icon: Users,
      title: "Teaching & Concept Clarification",
      description: "As a Teaching Assistant at SGSITS, I explain challenging programming concepts through intuitive step-by-step reasoning, helping peers and junior students build independent debugging confidence."
    },
    {
      icon: BookOpen,
      title: "Analytical Problem Solving",
      description: "Rigorous preparation leading to qualifying GATE 2026 (Score: 316) in Computer Science & IT, coupled with 200+ solved algorithmic challenges across LeetCode and GeeksforGeeks."
    },
    {
      icon: Compass,
      title: "Continuous Technical Growth",
      description: "Bridging core computer science theory with modern web development technologies and systems programming, driven by disciplined curiosity and structured study."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Professional Background
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Rooted in core computer science, passionate about structured logic and teaching.
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Prose Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am a Computer Science graduate and current <strong className="text-white font-medium">M.Tech student in Information Technology</strong> at <strong className="text-white font-medium">Shri G. S. Institute of Technology &amp; Science (SGSITS), Indore</strong>. My academic and technical journey is centered on disciplined problem-solving, algorithmic fundamentals, and making technical concepts understandable to others.
            </p>
            <p>
              Having completed my B.Tech in Computer Science from <strong className="text-white font-medium">Samrat Ashok Technological Institute (SATI), Vidisha</strong> in 2026, I qualified the national <strong className="text-white font-medium">GATE 2026 examination in Computer Science &amp; IT</strong> with a score of 316. This preparation solidified my understanding of algorithms, data structures, discrete mathematics, and computer system internals.
            </p>
            <p>
              In my role as a <strong className="text-white font-medium">Teaching Assistant at SGSITS</strong>, I conduct lab assistance and conceptual guidance for C programming. I believe the best way to master a concept is to be able to explain it clearly from first principles—breaking down pointers, memory addresses, and recursive calls into visual and logical mental models.
            </p>
            <p className="text-slate-400 text-sm italic border-t border-slate-800/80 pt-4">
              "I value clean code, structured problem-solving, continuous learning, and making technical concepts intuitive for every learner."
            </p>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-[#0a0f1d] border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
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
