import React, { useState, useRef } from 'react';
import {
  Download,
  FileText,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Sparkles,
  Eye,
  Calendar,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { portfolioData } from '../data/portfolioData';

const Resume: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-[#06060e] dark:via-gray-900 dark:to-[#090916] transition-colors"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.04] rounded-full blur-[140px]"
        />
        <div
          className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-cyan-500/[0.06] dark:bg-cyan-500/[0.04] rounded-full blur-[140px]"
        />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(100,100,120,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
        {/* ── Section Header ── */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
            <Sparkles size={13} className="text-indigo-500" />
            Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Resume
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 8"
                fill="none"
              >
                <path
                  d="M2 6c20-4 40-4 58-2s38 2 58-2"
                  stroke="url(#resume-ug)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="resume-ug" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset=".5" stopColor="#9333ea" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my professional qualifications, software engineering internship, educational background, and technical certifications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={portfolioData.personal.resumeDownload}
              download={portfolioData.personal.resumeFilename}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Download Resume (PDF)
            </a>

            <a
              href={portfolioData.personal.resumeDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/30 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/[0.08] transition-all duration-300"
            >
              <Eye size={16} className="text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
              View Full PDF
              <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1.5 mt-8 rounded-2xl bg-gray-200/60 dark:bg-white/[0.04] border border-gray-300/40 dark:border-white/[0.06] backdrop-blur-md">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === 'interactive'
                  ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <Briefcase size={14} />
              Interactive Overview
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === 'pdf'
                  ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <FileText size={14} />
              Original PDF Document
            </button>
          </div>
        </div>

        {/* ── Tab 1: Interactive Timeline & CV View ── */}
        {activeTab === 'interactive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Work Experience & Certifications (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Experience Card */}
              <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/5">
                <div className="rounded-[23px] bg-white dark:bg-gray-900 p-6 md:p-8 backdrop-blur-xl">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Work Experience
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Industry Software Development Experience
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                      Jan 2025 – Apr 2026
                    </span>
                  </div>

                  <div className="border-t border-gray-100 dark:border-white/[0.06] pt-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base font-bold text-gray-800 dark:text-gray-100">
                        Python Full Stack Developer Intern
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <MapPin size={12} className="text-indigo-500" />
                        Lucknow, UP
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                      Wire Wings Pvt. Ltd. <span className="text-gray-400 dark:text-gray-500 font-normal">• Software Development & Testing Division</span>
                    </p>

                    <ul className="space-y-3">
                      {[
                        'Engineered and deployed scalable full-stack web applications utilizing Python, Django, DRF, and modern frontend stack.',
                        'Designed and integrated secure RESTful APIs with JWT authentication, ensuring seamless client-server data synchronization.',
                        'Optimized PostgreSQL database queries, Django ORM lookups, and indexing strategies, reducing query latency by 25%.',
                        'Executed rigorous root-cause debugging, functional testing, and automated unit testing to maintain production stability.',
                        'Collaborated in agile sprint cycles using Git/GitHub for continuous integration, code reviews, and feature delivery.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.06] p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Certifications & Project Delivery
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Verified Technical Credentials
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/5 via-indigo-500/5 to-cyan-500/5 border border-amber-500/20 dark:border-amber-500/10 mb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                      Python Full Stack Development Certification
                    </h4>
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 px-2.5 py-0.5 rounded-full">
                      Wire Wings Pvt. Ltd. (April 2026)
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <strong className="text-gray-700 dark:text-gray-300">Projects Delivered:</strong> NEXORA Enterprise Platform & Apnora Mart Digital Commerce System.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Education & Core Competencies (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Education Card */}
              <div className="rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.06] p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Education
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Academic Background
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* MCA */}
                  <div className="relative pl-5 border-l-2 border-indigo-500 dark:border-indigo-400">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        2024 – 2026
                      </span>
                      <span className="text-xs text-gray-400 font-mono">Lucknow, UP</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium">
                      Babu Banarasi Das University (BBDU)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Specialized in enterprise web systems, scalable database design, and software engineering.
                    </p>
                  </div>

                  {/* BCA */}
                  <div className="relative pl-5 border-l-2 border-cyan-500 dark:border-cyan-400">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        2020 – 2023
                      </span>
                      <span className="text-xs text-gray-400 font-mono">Patna, Bihar</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      Bachelor of Computer Application (BCA)
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 font-medium">
                      Maulana Mazharul Haque Arabic & Persian University
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Graduated with strong fundamentals in Computer Applications, OOP, DSA, and Database Normalization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Competencies Quick Summary */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 p-6 md:p-8 text-white shadow-xl">
                <h4 className="text-lg font-extrabold mb-3 flex items-center gap-2">
                  <Sparkles size={18} className="text-yellow-300" />
                  Key Strengths
                </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    'Python & Django',
                    'Django REST Framework (DRF)',
                    'PostgreSQL & Query Optimization',
                    'React.js & Next.js',
                    'JWT & Zero-Trust Security',
                    'MVC/MVT Architecture',
                    'Redis Caching',
                    'CI/CD & Git/GitHub',
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md text-xs font-semibold border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-between">
                  <span className="text-xs text-white/80">Looking for new opportunities</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-cyan-200 transition-colors"
                  >
                    Get in touch <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Tab 2: Embedded Live PDF Viewer ── */}
        {activeTab === 'pdf' && (
          <div className="rounded-3xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.06] p-4 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between flex-wrap gap-3 pb-4 mb-4 border-b border-gray-100 dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-indigo-500" />
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  Amit_Kumar_Resume.pdf
                </span>
                <span className="text-xs text-gray-400">· Official PDF Document</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Amit_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  <Download size={13} />
                  Download
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={13} />
                  Open in New Tab
                </a>
              </div>
            </div>

            {/* Responsive PDF Frame */}
            <div className="w-full h-[800px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-white/10">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                title="Amit Kumar Resume PDF"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
