import React, { useState } from 'react';
import { ArrowRight, Mail, Play, CheckCircle2, Copy, Check, Terminal as TerminalIcon } from 'lucide-react';
import { personalInfo, metricsData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'c_pointers' | 'binary_search' | 'terminal'>('c_pointers');
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string[]>([
    '$ gcc -Wall -O2 teaching_demo.c -o demo',
    '$ ./demo',
    '[SGSITS C-Lab] Initializing memory visualization...',
    'Base array address: 0x7ffd92a0',
    'Pointer arithmetic: *(ptr + 2) = 42 (Offset: 8 bytes in 32-bit int)',
    'Conceptual intuition: Pointers store memory locations, not magic values.',
    '✓ Execution completed cleanly with code 0.'
  ]);
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    c_pointers: `/* SGSITS Lab Session: Teaching Pointer Fundamentals
 * Instructor/TA: Keshav Parvat | SGSITS Indore
 * Objective: Building intuition for memory addresses & dereferencing
 */
#include <stdio.h>

void explain_pointers() {
    int arr[4] = {10, 25, 42, 80};
    int *ptr = arr; // ptr points to arr[0]

    printf("[SGSITS C-Lab] Initializing memory visualization...\\n");
    printf("Base array address: %p\\n", (void*)ptr);
    
    // Step-by-step intuition for students:
    // *(ptr + 2) walks 2 sizeof(int) steps forward in memory
    printf("Pointer arithmetic: *(ptr + 2) = %d (Offset: %lu bytes)\\n", 
           *(ptr + 2), 2 * sizeof(int));
           
    printf("Conceptual intuition: Pointers store memory locations, not magic values.\\n");
}

int main() {
    explain_pointers();
    return 0;
}`,
    binary_search: `// Algorithmic Problem Solving (LeetCode / GATE Practice)
// Invariant: target must lie within [low, high] if present.
#include <vector>
#include <iostream>

int binarySearch(const std::vector<int>& nums, int target) {
    int low = 0;
    int high = static_cast<int>(nums.size()) - 1;

    while (low <= high) {
        // Prevent integer overflow
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) {
            return mid; // Element found at index mid
        } else if (nums[mid] < target) {
            low = mid + 1; // Narrow search space to right half
        } else {
            high = mid - 1; // Narrow search space to left half
        }
    }
    return -1; // Element not found
}`
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setActiveTab('terminal');
    setExecutionOutput(['$ Compiling & executing active code snippet...']);

    setTimeout(() => {
      if (activeTab === 'binary_search') {
        setExecutionOutput([
          '$ g++ -std=c++20 binary_search.cpp -o bs',
          '$ ./bs --test-dataset=[2, 4, 7, 10, 19, 23, 42], target=19',
          '[Step 1] low=0, high=6 -> mid=3 (value=10 < 19) -> search right half',
          '[Step 2] low=4, high=6 -> mid=5 (value=23 > 19) -> search left half',
          '[Step 3] low=4, high=4 -> mid=4 (value=19 == target) -> MATCH FOUND!',
          'Output: Found target 19 at index 4 in 3 iterations (O(log N)).',
          '✓ Verified against all edge cases.'
        ]);
      } else {
        setExecutionOutput([
          '$ gcc -Wall -O2 teaching_demo.c -o demo',
          '$ ./demo',
          '[SGSITS C-Lab] Initializing memory visualization...',
          'Base array address: 0x7ffd92a0',
          'Pointer arithmetic: *(ptr + 2) = 42 (Offset: 8 bytes in 32-bit int)',
          'Conceptual intuition: Pointers store memory locations, not magic values.',
          '✓ Execution completed cleanly with code 0.'
        ]);
      }
      setIsRunning(false);
    }, 600);
  };

  const handleCopyCode = () => {
    const textToCopy = activeTab === 'terminal' 
      ? executionOutput.join('\n') 
      : codeSnippets[activeTab];
    navigator.clipboard.writeText(textToCopy);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial gradient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-40 right-10 w-[350px] h-[300px] bg-violet-600/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Column Typography + Right Column Code Editor Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400 mb-4 tracking-wide uppercase">
              <span>SGSITS Indore</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>M.Tech IT Scholar</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Teaching Assistant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6">
              {personalInfo.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              {personalInfo.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-900/30 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-blue-300 transition-colors whitespace-nowrap cursor-pointer underline-offset-4 hover:underline"
              >
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Real contact highlights */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <span>{personalInfo.email}</span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <span>{personalInfo.phone}</span>
              <span aria-hidden="true" className="text-slate-700">/</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.githubDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Editor & Terminal Visual Mockup */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[380px] bg-[#0c101d] border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col">
              {/* Editor Top Bar with Tabs and Controls */}
              <div className="bg-[#090d18] border-b border-slate-800 px-3 py-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    gcc-workbench · Keshav Parvat
                  </span>
                </div>

                {/* Editor Action Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1.5 text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                    title="Copy code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/50 rounded transition-colors cursor-pointer"
                  >
                    <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center bg-[#0a0f1d] border-b border-slate-800/80 px-2 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('c_pointers')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                    activeTab === 'c_pointers'
                      ? 'border-blue-500 text-blue-300 bg-[#0c101d]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  teaching_demo.c
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('binary_search')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors ${
                    activeTab === 'binary_search'
                      ? 'border-blue-500 text-blue-300 bg-[#0c101d]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  binary_search.cpp
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-2 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
                    activeTab === 'terminal'
                      ? 'border-blue-500 text-blue-300 bg-[#0c101d]'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TerminalIcon className="w-3 h-3" />
                  <span>output.log</span>
                </button>
              </div>

              {/* Code Area / Terminal Area */}
              <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-1 bg-[#0c101d] text-slate-300">
                {activeTab === 'terminal' ? (
                  <div className="space-y-1.5 text-slate-300">
                    {executionOutput.map((line, idx) => (
                      <div
                        key={idx}
                        className={
                          line.startsWith('$')
                            ? 'text-blue-400 font-semibold'
                            : line.startsWith('✓')
                            ? 'text-emerald-400 font-semibold'
                            : line.includes('Step')
                            ? 'text-amber-300'
                            : 'text-slate-300'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                ) : (
                  <pre className="text-slate-300 whitespace-pre font-mono">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                )}
              </div>

              {/* Status bar */}
              <div className="bg-[#080c16] px-3 py-1.5 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>UTF-8 · LF · {activeTab === 'c_pointers' ? 'C17' : activeTab === 'binary_search' ? 'C++20' : 'Bash stdout'}</span>
                <span className="text-slate-400">Keshav Parvat | SGSITS Indore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column metric & credential row placed strictly below the split hero */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#0a0e1a]/80 border border-slate-800/80 rounded-xl">
          {metricsData.map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="text-xs text-slate-400 font-medium">
                {item.label}
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
                {item.value}
              </span>
              <span className="text-xs text-slate-400 leading-snug">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
