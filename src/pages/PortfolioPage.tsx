import React, { useState } from 'react';
import { PageId, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/company';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Globe,
  ShoppingCart,
  Cpu,
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onSelectCaseStudy,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Corporate Web', label: 'Corporate & Web' },
    { id: 'E-Commerce', label: 'E-Commerce & Retail' },
    { id: 'AI & Automation', label: 'AI & Automation' },
  ];

  const filteredStudies =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <div id="vanguard-portfolio-page" className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Client Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#18365B] tracking-tight">
            Case Studies & Proven Deliverables
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Explore how Vanguard Tech Pty.(Ltd) engineers high-converting web portals, seamless local e-commerce, and practical AI systems for South African businesses.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  filter === cat.id
                    ? 'bg-[#18365B] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                id={`portfolio-item-${study.id}`}
                onClick={() => onSelectCaseStudy(study)}
                className="group rounded-xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Category & Industry */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E] bg-slate-100 px-2.5 py-0.5 rounded">
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#18365B] group-hover:text-[#4C6E8E] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Client: <span className="font-semibold text-slate-800">{study.client}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Metrics Bento Box */}
                  <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-center">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-lg sm:text-xl font-display font-bold text-[#18365B]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge snippet */}
                  <div className="text-xs text-slate-600 space-y-1 mb-4">
                    <div className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                      Challenge Overcome:
                    </div>
                    <p className="line-clamp-2 italic text-slate-500">
                      "{study.challenge}"
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-[#18365B] group-hover:text-[#4C6E8E] flex items-center gap-1">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholders Note for Future Expansion */}
          <div className="mt-12 p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 text-center max-w-2xl mx-auto">
            <h4 className="text-sm font-display font-bold text-slate-800">
              Custom Case Study & Reference Architecture Available
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We frequently sign non-disclosure agreements (NDAs) for proprietary enterprise platforms. Inquire with our executive team for specific industry references or live demos.
            </p>
            <button
              onClick={() => onOpenQuoteModal('growth-engine')}
              className="mt-4 px-4 py-2 rounded bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider"
            >
              Request Tailored Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
