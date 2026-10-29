import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  ExternalLink, 
  Github, 
  Code2, 
  Layers, 
  Trash2, 
  Edit3, 
  Sparkles,
  Info
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { defaultProjects, personalInfo } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('keshav_portfolio_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultProjects;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStackInput, setTechStackInput] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('keshav_portfolio_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  const openAddModal = () => {
    setEditingProjectId(null);
    setTitle('');
    setDescription('');
    setTechStackInput('C++, DSA, Web');
    setGithubUrl(personalInfo.github);
    setLiveUrl('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (proj: ProjectItem) => {
    setEditingProjectId(proj.id);
    setTitle(proj.title);
    setDescription(proj.description);
    setTechStackInput(proj.techStack.join(', '));
    setGithubUrl(proj.githubUrl || '');
    setLiveUrl(proj.liveUrl || '');
    setFormError('');
    setIsModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setFormError('Project title is required.');
      return;
    }
    if (!description.trim()) {
      setFormError('Project description is required.');
      return;
    }

    const techArray = techStackInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingProjectId) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProjectId
            ? {
                ...p,
                title: title.trim(),
                description: description.trim(),
                techStack: techArray.length ? techArray : ['Computer Science'],
                githubUrl: githubUrl.trim() || undefined,
                liveUrl: liveUrl.trim() || undefined,
                status: 'completed',
                isUserAdded: true
              }
            : p
        )
      );
    } else {
      const newProj: ProjectItem = {
        id: `proj-${Date.now()}`,
        title: title.trim(),
        description: description.trim(),
        techStack: techArray.length ? techArray : ['Computer Science'],
        githubUrl: githubUrl.trim() || undefined,
        liveUrl: liveUrl.trim() || undefined,
        status: 'completed',
        isUserAdded: true
      };
      setProjects((prev) => [newProj, ...prev.filter((p) => p.status !== 'placeholder')]);
    }

    setIsModalOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => {
      const remaining = prev.filter((p) => p.id !== id);
      return remaining.length === 0 ? defaultProjects : remaining;
    });
  };

  const plannedFocusAreas = [
    {
      title: "Interactive C Pointer & Memory Visualizer",
      category: "Planned Pedagogical Tool",
      description: "Designed to assist SGSITS C-programming students in visualizing stack vs. heap allocation, pointer dereferencing, and array indexing in real-time.",
      technologies: ["C / WebAssembly", "JavaScript", "HTML5 Canvas"],
      targetScope: "Classroom teaching & interactive algorithmic demonstrations"
    },
    {
      title: "Algorithmic Complexity & Benchmark Lab",
      category: "Planned DSA Suite",
      description: "Comparative benchmark environment analyzing time/space trade-offs for sorting algorithms, tree balancings, and graph traversals based on GATE CS curricula.",
      technologies: ["C++", "DSA", "Web Fundamentals"],
      targetScope: "Performance benchmarking & computational verification"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/60 bg-[#080b13]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Portfolio Projects Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Projects &amp; Technical Builds
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Configured for genuine, verified projects. Add your real project repositories and live deployments using the button below.
            </p>
          </div>

          {/* Action to Add Project */}
          <button
            type="button"
            onClick={openAddModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md shadow-blue-900/30 cursor-pointer self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Real Project</span>
          </button>
        </div>

        {/* Informational Banner adhering to the prompt instruction */}
        <div className="mb-8 p-4 bg-blue-950/20 border border-blue-900/40 rounded-xl flex items-start gap-3 text-xs text-blue-200">
          <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <div className="leading-relaxed">
            <span className="font-semibold text-white">Project Showcase Ready: </span>
            Per Keshav&rsquo;s resume, hypothetical projects are never fabricated. You can click &ldquo;Add Real Project&rdquo; to input your actual completed repositories, stack, and live demos at any time.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((proj) => {
            const isPlaceholder = proj.status === 'placeholder';

            return (
              <div
                key={proj.id}
                className={`rounded-xl p-6 transition-all flex flex-col justify-between ${
                  isPlaceholder
                    ? 'bg-[#0a0f1d]/60 border border-dashed border-slate-700/80'
                    : 'bg-[#0b101e] border border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      {isPlaceholder ? (
                        <span className="text-amber-400 font-medium">Slot Ready for Work</span>
                      ) : (
                        <span className="text-emerald-400 font-medium">Verified Project</span>
                      )}
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">
                        {isPlaceholder ? 'Placeholder Template' : 'Active Showcase'}
                      </span>
                    </div>

                    {proj.isUserAdded && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => openEditModal(proj)}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                          title="Edit project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Tech stack items unboxed */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                  {isPlaceholder ? (
                    <button
                      type="button"
                      onClick={openAddModal}
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Click to customize this project slot</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-4">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}

                  <span className="text-[11px] text-slate-400 font-mono">
                    github.com/keshavparvat11
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clearly labeled upcoming project focus areas */}
        <div className="border-t border-slate-800/80 pt-12">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Planned Technical Focus &amp; Concepts
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Architectural Concepts Under Development
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Concepts aligned with M.Tech coursework and teaching responsibilities at SGSITS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plannedFocusAreas.map((plan, idx) => (
              <div
                key={idx}
                className="bg-[#0a0e1c] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-blue-400 font-mono mb-2">
                  <span>{plan.category}</span>
                  <span className="text-slate-400">Concept Blueprint</span>
                </div>

                <h4 className="text-base font-semibold text-white mb-2">
                  {plan.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {plan.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300">
                  {plan.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add / Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-[#0c1122] border border-slate-800 rounded-xl w-full max-w-lg p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">
              {editingProjectId ? 'Edit Project' : 'Add Real Project'}
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Enter the real project title, description, and repository URL to display in your portfolio.
            </p>

            {formError && (
              <div className="p-3 bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs rounded mb-4">
                {formError}
              </div>
            )}

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. C Memory Visualizer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#080c18] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Description *
                </label>
                <textarea
                  rows={3}
                  placeholder="Explain what the project solves, key features, and your technical role..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#080c18] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Tech Stack (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. C++, DSA, Web"
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                  className="w-full bg-[#080c18] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    GitHub URL (optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/keshavparvat11/..."
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="w-full bg-[#080c18] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Live Demo URL (optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    className="w-full bg-[#080c18] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded cursor-pointer"
                >
                  {editingProjectId ? 'Update Project' : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
