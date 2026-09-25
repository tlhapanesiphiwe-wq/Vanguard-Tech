import React, { useState } from 'react';
import { PageId, ServicePackage, CaseStudy } from '../types';
import { COMPANY_INFO, PACKAGES, BROADER_CAPABILITIES, CASE_STUDIES } from '../data/company';
import { VanguardLogo } from '../components/VanguardLogo';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onSelectCaseStudy,
}) => {
  // Quick interactive cost calculator state on homepage
  const [calcTier, setCalcTier] = useState<string>('growth-engine');
  const [includeEcommerce, setIncludeEcommerce] = useState<boolean>(false);
  const [includeAI, setIncludeAI] = useState<boolean>(false);

  const selectedTierData = PACKAGES.find((p) => p.id === calcTier) || PACKAGES[1];

  const getEstimatedRange = () => {
    if (calcTier === 'starter-launch') {
      if (includeEcommerce || includeAI) return 'R6,500 – R8,500';
      return 'R4,500 – R5,500';
    }
    if (calcTier === 'growth-engine') {
      if (includeEcommerce && includeAI) return 'R11,000 – R14,500';
      if (includeEcommerce || includeAI) return 'R8,500 – R11,500';
      return 'R6,000 – R9,500';
    }
    // complete-vanguard
    if (includeEcommerce || includeAI) return 'R15,000 – R25,000+';
    return 'R12,000 – R20,000+';
  };

  return (
    <div id="vanguard-home-page" className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Official Brand Mark Emblem */}
            <div className="flex justify-center pb-2">
              <VanguardLogo size="xl" layout="stacked" />
            </div>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#18365B] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4C6E8E]" />
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#4C6E8E] font-bold">
                {COMPANY_INFO.tagline}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">South African Business Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#18365B] tracking-tight leading-[1.12]">
              Professional Websites, E-Commerce & AI Automation That Deliver Results.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Vanguard Tech Pty.(Ltd) crafts scalable, high-speed digital solutions for South African businesses. We combine modern UI/UX design, engineering rigor, maintenance, and long-term technical support.
            </p>

            {/* Key Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="hero-quote-cta-btn"
                onClick={() => onOpenQuoteModal('growth-engine')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#18365B] hover:bg-[#224775] text-white font-bold text-sm uppercase tracking-wider shadow-sm transition-all hover:shadow-md hover:translate-y-[-1px] flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-choose-package-btn"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-md border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-sm transition-colors hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <span>Explore Packages & Pricing</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>

              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto px-5 py-3.5 rounded-md border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Signals Strip */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#4C6E8E]" />
                  <span>CIPC Registered</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-mono">Reg: {COMPANY_INFO.registrationNumber}</p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Transparent ZAR</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Fixed pricing from R4,500</p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Speed Optimized</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Sub-2s page load speeds</p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Local Leadership</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Direct line: {COMPANY_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES & PACKAGES (Main Conversion Focus) */}
      <section id="packages-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18365B] tracking-tight">
              Predictable Packages Built to Scale Your Business
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Clear, upfront South African pricing with zero hidden costs. Every tier integrates modern design, mobile optimization, and included technical maintenance.
            </p>
          </div>

          {/* 3 Main Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                className={`relative rounded-xl flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-[#18365B] shadow-lg ring-1 ring-[#18365B]/10 bg-white'
                    : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#18365B] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Tier Title & Tagline */}
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E]">
                      {pkg.tier} Tier
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#18365B] mt-0.5">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[36px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 border-y border-slate-100 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#18365B]">
                        {pkg.onceOffPrice}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 block mt-1">
                      {pkg.priceNote}
                    </span>

                    {/* Ongoing Support note */}
                    {pkg.ongoingSupport && (
                      <div className="mt-2.5 inline-block px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
                        <span className="font-semibold text-slate-900">Support: </span>
                        <span>{pkg.ongoingSupport}</span>
                      </div>
                    )}
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-50 text-xs text-slate-600">
                    <span className="font-bold text-slate-900 block mb-0.5">Best Suited For:</span>
                    {pkg.idealFor}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4C6E8E] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onOpenQuoteModal(pkg.id)}
                    className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-[#18365B] hover:bg-[#224775] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Consultation & scoping call included
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Comparison Link */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#18365B] hover:text-[#4C6E8E] underline underline-offset-4"
            >
              <span>View full feature comparison matrix & bespoke capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE QUOTE ESTIMATOR WIDGET */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-2">
                    <span>Interactive Estimate</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#18365B]">
                    Configure Your Solution in 30 Seconds
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Select your starting base package and add optional modules for e-commerce or AI automation.
                  </p>
                </div>

                {/* Base Tier Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. Select Base Package Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {PACKAGES.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setCalcTier(pkg.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all ${
                          calcTier === pkg.id
                            ? 'border-[#18365B] bg-slate-50 ring-1 ring-[#18365B]'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-bold text-[#18365B]">{pkg.name}</div>
                        <div className="text-[11px] text-[#4C6E8E] font-mono mt-0.5">{pkg.onceOffPrice}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Addon Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Optional South African Integrations
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeEcommerce}
                        onChange={(e) => setIncludeEcommerce(e.target.checked)}
                        className="w-4 h-4 text-[#18365B] rounded border-slate-300 focus:ring-[#18365B]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-slate-900 block">
                          South African E-Commerce Gateway Setup (PayFast, Yoco, Ozow)
                        </span>
                        <span className="text-slate-500">
                          Product inventory, automated checkout & local courier delivery hooks.
                        </span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeAI}
                        onChange={(e) => setIncludeAI(e.target.checked)}
                        className="w-4 h-4 text-[#18365B] rounded border-slate-300 focus:ring-[#18365B]"
                      />
                      <div className="text-xs">
                        <span className="font-semibold text-slate-900 block">
                          AI Automation & WhatsApp Lead Triage Bot
                        </span>
                        <span className="text-slate-500">
                          24/7 client pre-qualification, auto-reply & CRM synchronization.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Estimated Result Card */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-lg p-6 sm:p-7 flex flex-col justify-between h-full border border-slate-800">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#94A3B8] font-mono mb-1">
                    Estimated Investment Range
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    {getEstimatedRange()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Transparent once-off ZAR pricing
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Selected Package:</span>
                      <span className="font-semibold text-white">{selectedTierData.name}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Included Support:</span>
                      <span className="text-emerald-400 font-medium">Included in tier</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>E-Commerce Setup:</span>
                      <span className="font-mono text-slate-200">{includeEcommerce ? 'Included' : 'None'}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>AI Automation:</span>
                      <span className="font-mono text-slate-200">{includeAI ? 'Included' : 'None'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenQuoteModal(calcTier)}
                    className="w-full py-3 rounded-md bg-white hover:bg-slate-100 text-[#18365B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Request This Exact Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Confirmed via formal quote from CEO Mpumelelo Mabaso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BROADER CAPABILITIES OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-[#18365B]">
              Beyond Traditional Websites: Full Technical Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From high-traffic portals to intelligent automation pipelines, Vanguard Tech provides the engineering muscle South African enterprises need to dominate online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BROADER_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#18365B] flex items-center justify-center font-bold mb-4">
                  {idx === 0 && <Globe className="w-5 h-5 text-[#4C6E8E]" />}
                  {idx === 1 && <Layers className="w-5 h-5 text-[#4C6E8E]" />}
                  {idx === 2 && <Sparkles className="w-5 h-5 text-[#4C6E8E]" />}
                  {idx === 3 && <Zap className="w-5 h-5 text-[#4C6E8E]" />}
                  {idx === 4 && <ShieldCheck className="w-5 h-5 text-[#4C6E8E]" />}
                </div>

                <h3 className="text-lg font-display font-bold text-[#18365B] mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  {cap.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4C6E8E]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Custom Engineering Prompt Card */}
            <div className="p-6 rounded-xl bg-[#18365B] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
                  Custom Requirements?
                </span>
                <h3 className="text-xl font-display font-bold text-white mt-2">
                  Need Bespoke Software or Tailored API Systems?
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Our CTO Siphiwe Tlhapane leads custom architecture for complex systems, database migrations, and proprietary tools.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenQuoteModal('complete-vanguard')}
                  className="w-full py-2.5 rounded-md bg-white hover:bg-slate-100 text-[#18365B] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Consult With Our CTO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES TEASER */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Proven Impact</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-[#18365B]">
                Selected Work & South African Case Studies
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Real solutions engineered for measurable commercial expansion.
              </p>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#18365B] hover:text-[#4C6E8E]"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <div
                key={cs.id}
                onClick={() => onSelectCaseStudy(cs)}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E] bg-slate-100 px-2.5 py-0.5 rounded">
                      {cs.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {cs.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#18365B] group-hover:text-[#4C6E8E] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cs.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 my-5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-center">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-base sm:text-lg font-display font-bold text-[#18365B]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {cs.technologies.slice(0, 2).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-slate-500 font-mono">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#18365B] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDERS / LEADERSHIP STRIP */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-2">
              <span>Executive Leadership</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[#18365B]">
              Direct Partnership With Our Founders
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              At Vanguard Tech Pty.(Ltd), you work directly with our leadership. We do not outsource your mission-critical web platforms to junior contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO Card */}
            <div className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#18365B]">
                    Mpumelelo Mabaso
                  </h3>
                  <p className="text-xs font-semibold text-[#4C6E8E] uppercase tracking-wider mt-0.5">
                    Chief Executive Officer & Co-Founder
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#18365B] flex items-center justify-center font-bold text-sm">
                  MM
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Leads client acquisition, consultative scoping, strategic alignment, transparent invoicing, and ongoing client account partnerships.
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-mono font-semibold text-[#18365B] hover:text-[#4C6E8E] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4C6E8E]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <span className="text-slate-400">Gauteng, SA</span>
              </div>
            </div>

            {/* CTO Card */}
            <div className="p-6 sm:p-7 rounded-xl border border-slate-200 bg-white shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#18365B]">
                    Siphiwe Tlhapane
                  </h3>
                  <p className="text-xs font-semibold text-[#4C6E8E] uppercase tracking-wider mt-0.5">
                    Chief Technology Officer & Co-Founder
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#18365B] flex items-center justify-center font-bold text-sm">
                  ST
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Directs technical architecture, modern website builds, e-commerce payment integrations, AI automation engines, and post-launch infrastructure quality.
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">
                  Engineering Oversight & SLA Delivery
                </span>
                <span className="text-slate-400">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH CONVERTING CALL TO ACTION BANNER */}
      <section className="py-16 bg-[#18365B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
            {COMPANY_INFO.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Ready to Accelerate Your Online Presence?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Book a 15-minute consultation with CEO Mpumelelo Mabaso or select your package to receive a detailed, fixed-price proposal.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('growth-engine')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-white hover:bg-slate-100 text-[#18365B] font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Get Started Today</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-md border border-slate-700 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>Call 068 075 6718</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-md border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
