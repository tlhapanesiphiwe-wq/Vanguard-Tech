import React, { useState } from 'react';
import { WHY_CHOOSE_POINTS, COMPANY_INFO } from '../data/company';
import {
  Building2,
  Award,
  Smartphone,
  Monitor,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: (packageId?: string) => void;
  onNavigateContact?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenQuoteModal,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<string>(WHY_CHOOSE_POINTS[0].id);

  const activePoint = WHY_CHOOSE_POINTS.find((p) => p.id === activeTab) || WHY_CHOOSE_POINTS[0];

  const getIcon = (name: string, className = 'w-5 h-5') => {
    switch (name) {
      case 'Building2':
        return <Building2 className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Monitor':
        return <Monitor className={className} />;
      case 'Headphones':
        return <Headphones className={className} />;
      default:
        return <ShieldCheck className={className} />;
    }
  };

  return (
    <section id="why-choose-vanguard" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200/80 text-[#18365B] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#4C6E8E]" />
            <span>The Vanguard Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#18365B] tracking-tight">
            Why Choose Vanguard Tech?
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Engineered specifically for South African commerce. We eliminate bloated agency retainers and junior contractor runarounds with direct founder accountability and local statutory accreditation.
          </p>

          {/* Quick Pillars Trust Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>South African Business</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#18365B] text-white font-semibold shadow-2xs">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>B-BBEE Level 1 (135% Accredited)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
              <Smartphone className="w-3.5 h-3.5 text-[#4C6E8E]" />
              <span>Mobile Friendly</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
              <Monitor className="w-3.5 h-3.5 text-[#4C6E8E]" />
              <span>Desktop Friendly</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
              <Headphones className="w-3.5 h-3.5 text-blue-600" />
              <span>Dedicated Support</span>
            </span>
          </div>
        </div>

        {/* 5 Pillar Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation / Pillar Selector (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {WHY_CHOOSE_POINTS.map((item, index) => {
              const isSelected = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#18365B] shadow-md ring-1 ring-[#18365B]/20 -translate-y-0.5'
                      : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#18365B] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {getIcon(item.iconName, 'w-5 h-5')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#4C6E8E] font-bold">
                        Pillar 0{index + 1}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#18365B]/10 text-[#18365B]'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-display font-bold mt-1 transition-colors ${
                        isSelected ? 'text-[#18365B]' : 'text-slate-800'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {item.highlight}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Deep-Dive Detail Card (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header Badge & Stat */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#18365B] text-white flex items-center justify-center shadow-xs">
                    {getIcon(activePoint.iconName, 'w-6 h-6')}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E]">
                      {activePoint.badge}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#18365B]">
                      {activePoint.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#18365B]">
                    {activePoint.statValue}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {activePoint.statLabel}
                  </div>
                </div>
              </div>

              {/* Subheading & Description */}
              <div className="py-6 space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                  {activePoint.highlight}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activePoint.description}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Key Business Benefits For You:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePoint.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50 border border-slate-100/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-800">CIPC K2026516671</span> •{' '}
                <span className="font-semibold text-slate-800">{COMPANY_INFO.bbbeeFullStatus}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onOpenQuoteModal('growth-engine')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>Get Started With Vanguard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {onNavigateContact && (
                  <button
                    onClick={onNavigateContact}
                    className="hidden sm:inline-flex px-4 py-2.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                  >
                    <span>Contact Us</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
