import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!caseStudy) return null;

  return (
    <div
      id="case-study-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-casestudy-modal-btn"
          className="absolute top-5 right-5 p-2 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-100 pb-5 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-slate-100 text-[#18365B] text-xs font-bold uppercase tracking-wider">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {caseStudy.industry}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#18365B]">
            {caseStudy.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Client: <span className="font-semibold text-slate-900">{caseStudy.client}</span>
          </p>
        </div>

        {/* Key Metrics Bento */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl sm:text-2xl font-display font-bold text-[#18365B]">
                {m.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 text-sm leading-relaxed mb-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
              The Business Challenge
            </h4>
            <p className="text-slate-600 bg-amber-50/60 p-3.5 rounded-md border border-amber-200/50">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
              Vanguard Engineering Solution
            </h4>
            <p className="text-slate-600 bg-slate-50 p-3.5 rounded-md border border-slate-200">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Technologies & Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
              Deliverables Deployed
            </h4>
            <ul className="space-y-1 text-xs text-slate-600">
              {caseStudy.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="p-4 rounded-lg bg-slate-900 text-white mb-6 border border-slate-800">
            <p className="text-xs sm:text-sm italic text-slate-200">
              “{caseStudy.testimonial.quote}”
            </p>
            <div className="mt-2 text-right">
              <span className="text-xs font-bold text-white block">
                {caseStudy.testimonial.author}
              </span>
              <span className="text-[11px] text-slate-400 block">
                {caseStudy.testimonial.title}
              </span>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Built by Vanguard Tech Pty.(Ltd)</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal('growth-engine');
            }}
            className="w-full sm:w-auto py-2.5 px-5 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Request a Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
