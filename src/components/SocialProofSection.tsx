import React, { useState } from 'react';
import { SOCIAL_PROOF_TESTIMONIALS, COMPANY_INFO } from '../data/company';
import { SocialProofTestimonial } from '../types';
import {
  Star,
  Quote,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Smartphone,
  Globe,
  Sliders,
  Eye,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SocialProofSectionProps {
  onOpenQuoteModal: (packageId?: string) => void;
  onNavigateContact?: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  onOpenQuoteModal,
  onNavigateContact,
}) => {
  const [selectedClientId, setSelectedClientId] = useState<string>(
    SOCIAL_PROOF_TESTIMONIALS[0].id
  );
  const [comparisonMode, setComparisonMode] = useState<'after' | 'before' | 'side-by-side'>('side-by-side');

  const activeClient: SocialProofTestimonial =
    SOCIAL_PROOF_TESTIMONIALS.find((c) => c.id === selectedClientId) ||
    SOCIAL_PROOF_TESTIMONIALS[0];

  return (
    <section id="social-proof-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Client Track Record & Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#18365B] tracking-tight">
            Client Results: Real Reviews, Screenshots, Before & After
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            See the tangible commercial impact of partnering with Vanguard Tech Pty.(Ltd). Real South African businesses, direct metrics, and verified before-and-after transformations.
          </p>
        </div>

        {/* Client Selection Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SOCIAL_PROOF_TESTIMONIALS.map((client) => {
            const isSelected = client.id === selectedClientId;
            return (
              <button
                key={client.id}
                onClick={() => setSelectedClientId(client.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-[#18365B] text-white border-[#18365B] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {client.avatarText}
                </div>
                <span>{client.companyName}</span>
              </button>
            );
          })}
        </div>

        {/* Main Testimonial & Before/After Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Top Review Banner */}
          <div className="bg-[#18365B] text-white p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Review Text */}
              <div className="lg:col-span-8 space-y-4">
                {/* Rating stars & verified badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(activeClient.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-300 font-mono">5.0 / 5.0 Rating</span>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    ✓ Verified Client Deliverable
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#4C6E8E]/40 absolute -top-4 -left-3 -z-0" />
                  <p className="text-base sm:text-lg text-white font-medium leading-relaxed relative z-10 italic">
                    “{activeClient.review}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-11 h-11 rounded-full bg-[#4C6E8E] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                    {activeClient.avatarText}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">
                      {activeClient.clientName}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {activeClient.role}, <span className="text-white font-semibold">{activeClient.companyName}</span>
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {activeClient.industry} • {activeClient.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Badge & Quick Outcome */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block">
                  Project Engagement
                </span>
                <div className="text-lg font-display font-bold text-white">
                  {activeClient.projectType}
                </div>
                <div className="text-xs text-slate-300">
                  Completed & Supported in {activeClient.projectYear}
                </div>

                <div className="pt-2 border-t border-white/15">
                  <button
                    onClick={() => onOpenQuoteModal('growth-engine')}
                    className="w-full py-2.5 rounded-md bg-white hover:bg-slate-100 text-[#18365B] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Before & After Interactive Showcase */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E]">
                  Transformation Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18365B]">
                  Before & After Vanguard Tech Engineering
                </h3>
              </div>

              {/* Toggle controls */}
              <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-2xs self-start sm:self-auto">
                <button
                  onClick={() => setComparisonMode('side-by-side')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    comparisonMode === 'side-by-side'
                      ? 'bg-[#18365B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Side by Side
                </button>
                <button
                  onClick={() => setComparisonMode('before')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    comparisonMode === 'before'
                      ? 'bg-rose-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Before Only
                </button>
                <button
                  onClick={() => setComparisonMode('after')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    comparisonMode === 'after'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  After (Vanguard)
                </button>
              </div>
            </div>

            {/* Comparison Grid */}
            <div
              className={`grid gap-6 ${
                comparisonMode === 'side-by-side'
                  ? 'grid-cols-1 lg:grid-cols-2'
                  : 'grid-cols-1 max-w-3xl mx-auto'
              }`}
            >
              {/* BEFORE CARD */}
              {(comparisonMode === 'side-by-side' || comparisonMode === 'before') && (
                <div className="bg-white rounded-xl border-2 border-rose-200 p-6 sm:p-7 shadow-xs space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider border border-rose-200">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      <span>Before Vanguard Tech</span>
                    </div>
                    <span className="text-xs text-rose-600 font-mono font-semibold">Legacy Infrastructure</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-display font-bold text-slate-900">
                      {activeClient.before.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {activeClient.before.description}
                    </p>
                  </div>

                  {/* UI Screenshot Mockup: Before */}
                  <div className="rounded-lg border border-slate-200 bg-slate-100 overflow-hidden shadow-inner">
                    {/* Fake Browser Chrome */}
                    <div className="bg-slate-200 px-3 py-1.5 flex items-center justify-between border-b border-slate-300 text-[10px] text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                      </div>
                      <span className="truncate max-w-[200px] text-rose-700">⚠️ Insecure / Slow / 6.8s Load</span>
                      <span className="text-slate-400">Desktop</span>
                    </div>

                    <div className="p-4 bg-slate-50 space-y-3 font-sans text-xs">
                      <div className="flex items-center justify-between border-b pb-2 text-slate-400">
                        <span className="font-bold text-slate-600">Old Header (Broken Layout)</span>
                        <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded">
                          Non-Responsive
                        </span>
                      </div>
                      <div className="h-16 bg-slate-200/80 rounded flex items-center justify-center text-slate-500 text-center px-4 text-[11px]">
                        Sluggish template, broken mobile viewport, missing payment gateways, high cart drop-off.
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                        <div className="p-2 rounded bg-white border border-slate-200">
                          ❌ Form submissions failing
                        </div>
                        <div className="p-2 rounded bg-white border border-slate-200">
                          ❌ Google Mobile Test Failed
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row: Before */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-center">
                    {activeClient.before.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-base font-display font-bold text-rose-700">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pain Points */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Critical Weaknesses Encountered:
                    </span>
                    <ul className="space-y-1.5">
                      {activeClient.before.painPoints.map((pain, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="text-rose-500 font-bold shrink-0">✕</span>
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* AFTER CARD */}
              {(comparisonMode === 'side-by-side' || comparisonMode === 'after') && (
                <div className="bg-white rounded-xl border-2 border-emerald-500 p-6 sm:p-7 shadow-md space-y-5 relative">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>After Vanguard Tech Pty.(Ltd)</span>
                    </div>
                    <span className="text-xs text-emerald-700 font-mono font-bold">✓ High-Converting & Fast</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-display font-bold text-[#18365B]">
                      {activeClient.after.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {activeClient.after.description}
                    </p>
                  </div>

                  {/* UI Screenshot Mockup: After */}
                  <div className="rounded-lg border border-emerald-200 bg-slate-900 overflow-hidden shadow-inner">
                    {/* Fake Browser Chrome */}
                    <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between border-b border-slate-700 text-[10px] text-slate-300 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                      </div>
                      <span className="truncate max-w-[200px] text-emerald-400">🔒 HTTPS Verified | Sub-1.2s Fast</span>
                      <span className="text-emerald-300 font-bold">100/100 Core Vitals</span>
                    </div>

                    <div className="p-4 bg-[#0F223D] text-white space-y-3 font-sans text-xs">
                      <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                        <span className="font-bold text-white tracking-wide">Vanguard High-Speed UI</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                          Mobile & Desktop Sync
                        </span>
                      </div>
                      <div className="h-16 bg-slate-800/80 rounded flex items-center justify-center text-slate-200 text-center px-4 text-[11px] border border-slate-700">
                        Modern geometric UI, instant quote calculator, PayFast + Yoco SA checkout, 1-click WhatsApp.
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-emerald-300">
                        <div className="p-2 rounded bg-slate-800/60 border border-emerald-500/30 flex items-center gap-1.5">
                          ✓ Automated Invoicing & SMS
                        </div>
                        <div className="p-2 rounded bg-slate-800/60 border border-emerald-500/30 flex items-center gap-1.5">
                          ✓ B-BBEE Level 1 Validated
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Row: After */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                    {activeClient.after.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-base font-display font-bold text-emerald-800">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-600 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Improvements */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                      Deliverables & Commercial Wins:
                    </span>
                    <ul className="space-y-1.5">
                      {activeClient.after.keyImprovements.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Call to Action within Social Proof */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="font-bold text-slate-900">Want similar commercial transformation for your business?</span>
                <span className="block text-slate-500">Every package includes scoping, design, engineering, and included maintenance.</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('growth-engine')}
                  className="px-6 py-2.5 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs"
                >
                  <span>Get a Free Scoping Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
