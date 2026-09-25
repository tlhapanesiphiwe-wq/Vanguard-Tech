import React from 'react';
import { PageId } from '../types';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/company';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  MessageCircle,
  FileCheck,
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div id="vanguard-process-page" className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Execution Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#18365B] tracking-tight">
            Our 5-Step Delivery Framework
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            From initial discovery to post-launch maintenance, every milestone is structured for predictability, clear client checkpoints, and zero technical friction.
          </p>
        </div>
      </section>

      {/* 5-Step Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="relative bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all"
              >
                {/* Step Number & Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-[#18365B] text-white font-display font-bold text-sm flex items-center justify-center">
                      {step.number}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-[#18365B]">
                        {step.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono font-semibold self-start sm:self-center">
                    <Clock className="w-3.5 h-3.5 text-[#4C6E8E]" />
                    <span>Estimated Timeline: {step.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Split Action: Client vs Vanguard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
                      Your Action at this Stage:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {step.clientActions}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50/40 border border-blue-100 text-xs">
                    <span className="font-bold text-[#18365B] uppercase tracking-wider block mb-1">
                      Vanguard Tangible Deliverables:
                    </span>
                    <ul className="space-y-1 text-slate-700">
                      {step.vanguardDeliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Summary Pill */}
          <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div>
              <h3 className="text-lg font-display font-bold text-white">
                Fast Turnarounds & Dependable Delivery
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Starter Launch projects launch in 5–7 days. Growth Engine sites take 2–3 weeks. E-commerce and AI builds take 3–5 weeks.
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('growth-engine')}
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-white hover:bg-slate-100 text-[#18365B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span>Kick Off Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
