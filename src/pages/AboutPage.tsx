import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, FOUNDERS } from '../data/company';
import { VanguardLogo } from '../components/VanguardLogo';
import {
  ShieldCheck,
  Target,
  Users,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  Cpu,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (packageId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div id="vanguard-about-page" className="pt-20">
      {/* Header / Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-3">
            <span>About Vanguard Tech</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#18365B] tracking-tight">
            Engineered to “Build Beyond Limits”
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Vanguard Tech Pty.(Ltd) was founded with a singular conviction: South African businesses deserve modern, robust digital architecture backed by responsive, high-integrity technical partners.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 font-mono">
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800 font-semibold">
              CIPC: {COMPANY_INFO.registrationNumber}
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800 font-semibold">
              Founded: {COMPANY_INFO.foundedYear}
            </span>
            <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-800 font-semibold">
              Headquarters: Johannesburg, South Africa
            </span>
          </div>
        </div>
      </section>

      {/* The Vanguard Story & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E] block">
                Our Origin & Conviction
              </span>
              <h2 className="text-3xl font-display font-bold text-[#18365B] tracking-tight">
                Eliminating the Digital Divide for South African Commerce
              </h2>
              <p>
                Too many growing businesses in South Africa have been let down by bloated digital agencies charging exorbitant fees for slow, generic templates—or by unreliable freelancers who vanish the moment maintenance is required.
              </p>
              <p>
                At Vanguard Tech, we engineered an alternative built on <strong>predictable ZAR pricing</strong>, <strong>modern high-performance engineering</strong>, and <strong>direct founder accountability</strong>.
              </p>
              <p>
                Whether helping a Gauteng logistics firm secure enterprise cross-border contracts, empowering a local retail brand to double online e-commerce sales via PayFast and Yoco, or configuring 24/7 AI lead automation, we treat each client’s digital infrastructure as mission-critical.
              </p>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-display font-extrabold text-[#18365B]">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Code & Asset Ownership</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-display font-extrabold text-[#18365B]">99.9%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Infrastructure Uptime Target</div>
                </div>
              </div>
            </div>

            {/* Right Pillars Box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8]">
                Our 4 Guiding Principles
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-blue-300 shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Commercial Outcome Focused</h4>
                    <p className="text-slate-300 mt-0.5">We build to convert visitors into inquiries, sales, and high-value contracts—not just vanity graphics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-emerald-300 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Clean Modern Engineering</h4>
                    <p className="text-slate-300 mt-0.5">No sluggish page builders. Clean code, sub-2s speeds, core SEO structure, and scalable architectures.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-amber-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Direct Founder Partnership</h4>
                    <p className="text-slate-300 mt-0.5">You communicate directly with our CEO and CTO. Transparent proposals, no middle-manager bureaucracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-800 text-blue-300 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Long-Term Maintenance Commitment</h4>
                    <p className="text-slate-300 mt-0.5">Every tier includes technical maintenance and security updates, ensuring sustained peak performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Brand Identity & Colors Showcase */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Official Logo Display */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <VanguardLogo size="2xl" layout="stacked" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mt-4">
                  Official Corporate Brandmark
                </span>
              </div>

              {/* Right Column: Colors & Symbolic Architecture */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4C6E8E] block">
                    Visual Identity & Geometry
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#18365B] mt-1">
                    The Official Vanguard Mark & Primary Colours
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Our emblem features an interlocking 3D dual-chevron ribbon forming a dynamic “W”. The left chevron embodies structural foundation, while the layered right chevron signifies forward acceleration and scaling beyond boundaries.
                  </p>
                </div>

                {/* Primary Color Swatches */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-md bg-[#18365B] shadow-xs shrink-0 flex items-center justify-center text-white text-[10px] font-mono font-bold">
                      #18365B
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Primary Navy Blue</div>
                      <div className="text-[11px] text-slate-500 font-mono">RGB: 24, 54, 91</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="w-10 h-10 rounded-md bg-[#4C6E8E] shadow-xs shrink-0 flex items-center justify-center text-white text-[10px] font-mono font-bold">
                      #4C6E8E
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Secondary Slate Blue</div>
                      <div className="text-[11px] text-slate-500 font-mono">RGB: 76, 110, 142</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white text-[#4C6E8E] text-xs font-bold uppercase tracking-wider mb-2 border border-slate-200">
              <span>Executive Leadership</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[#18365B]">
              Meet The Founders
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Vanguard Tech Pty.(Ltd) is steered by founders combining high-level commercial acumen with rigorous software systems engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                id={`founder-profile-${idx}`}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#18365B]">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-bold text-[#4C6E8E] uppercase tracking-wider mt-0.5">
                        {founder.role}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Primary Focus: <span className="text-slate-700 font-medium">{founder.focus}</span>
                      </div>
                    </div>

                    <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 text-[#18365B] font-display font-extrabold flex items-center justify-center text-lg shrink-0">
                      {founder.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Key Responsibilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {founder.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4C6E8E] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {idx === 0 ? (
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18365B] hover:text-[#4C6E8E]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#4C6E8E]" />
                      <span>Contact CEO: {COMPANY_INFO.phone}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                      <Cpu className="w-3.5 h-3.5 text-[#4C6E8E]" />
                      <span>Direct Technical Oversight on All Builds</span>
                    </div>
                  )}

                  <span className="text-[11px] font-mono text-slate-400">Co-Founder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & POPIA Commitment */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 text-[#18365B] mb-1">
            <ShieldCheck className="w-6 h-6 text-[#4C6E8E]" />
          </div>
          <h3 className="text-2xl font-display font-bold text-[#18365B]">
            Strict Statutory Compliance & Governance
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vanguard Tech Pty.(Ltd) operates under the Companies Act of South Africa (Registration: K2026516671). We adhere rigorously to the Protection of Personal Information Act (POPIA), ensuring enterprise-grade client data confidentiality, secure invoicing, and ethical governance across all digital engagements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 rounded-md bg-[#18365B] hover:bg-[#224775] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Partner With Vanguard</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-md border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
