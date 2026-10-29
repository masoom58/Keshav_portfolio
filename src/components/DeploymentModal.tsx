import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Globe } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'local' | 'vercel' | 'github_pages'>('local');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#0c1122] border border-slate-800 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:px-6 bg-[#080d1a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-950/40 text-blue-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                How to Run Locally &amp; Deploy
              </h3>
              <p className="text-xs text-slate-400">
                Deployment guides for Keshav Parvat&rsquo;s portfolio
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-[#090e1c] px-4">
          <button
            type="button"
            onClick={() => setActiveTab('local')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'local'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Run Locally (Vite)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vercel')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'vercel'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Deploy to Vercel
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('github_pages')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'github_pages'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Deploy to GitHub Pages
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300">
          {activeTab === 'local' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                To test and edit your portfolio on your local computer using Node.js:
              </p>

              <div>
                <div className="flex items-center justify-between text-slate-400 mb-1 font-mono text-[11px]">
                  <span>Clone &amp; Install Dependencies</span>
                  <button
                    onClick={() => copyToClipboard('git clone https://github.com/keshavparvat11/portfolio.git\ncd portfolio\nnpm install\nnpm run dev', 'clone')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    {copiedKey === 'clone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'clone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-[#070a14] border border-slate-800 rounded-lg font-mono text-blue-300 whitespace-pre">
{`git clone https://github.com/keshavparvat11/portfolio.git
cd portfolio
npm install
npm run dev`}
                </pre>
              </div>

              <p className="text-slate-400">
                Your portfolio will start running immediately at <code className="text-blue-300 font-mono">http://localhost:3000</code>.
              </p>
            </div>
          )}

          {activeTab === 'vercel' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                Vercel provides free global hosting for React + Vite apps with automated continuous deployment on every git push:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Push this repository to your GitHub: <code className="text-blue-300 font-mono">https://github.com/keshavparvat11/portfolio</code></li>
                <li>Go to <span className="text-white font-medium">vercel.com</span> and log in with your GitHub account.</li>
                <li>Click <span className="text-white font-medium">&ldquo;Add New Project&rdquo;</span> and select your repository.</li>
                <li>Framework Preset: Select <span className="text-blue-300 font-mono">Vite</span>.</li>
                <li>Click <span className="text-white font-medium">&ldquo;Deploy&rdquo;</span>.</li>
              </ol>

              <div className="p-3 bg-blue-950/30 border border-blue-900/60 rounded-lg text-blue-200">
                Your live site will be ready in under 60 seconds at <code className="font-mono">keshavparvat.vercel.app</code> with an SSL certificate.
              </div>
            </div>
          )}

          {activeTab === 'github_pages' && (
            <div className="space-y-4">
              <p className="leading-relaxed">
                To host completely free on your GitHub account (<code className="text-blue-300 font-mono">keshavparvat11.github.io</code>):
              </p>

              <div>
                <div className="flex items-center justify-between text-slate-400 mb-1 font-mono text-[11px]">
                  <span>Build command</span>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'gh-build')}
                    className="hover:text-white flex items-center gap-1"
                  >
                    {copiedKey === 'gh-build' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'gh-build' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-3 bg-[#070a14] border border-slate-800 rounded-lg font-mono text-blue-300 whitespace-pre">
{`npm run build`}
                </pre>
              </div>

              <p className="text-slate-300">
                You can configure GitHub Actions (<code className="font-mono text-slate-300">.github/workflows/deploy.yml</code>) or deploy the generated <code className="font-mono text-slate-300">dist</code> folder to the <code className="font-mono text-slate-300">gh-pages</code> branch in your repository settings under <strong>Pages &gt; Build and deployment &gt; GitHub Actions</strong>.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#080d1a] border-t border-slate-800 flex justify-end px-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
