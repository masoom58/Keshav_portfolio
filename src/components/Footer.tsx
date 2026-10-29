import React from 'react';
import { Github, Mail, ArrowUp, FileText, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, onOpenDeployModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#06080e] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-white text-base font-bold mb-1">
              <span className="w-2 h-2 rounded-xs bg-blue-500" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-slate-400 italic text-xs max-w-md">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume PDF</span>
            </button>

            <button
              type="button"
              onClick={onOpenDeployModal}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-slate-400"
            >
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>Run &amp; Deploy Guide</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-md bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors ml-2 cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Keshav Parvat. Computer Science &amp; IT · SGSITS Indore.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>GATE 2026 Score: 316</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
