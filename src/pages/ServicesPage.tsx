import React, { useState } from 'react';
import { PageId } from '../types';
import { PACKAGES, BROADER_CAPABILITIES, COMPANY_INFO } from '../data/company';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  ShoppingCart,
  Cpu,
  Layers,
  HelpCircle,
  Phone,
  MessageCircle,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'table'>('cards');

  // Matrix comparison features
  const comparisonMatrix = [
    {
      feature: 'Website Scale & Pages',
      starter: '1 Landing Page or 3-Page Brochure',
      growth: '6 – 8 Custom Pages',
      complete: 'Unlimited Custom Pages / App / Store',
    },
    {
      feature: 'Once-Off Investment (ZAR)',
      starter: 'R4,500 – R5,500',
      growth: 'R6,000 – R9,500',
      complete: 'R12,000 – R20,000+',
    },
    {
      feature: 'Included Maintenance & Support',
      starter: 'Monthly maintenance included',
      growth: '3 Months Included',
      complete: '6 Months Included + Backups',
    },
    {
      feature: 'Ongoing Support Retainer',
      starter: 'Standard Support Line',
      growth: 'R750 – R1,200/mo (after Month 3)',
      complete: 'R1,500 – R3,000/mo (after Month 6)',
    },
    {
      feature: 'Mobile-Responsive Architecture',
      starter: true,
      growth: true,
      complete: true,
    },
    {
      feature: 'Contact Form & Google Maps Embed',
      starter: true,
      growth: true,
      complete: true,
    },
    {
      feature: 'Core SEO Setup & Indexing',
      starter: 'Basic Setup',
      growth: 'Comprehensive Core SEO',
      complete: 'Advanced Technical SEO & Schema',
    },
    {
      feature: 'Brand Alignment & Design Customization',
      starter: 'Standard Brand Sync',
      growth: 'Custom Brand Alignment',
      complete: 'Full Digital Branding Toolkit',
    },
    {
      feature: 'South African Payment Gateways (PayFast/Yoco/Ozow)',
      starter: false,
      growth: 'Optional Addon',
      complete: true,
    },
    {
      feature: 'AI Automation & Webhook Integration',
      starter: false,
      growth: 'Optional Addon',
      complete: true,
    },
    {
      feature: 'Scheduled Automated Offsite Backups',
      starter: 'Weekly',
      growth: 'Weekly',
      complete: 'Daily / Continuous',
    },
    {
      feature: 'Direct CTO Architecture Oversight',
      starter: 'Standard Review',
      growth: 'Direct Oversight',
      complete: 'Dedicated Priority Line',
    },
  ];

  return (
    <div id="vanguard-services-page" className="pt-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engineering & Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#18365B] tracking-tight">
            Clear Tiers. Transparent ZAR Pricing.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-3">
            Whether launching a high-credibility brochure site or engineering a bespoke multi-million rand e-commerce platform, our packages offer complete accountability.
          </p>

          {/* Toggle View Switcher */}
          <div className="mt-8 inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-5 py-2 text-xs font-bold rounded-md transition-all ${
                activeTab === 'cards'
                  ? 'bg-white text-[#18365B] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Package Overview Cards
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`px-5 py-2 text-xs font-bold rounded-md transition-all ${
                activeTab === 'table'
                  ? 'bg-white text-[#18365B] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Comparison Table
            </button>
          </div>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'cards' ? (
            /* Cards View */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  id={`services-card-${pkg.id}`}
                  className={`relative rounded-xl border flex flex-col justify-between transition-all ${
                    pkg.popular
                      ? 'border-2 border-[#18365B] shadow-lg ring-1 ring-[#18365B]/10 bg-white'
                      : 'border-slate-200 bg-white shadow-xs hover:border-slate-300'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#18365B] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E]">
                      {pkg.tier} Tier
                    </span>
                    <h2 className="text-2xl font-display font-bold text-[#18365B] mt-1">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 min-h-[36px]">
                      {pkg.tagline}
                    </p>

                    <div className="py-4 border-y border-slate-100 my-4">
                      <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#18365B]">
                        {pkg.onceOffPrice}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {pkg.priceNote}
                      </div>

                      {pkg.ongoingSupport && (
                        <div className="mt-2.5 p-2 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">
                          <span className="font-bold text-slate-900">Ongoing Support: </span>
                          <span>{pkg.ongoingSupport}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 text-xs text-slate-600 mb-6">
                      <span className="font-bold text-slate-900 block mb-0.5">Ideal Profile:</span>
                      {pkg.idealFor}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Deliverables & Features:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#4C6E8E] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0">
                    <button
                      onClick={() => onOpenQuoteModal(pkg.id)}
                      className={`w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'bg-[#18365B] hover:bg-[#224775] text-white shadow-sm'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                      }`}
                    >
                      <span>Get Started with {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 sm:p-5 font-bold text-slate-800 uppercase tracking-wider w-1/4">
                      Capability / Deliverable
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#18365B] uppercase tracking-wider w-1/4">
                      <div>Basic Tier</div>
                      <div className="text-base font-extrabold normal-case font-display mt-0.5">Starter Launch</div>
                      <div className="text-[11px] font-mono font-semibold text-[#4C6E8E]">R4,500 – R5,500</div>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#18365B] uppercase tracking-wider w-1/4 bg-slate-100/70 border-x border-slate-200">
                      <div>Standard Tier (Popular)</div>
                      <div className="text-base font-extrabold normal-case font-display mt-0.5">Growth Engine</div>
                      <div className="text-[11px] font-mono font-semibold text-[#4C6E8E]">R6,000 – R9,500</div>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#18365B] uppercase tracking-wider w-1/4">
                      <div>Premium Tier</div>
                      <div className="text-base font-extrabold normal-case font-display mt-0.5">Complete Vanguard</div>
                      <div className="text-[11px] font-mono font-semibold text-[#4C6E8E]">R12,000 – R20,000+</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-800">
                        {row.feature}
                      </td>

                      {/* Starter */}
                      <td className="p-4 sm:p-5 text-slate-600">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          <span>{row.starter}</span>
                        )}
                      </td>

                      {/* Growth */}
                      <td className="p-4 sm:p-5 text-slate-800 font-medium bg-slate-100/40 border-x border-slate-200">
                        {typeof row.growth === 'boolean' ? (
                          row.growth ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          <span>{row.growth}</span>
                        )}
                      </td>

                      {/* Complete */}
                      <td className="p-4 sm:p-5 text-slate-900 font-semibold">
                        {typeof row.complete === 'boolean' ? (
                          row.complete ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-300" />
                          )
                        ) : (
                          <span>{row.complete}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-bold text-slate-700">Action</td>
                    <td className="p-4 sm:p-5">
                      <button
                        onClick={() => onOpenQuoteModal('starter-launch')}
                        className="px-3.5 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider"
                      >
                        Choose Starter
                      </button>
                    </td>
                    <td className="p-4 sm:p-5 bg-slate-100/70 border-x border-slate-200">
                      <button
                        onClick={() => onOpenQuoteModal('growth-engine')}
                        className="px-3.5 py-2 rounded bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Choose Growth
                      </button>
                    </td>
                    <td className="p-4 sm:p-5">
                      <button
                        onClick={() => onOpenQuoteModal('complete-vanguard')}
                        className="px-3.5 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider"
                      >
                        Choose Vanguard
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Broader Capabilities Deep Dive */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-[#18365B]">
              Comprehensive Digital Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Beyond standardized website tiers, our engineering team handles custom software architecture, high-availability e-commerce, and practical AI workflow systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BROADER_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-slate-100 text-[#18365B]">
                    {idx === 0 && <Globe className="w-5 h-5 text-[#4C6E8E]" />}
                    {idx === 1 && <ShoppingCart className="w-5 h-5 text-[#4C6E8E]" />}
                    {idx === 2 && <Cpu className="w-5 h-5 text-[#4C6E8E]" />}
                    {idx === 3 && <Layers className="w-5 h-5 text-[#4C6E8E]" />}
                    {idx === 4 && <ShieldCheck className="w-5 h-5 text-[#4C6E8E]" />}
                  </div>
                  <h3 className="text-base font-display font-bold text-[#18365B]">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cap.description}
                </p>

                <div className="space-y-1 text-xs text-slate-700 mb-4">
                  {cap.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Typical Applications: </span>
                  {cap.useCases.join(', ')}
                </div>
              </div>
            ))}

            {/* SLA Callout */}
            <div className="bg-[#18365B] text-white rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
                  SLA Guarantee
                </span>
                <h3 className="text-lg font-display font-bold text-white mt-1">
                  Long-Term Technical Maintenance & SLAs
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We don't leave you after deployment. All Vanguard retainers include weekly offsite backups, zero-day security patching, and direct WhatsApp / phone developer support.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenQuoteModal('custom')}
                  className="w-full py-2.5 rounded bg-white hover:bg-slate-100 text-[#18365B] text-xs font-bold uppercase tracking-wider"
                >
                  Discuss Custom Retainer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-[#18365B]">
            Not sure which tier fits your business model?
          </h3>
          <p className="text-sm text-slate-600">
            Speak directly with CEO Mpumelelo Mabaso. We will evaluate your sales objectives, existing assets, and recommend the most cost-effective package.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#4C6E8E]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
